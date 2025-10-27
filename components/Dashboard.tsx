// components/Dashboard.tsx
"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    // Disable scrolling when dashboard is mounted
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            Welcome to Smart Pantry
          </h1>
          <p className="text-xl md:text-2xl text-slate-600">
            Manage your pantry, track expirations, and find recipes to reduce food waste.
          </p>
        </header>

        {/* Dashboard Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Inventory Card */}
          <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="w-28 h-28 mb-6 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-3">
              Inventory
            </h2>
            <p className="text-slate-600 text-base mb-6 flex-grow">
              View and organize your items
            </p>
            <Link
              href={"/pantry" as Route}
              className="px-10 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-base transition-colors shadow-md hover:shadow-lg"
            >
              View
            </Link>
          </div>

          {/* Expiration Tracker Card */}
          <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="w-28 h-28 mb-6 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-3">
              Expiration Tracker
            </h2>
            <p className="text-slate-600 text-base mb-6 flex-grow">
              Monitor expiration dates
            </p>
            <Link
              href={"/pantry" as Route}
              className="px-10 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-base transition-colors shadow-md hover:shadow-lg"
            >
              View
            </Link>
          </div>

          {/* Recipe Suggestions Card */}
          <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="w-28 h-28 mb-6 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-3">
              Recipe Suggestions
            </h2>
            <p className="text-slate-600 text-base mb-6 flex-grow">
              Discover new recipes
            </p>
            <Link
              href={"/recipes" as Route}
              className="px-10 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-base transition-colors shadow-md hover:shadow-lg"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

