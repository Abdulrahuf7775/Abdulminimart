"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const router = useRouter();
  const isConfigured = isSupabaseConfigured();

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("error") === "auth_callback") {
      setError("Google sign-in could not be completed. Please try again.");
    }
  }, []);

  async function signInWithGoogle() {
    setError("");
    setIsSigningIn(true);

    try {
      const next = new URLSearchParams(window.location.search).get("next");
      const safeNext = next?.startsWith("/") && !next.startsWith("//") ? next : null;
      const callbackUrl = new URL("/auth/callback", window.location.origin);
      if (safeNext) callbackUrl.searchParams.set("next", safeNext);

      const { error: signInError } = await createClient().auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: callbackUrl.toString(),
        },
      });

      if (signInError) {
        setError(signInError.message);
        setIsSigningIn(false);
      }
    } catch (signInError) {
      setError(signInError instanceof Error ? signInError.message : "Unable to start Google sign-in.");
      setIsSigningIn(false);
    }
  }

  return (
    <section className="mx-auto max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-card">
      <p className="text-sm font-semibold text-brand-700">Welcome to Abdulmart</p>
      <h1 className="mt-2 text-3xl font-extrabold">Sign in or create an account</h1>
      <p className="mt-3 text-sm leading-6 text-stone-600">
        Continue with Google. Your first sign-in will create your Abdulmart account.
      </p>
      {!isConfigured && (
        <p role="alert" className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          Add your Supabase project URL and anon key to <code>.env.local</code> to enable sign-in.
        </p>
      )}
      {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}
      <button
        type="button"
        onClick={signInWithGoogle}
        disabled={!isConfigured || isSigningIn}
        className="mt-6 w-full rounded-xl bg-brand-700 px-5 py-3 font-bold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSigningIn ? "Connecting to Google..." : "Continue with Google"}
      </button>
      <button type="button" onClick={() => router.back()} className="mt-4 w-full py-2 text-sm font-semibold text-stone-600 hover:text-brand-700">
        Go back
      </button>
    </section>
  );
}
