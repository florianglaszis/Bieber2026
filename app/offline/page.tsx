export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4 px-6">
      <p className="text-5xl">📡</p>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Du bist offline</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
        Kein Signal. Die App lädt automatisch neu, sobald du wieder online bist.
        Die meisten Seiten sind im Cache gespeichert und weiterhin verfügbar.
      </p>
    </div>
  );
}
