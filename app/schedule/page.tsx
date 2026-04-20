import { trip } from "@/data/trip";
import type { Activity } from "@/types/trip";
import { MapPin, ExternalLink, FileText } from "lucide-react";

function formatDayHeader(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="flex gap-3">
      {/* Time column */}
      <div className="w-14 flex-shrink-0 pt-0.5">
        <span className="text-xs font-mono font-semibold text-orange-500 dark:text-orange-400">
          {activity.time}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 pb-5 border-l-2 border-orange-100 dark:border-gray-700 pl-4 relative">
        {/* Dot on timeline */}
        <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-orange-400 dark:bg-orange-500" />

        <p className="font-semibold text-gray-800 dark:text-gray-100 leading-snug">
          {activity.title}
        </p>
        <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          <MapPin size={11} className="flex-shrink-0" />
          {activity.location}
          {activity.mapLink && (
            <a
              href={activity.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-orange-400 inline-flex items-center gap-0.5"
            >
              <ExternalLink size={11} />
            </a>
          )}
        </p>
        {activity.notes && (
          <p className="flex items-start gap-1 text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
            <FileText size={11} className="flex-shrink-0 mt-0.5" />
            {activity.notes}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Schedule</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {trip.schedule.length} days · tap map pins for directions
        </p>
      </div>

      {trip.schedule.map((day, i) => (
        <section key={day.date}>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-3xl font-extrabold text-orange-500 dark:text-orange-400 tabular-nums leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-bold text-gray-900 dark:text-white leading-tight">{day.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {formatDayHeader(day.date)}
              </p>
            </div>
          </div>

          <div className="card space-y-0">
            {day.activities.map((activity, j) => (
              <ActivityCard key={j} activity={activity} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
