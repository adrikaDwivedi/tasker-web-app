import {
  Home,
  CheckSquare,
  BarChart3,
  Trophy,
  Calendar,
  Target,
  Settings,
  Quote,
} from "lucide-react";

const menuItems = [
  { label: "Home", icon: Home },
  { label: "Tasks", icon: CheckSquare },
  { label: "Analytics", icon: BarChart3 },
  { label: "Leaderboard", icon: Trophy },
  { label: "Calendar", icon: Calendar },
  { label: "Goals", icon: Target },
  { label: "Settings", icon: Settings },
  { label: "Feedback", icon: Quote },
];

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#090B12] border-r border-white/10 flex flex-col justify-between p-5 pt-6 gap-6">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="h-12 w-12 rounded-3xl bg-white/5 text-orange-400 flex items-center justify-center">
            <Target size={24} />
          </div>
          <h1 className="text-2xl font-bold text-white">
            Task <span className="text-orange-400">Quest</span>
          </h1>
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === 0;
            return (
              <button
                key={index}
                type="button"
                className={
                  `w-full flex items-center gap-4 rounded-3xl px-4 py-3 text-left transition-all duration-200 hover:shadow-[0_6px_20px_-10px_rgba(0,0,0,0.7)] ` +
                  (isActive
                    ? "bg-orange-500/10 text-orange-300"
                    : "text-slate-300 hover:bg-white/5 hover:text-white")
                }
              >
                <Icon
                  size={20}
                  className={isActive ? "text-orange-300" : "text-slate-400"}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="space-y-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.8)]">
          <h3 className="text-orange-400 font-semibold text-xl">Level 5</h3>
          <p className="text-slate-400 text-sm mb-5">Productivity Apprentice</p>
          <div className="flex items-center justify-center mb-5">
            <div className="h-20 w-20 rounded-full bg-orange-500/15 shadow-inner" />
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-orange-400 to-orange-500" />
          </div>
          <p className="text-center text-sm text-slate-300 mt-3">
            250 / 500 XP
          </p>
          <p className="text-center text-[11px] text-slate-500 mt-1">
            Next Level: 250 XP to go
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.8)]">
          <Quote size={22} className="text-purple-400 mb-4" />
          <p className="text-slate-300 text-sm leading-6">
            Discipline is the bridge between goals and accomplishments.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
