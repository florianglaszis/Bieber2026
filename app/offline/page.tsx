export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4 px-6">
      <p className="text-5xl">📡</p>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">You&apos;re offline</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
        Looks like you lost signal. The app will reload automatically once you&apos;re back online.
        Most pages are cached and still accessible.
      </p>
    </div>
  );
}
