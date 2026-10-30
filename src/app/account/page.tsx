"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

type Profile = {
  full_name: string;
  email: string | null;
  phone: string | null;
};

export default function AccountPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const isConfigured = isSupabaseConfigured();

  useEffect(() => {
    if (!isConfigured) {
      setError("Supabase is not configured. Add the project URL and anon key to .env.local.");
      setIsLoading(false);
      return;
    }

    let active = true;

    async function loadProfile() {
      const supabase = createClient();
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        if (active) {
          setError(sessionError.message);
          setIsLoading(false);
        }
        return;
      }

      if (!session) {
        router.replace("/login");
        return;
      }

      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        if (active) {
          setError(userError.message);
          setIsLoading(false);
        }
        return;
      }

      if (!user) {
        router.replace("/login");
        return;
      }

      const { data, error: profileError } = await supabase
        .from("profiles")
        .select("full_name, email, phone")
        .eq("id", user.id)
        .single();

      if (!active) return;

      if (profileError) {
        setError(`Could not load your profile: ${profileError.message}`);
      } else {
        const loadedProfile: Profile = {
          full_name: data.full_name ?? "",
          email: data.email ?? null,
          phone: data.phone ?? null,
        };
        setProfile(loadedProfile);
        setFullName(loadedProfile.full_name ?? "");
        setPhone(loadedProfile.phone ?? "");
      }
      setIsLoading(false);
    }

    void loadProfile();
    return () => {
      active = false;
    };
  }, [isConfigured, router]);

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!profile) return;

    setError("");
    setNotice("");
    setIsSaving(true);

    const supabase = createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      setError(userError?.message ?? "Your session has expired. Please sign in again.");
      setIsSaving(false);
      return;
    }

    const { data, error: updateError } = await supabase
      .from("profiles")
      .update({ full_name: fullName.trim(), phone: phone.trim() || null })
      .eq("id", user.id)
      .select("full_name, email, phone")
      .single();

    if (updateError) {
      setError(`Could not save your profile: ${updateError.message}`);
    } else {
      setProfile({
        full_name: data.full_name ?? "",
        email: data.email ?? null,
        phone: data.phone ?? null,
      });
      setNotice("Your profile has been updated.");
    }
    setIsSaving(false);
  }

  async function signOut() {
    const { error: signOutError } = await createClient().auth.signOut();
    if (signOutError) {
      setError(`Could not sign out: ${signOutError.message}`);
      return;
    }
    router.push("/");
  }

  if (isLoading) {
    return <p className="mx-auto max-w-2xl py-12 text-center text-stone-600">Loading your account...</p>;
  }

  if (!profile) {
    return (
      <section className="mx-auto max-w-2xl rounded-3xl border border-stone-200 bg-white p-8 shadow-card">
        <h1 className="text-2xl font-extrabold">Your account</h1>
        {error && <p role="alert" className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">{error}</p>}
        {isConfigured && <Link href="/login" className="mt-5 inline-block font-semibold text-brand-700 hover:underline">Sign in with Google</Link>}
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-stone-200 bg-white p-8 shadow-card">
      <p className="text-sm font-semibold text-brand-700">Your Abdulmart account</p>
      <h1 className="mt-2 text-3xl font-extrabold">Profile</h1>
      <p className="mt-2 text-sm text-stone-600">Update your contact details. Your changes are saved to your account.</p>
      {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}
      {notice && <p role="status" className="mt-5 rounded-xl bg-green-50 p-4 text-sm text-green-800">{notice}</p>}
      <form onSubmit={saveProfile} className="mt-6 space-y-5">
        <div>
          <label htmlFor="profile-email" className="mb-2 block text-sm font-semibold">Google account email</label>
          <input id="profile-email" value={profile.email ?? ""} readOnly className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-600" />
        </div>
        <div>
          <label htmlFor="profile-name" className="mb-2 block text-sm font-semibold">Full name</label>
          <input id="profile-name" value={fullName} onChange={(event) => setFullName(event.target.value)} required maxLength={120} className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100" />
        </div>
        <div>
          <label htmlFor="profile-phone" className="mb-2 block text-sm font-semibold">Phone number</label>
          <input id="profile-phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} maxLength={40} className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100" />
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="submit" disabled={isSaving} className="rounded-xl bg-brand-700 px-5 py-3 font-bold text-white hover:bg-brand-800 disabled:opacity-50">
            {isSaving ? "Saving..." : "Save profile"}
          </button>
          <button type="button" onClick={signOut} className="rounded-xl border border-stone-300 px-5 py-3 font-semibold text-stone-700 hover:bg-stone-50">
            Sign out
          </button>
        </div>
      </form>
    </section>
  );
}
