import { trip } from "@/data/trip";
import type { Person } from "@/types/trip";
import { Phone, Clock, Leaf, StickyNote } from "lucide-react";

function formatArrival(isoDateTime?: string) {
  if (!isoDateTime) return null;
  const d = new Date(isoDateTime);
  return d.toLocaleString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function PersonCard({ person }: { person: Person }) {
  const arrival = formatArrival(person.arrivalTime);

  return (
    <div className="card flex gap-4 items-start">
      {/* Avatar emoji */}
      <div
        className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30
                      flex items-center justify-center text-2xl flex-shrink-0"
      >
        {person.emoji ?? "👤"}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-gray-900 dark:text-white text-base leading-tight">
          {person.name}
        </p>

        <div className="mt-1.5 space-y-1">
          {arrival && (
            <p className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <Clock size={12} className="text-orange-400 flex-shrink-0" />
              {arrival}
            </p>
          )}
          {person.dietary && (
            <p className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
              <Leaf size={12} className="flex-shrink-0" />
              {person.dietary}
            </p>
          )}
          {person.notes && (
            <p className="flex items-start gap-1.5 text-xs text-gray-400 dark:text-gray-500 italic">
              <StickyNote size={12} className="flex-shrink-0 mt-0.5" />
              {person.notes}
            </p>
          )}
        </div>
      </div>

      {/* Phone CTA */}
      {person.phone && (
        <a
          href={`tel:${person.phone}`}
          className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30
                     flex items-center justify-center text-orange-500 dark:text-orange-400
                     hover:bg-orange-200 dark:hover:bg-orange-800/40 transition-colors"
          aria-label={`Call ${person.name}`}
        >
          <Phone size={16} />
        </a>
      )}
    </div>
  );
}

export default function CrewPage() {
  const dietaryCount = trip.crew.filter((p) => p.dietary).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">The Crew</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {trip.crew.length} people · {dietaryCount} dietary requirement
          {dietaryCount !== 1 ? "s" : ""}
        </p>
      </div>

      <ul className="space-y-3">
        {trip.crew.map((person) => (
          <li key={person.name}>
            <PersonCard person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
}
