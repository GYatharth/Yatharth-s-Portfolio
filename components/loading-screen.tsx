export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-[var(--color-heist-red)] border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-white font-[family-name:var(--font-stencil)] text-lg tracking-wider">
          INITIALIZING HEIST...
        </p>
      </div>
    </div>
  )
}
