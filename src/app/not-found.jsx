"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-8xl font-bold text-[#06529B]">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        Sorry, the page you are looking for does not exist or may have been
        moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-md bg-[#06529B] px-6 py-3 font-medium text-white transition hover:bg-blue-800"
      >
        Back to Home
      </Link>
    </main>
  );
}
