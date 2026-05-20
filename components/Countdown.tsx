"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-04T07:45:00");

function calcTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) return (
    <p className="mt-4 text-center text-white font-bold text-lg">🍺 Es geht los!</p>
  );

  const units = [
    { label: "Tage", value: timeLeft.days },
    { label: "Std", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sek", value: timeLeft.seconds },
  ];

  return (
    <div className="mt-5">
      <p className="text-xs text-orange-100 uppercase tracking-widest mb-2 text-center">Noch bis zur Abfahrt</p>
      <div className="flex justify-center gap-3">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="text-2xl font-extrabold tabular-nums leading-none">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-xs text-orange-100 mt-0.5">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
