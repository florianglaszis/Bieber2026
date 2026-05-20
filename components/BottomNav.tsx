"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarDays, BedDouble, ScrollText } from "lucide-react";

const nav = [
  { href: "/", label: "Start", icon: Home },
  { href: "/schedule", label: "Programm", icon: CalendarDays },
  { href: "/stay", label: "Unterkunft", icon: BedDouble },
  { href: "/rules", label: "Regeln", icon: ScrollText },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900
                 border-t border-orange-100 dark:border-gray-700
                 pb-safe"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="flex max-w-2xl mx-auto">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 text-xs font-medium
                            transition-colors
                            ${
                              active
                                ? "text-orange-500 dark:text-orange-400"
                                : "text-gray-400 dark:text-gray-500 hover:text-orange-400"
                            }`}
              >
                <Icon
                  size={22}
                  strokeWidth={active ? 2.5 : 1.75}
                  className="transition-transform active:scale-90"
                />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
