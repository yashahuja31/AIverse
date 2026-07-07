export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">AIverse</h1>

        <div className="flex items-center gap-4">
          <button className="rounded-lg border px-4 py-2 text-sm">
            Login
          </button>

          <button className="rounded-lg bg-primary px-4 py-2 text-sm text-white">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}