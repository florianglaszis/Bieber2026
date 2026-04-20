import { trip } from "@/data/trip";
import {
  MapPin,
  Wifi,
  Phone,
  ExternalLink,
  LogIn,
  LogOut,
  StickyNote,
} from "lucide-react";

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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Where we stay</h1>
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
        <p className="section-title">Check-in & out</p>
        <Row icon={<LogIn size={16} />} label="Check-in from" value={a.checkIn} />
        <Row icon={<LogOut size={16} />} label="Check-out by" value={a.checkOut} />
      </div>

      {/* Location */}
      <div className="card">
        <p className="section-title">Location</p>
        <Row
          icon={<MapPin size={16} />}
          label="Address"
          value={a.address}
          href={`https://maps.google.com/?q=${encodeURIComponent(a.address)}`}
        />
      </div>

      {/* Wi-Fi */}
      {a.wifi && (
        <div className="card">
          <p className="section-title">Wi-Fi</p>
          <Row icon={<Wifi size={16} />} label="Network" value={a.wifi.network} />
          <Row icon={<Wifi size={16} />} label="Password" value={a.wifi.password} />
        </div>
      )}

      {/* Host */}
      {(a.hostName || a.hostPhone) && (
        <div className="card">
          <p className="section-title">Host</p>
          {a.hostName && <Row icon={<Phone size={16} />} label="Name" value={a.hostName} />}
          {a.hostPhone && (
            <Row
              icon={<Phone size={16} />}
              label="Phone"
              value={a.hostPhone}
              href={`tel:${a.hostPhone}`}
            />
          )}
        </div>
      )}

      {/* Booking link */}
      {a.bookingLink && (
        <div className="card">
          <p className="section-title">Booking</p>
          <Row
            icon={<ExternalLink size={16} />}
            label="Booking link"
            value="Open reservation"
            href={a.bookingLink}
          />
        </div>
      )}

      {/* Notes */}
      {a.notes && (
        <div className="card">
          <p className="section-title">Notes</p>
          <div className="flex items-start gap-3">
            <StickyNote size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{a.notes}</p>
          </div>
        </div>
      )}
    </div>
  );
}
