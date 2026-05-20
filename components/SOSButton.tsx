"use client";

const WOHNUNG_MAP = "https://maps.google.com/?q=Friedrich-Ebert-Ring+46,+56068+Koblenz";

export default function SOSButton() {
  return (
    <a
      href={WOHNUNG_MAP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-4 py-2.5
                 bg-red-600 hover:bg-red-700 active:scale-95
                 text-white text-sm font-bold rounded-full shadow-lg
                 transition-all duration-150 whitespace-nowrap"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      🆘 SOS-NOTRUF
    </a>
  );
}
