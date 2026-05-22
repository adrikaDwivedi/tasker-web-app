function DashboardGrid() {
  const cardBase =
    "rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.8)] ring-1 ring-white/5 overflow-hidden";

  return (
    <div className="dashboard-grid space-y-6">
      <section className="stats-row grid gap-6 xl:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className={cardBase}>
            <div className="mb-4 flex items-center justify-between">
              <div className="h-3 w-20 rounded-full bg-white/10" />
              <div className="h-3 w-16 rounded-full bg-white/10" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-3/4 rounded-full bg-white/10" />
              <div className="h-4 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </section>

      <section className="charts-row grid gap-6 lg:grid-cols-2">
        {[...Array(2)].map((_, index) => (
          <div key={index} className={cardBase}>
            <div className="mb-5 flex items-center justify-between">
              <div className="h-3 w-24 rounded-full bg-white/10" />
              <div className="h-3 w-12 rounded-full bg-white/10" />
            </div>
            <div className="h-48 rounded-[1.75rem] bg-gradient-to-br from-white/10 to-transparent" />
          </div>
        ))}
      </section>

      <section className="bottom-row grid gap-6 lg:grid-cols-2">
        {[...Array(2)].map((_, index) => (
          <div key={index} className={cardBase}>
            <div className="mb-4 flex items-center justify-between">
              <div className="h-3 w-28 rounded-full bg-white/10" />
              <div className="h-3 w-14 rounded-full bg-white/10" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full rounded-full bg-white/10" />
              <div className="h-4 w-5/6 rounded-full bg-white/10" />
              <div className="h-4 w-2/3 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DashboardGrid;
