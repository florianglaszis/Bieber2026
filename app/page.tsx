import { trip } from "@/data/trip";
import { MapPin, CalendarDays, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

function daysUntil(isoDate: string): number {
  const now = new Date();
  const target = new Date(isoDate);
  now.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - now.getTime()) / 86_400_000);
}

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const quickLinks = [
  { href: "/schedule", label: "Day-by-day schedule", emoji: "📅" },
  { href: "/stay", label: "Accommodation details", emoji: "🏡" },
  { href: "/crew", label: "Who's coming", emoji: "👥" },
  { href: "/info", label: "Useful info & packing", emoji: "🎒" },
];

export default function HomePage() {
  const countdown = daysUntil(trip.departureDate);
  const isPast = countdown < 0;
  const isToday = countdown === 0;

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-br from-orange-400 to-amber-500 dark:from-orange-600 dark:to-amber-700 p-6 text-white shadow-md">
        <p className="text-4xl mb-2">{trip.coverEmoji}</p>
        <h1 className="text-3xl font-bold tracking-tight">{trip.name}</h1>
        <p className="mt-1 text-orange-100 text-sm leading-snug">{trip.tagline}</p>

        <div className="mt-4 flex flex-col gap-2 text-sm">
          <span className="flex items-center gap-2">
            <MapPin size={15} className="opacity-80" />
            {trip.destination}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays size={15} className="opacity-80" />
            {formatDate(trip.departureDate)} — {formatDate(trip.returnDate)}
          </span>
        </div>
      </div>

      {/* Countdown */}
      <div className="card text-center">
        <p className="section-title">Countdown</p>
        {isPast ? (
          <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">Trip complete ✅</p>
        ) : isToday ? (
          <p className="text-4xl font-extrabold text-orange-500">Today&apos;s the day! 🎉</p>
        ) : (
          <>
            <p className="text-6xl font-extrabold text-orange-500 dark:text-orange-400 tabular-nums">
              {countdown}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {countdown === 1 ? "day" : "days"} until departure
            </p>
          </>
        )}
      </div>

      {/* Quick links */}
      <div>
        <p className="section-title">Quick links</p>
        <ul className="grid grid-cols-2 gap-3">
          {quickLinks.map(({ href, label, emoji }) => (
            <li key={href}>
              <Link
                href={href}
                className="card flex flex-col gap-2 hover:border-orange-300 dark:hover:border-orange-500
                           active:scale-95 transition-all duration-150 cursor-pointer"
              >
                <span className="text-2xl">{emoji}</span>
                <span className="text-sm font-medium leading-snug text-gray-700 dark:text-gray-200">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Trip duration pill */}
      <div className="card flex items-center gap-3">
        <Clock size={18} className="text-orange-400 flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {trip.schedule.length}-day trip
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {trip.crew.length} people · {trip.accommodation.name}
          </p>
        </div>
        <Link href="/stay" className="ml-auto text-orange-400">
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
}
