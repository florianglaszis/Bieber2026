import { trip } from "@/data/trip";
import { MapPin, LogIn, LogOut } from "lucide-react";

const { accommodation: a } = trip;

function Row({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-orange-50 dark:border-gray-700 last:border-0">
      <span className="text-orange-400 dark:text-orange-300 mt-0.5 flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">{label}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-orange-500 dark:text-orange-400 underline underline-offset-2 break-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100 break-words">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

export default function StayPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Unterkunft</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{a.name}</p>
      </div>

      {/* Header card with gradient */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700 p-6 text-white shadow-md">
        <p className="text-4xl mb-2">🏡</p>
        <h2 className="text-xl font-bold">{a.name}</h2>
        <p className="text-sm text-orange-100 mt-1">{a.address}</p>
      </div>

      {/* Check-in / out */}
      <div className="card">
        <p className="section-title">Check-in & Check-out</p>
        <Row icon={<LogIn size={16} />} label="Check-in ab" value={a.checkIn} />
        <Row icon={<LogOut size={16} />} label="Check-out bis" value={a.checkOut} />
      </div>

      {/* Location */}
      <div className="card">
        <p className="section-title">Lage</p>
        <Row
          icon={<MapPin size={16} />}
          label="Adresse"
          value={a.address}
          href={`https://maps.google.com/?q=${encodeURIComponent(a.address)}`}
        />
      </div>

      {/* Amenities */}
      <div className="card">
        <p className="section-title">Ausstattung</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { emoji: "🚭", label: "Nichtraucher" },
            { emoji: "🚿", label: "Eigenes Bad & Dusche" },
            { emoji: "🍳", label: "Küche & Herd" },
            { emoji: "❄️", label: "Kühlschrank" },
            { emoji: "☕", label: "Kaffeemaschine" },
            { emoji: "🍽️", label: "Spülmaschine" },
            { emoji: "📺", label: "Flachbild-TV" },
            { emoji: "🎬", label: "Streaming (Netflix)" },
            { emoji: "🏙️", label: "Stadtblick" },
            { emoji: "🔑", label: "Privater Eingang" },
          ].map(({ emoji, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span>{emoji}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
