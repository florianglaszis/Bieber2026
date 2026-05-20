import { trip } from "@/data/trip";
import { MapPin, CalendarDays } from "lucide-react";
import Image from "next/image";

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("de-DE", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-br from-orange-400 to-amber-500 dark:from-orange-600 dark:to-amber-700 p-8 text-white shadow-md">
        <div className="flex justify-center mb-6">
          <Image
            src="/Logo.jpeg"
            alt="Durstige Bieber Logo"
            width={220}
            height={220}
            className="rounded-2xl shadow-lg object-contain"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight leading-snug">{trip.name}</h1>
        <p className="mt-2 flex items-center gap-1.5 text-orange-100 text-sm leading-snug italic">
          <span>🎵</span>
          <span>{trip.tagline}</span>
          <span>🎶</span>
        </p>

        <div className="mt-5 flex flex-col gap-2 text-sm">
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
    </div>
  );
}
