"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BasketIcon from "./BasketIcon";

function hasSessionCookie() {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((c) => c.startsWith("sp_session="));
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    setAuthed(hasSessionCookie());
  }, [pathname]);

  useEffect(() => {
    const update = () => setAuthed(hasSessionCookie());
    window.addEventListener("auth-change", update);
    window.addEventListener("focus", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.removeEventListener("auth-change", update);
      window.removeEventListener("focus", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  function handleLogout() {
    document.cookie = "sp_session=; Max-Age=0; Path=/";
    window.dispatchEvent(new Event("auth-change"));
    router.replace("/");
  }

  const links = [
    ...(authed
      ? [
          { name: "Dashboard", href: "/dashboard" },
          { name: "Pantry", href: "/pantry" },
          { name: "Recipes", href: "/recipes" },
          { name: "Shopping", href: "/shopping" },
          { name: "About", href: "/about" },
          { name: "Admin", href: "/admin" },
        ]
      : [
          { name: "Home", href: "/" },
          { name: "About", href: "/about" }
        ]),
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="w-full flex h-16 items-center justify-between px-6">
        {/* Brand - Flush Left */}
        <Link
          href={authed ? "/dashboard" : "/"}
          className="flex items-center gap-2 font-semibold text-slate-900"
        >
          <BasketIcon size={32} className="" />
          <span>SmartPantry</span>
        </Link>

        {/* Links - Flush Right */}
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  active
                    ? "bg-green-600 text-white"
                    : "text-slate-700 hover:bg-green-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {authed ? (
            <button
              onClick={handleLogout}
              className="ml-3 rounded-full px-4 py-1.5 text-sm font-medium transition border border-slate-300 text-slate-700 hover:bg-slate-100"
            >
              Log out
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="ml-3 rounded-full bg-green-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-green-700 transition"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-full px-4 py-1.5 text-sm font-medium transition border border-green-600 text-green-700 hover:bg-green-50"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}