import { HandMetal, Search, BellRing, User } from "lucide-react";

function Header() {
  return (
    <header className="w-full rounded-[2rem] border border-white/10 bg-[#06080f]/90 p-5 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            Welcome back,
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold text-white">Adrika</h1>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500/15 to-yellow-400/15 text-orange-400 shadow-[0_16px_30px_-18px_rgba(249,115,22,0.9)]">
              <HandMetal size={24} />
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10">
            <Search size={20} />
          </button>
          <button className="inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10">
            <BellRing size={20} />
          </button>
          <button className="inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10">
            <User size={20} />
          </button>
          <div className="hidden items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 sm:flex">
            {/* <div className="h-11 w-11 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 shadow-lg" /> */}
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Signed in as
              </p>
              <p className="truncate text-sm font-semibold text-white">
                Adrika
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
