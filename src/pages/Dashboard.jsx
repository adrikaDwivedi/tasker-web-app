import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import DashboardGrid from "../components/dashboard/DashboardGrid";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-8">
          <div className="space-y-6">
            <Header />
            <DashboardGrid />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
