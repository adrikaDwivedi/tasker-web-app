import Dashboard from "./pages/Dashboard";
import SplashScreen from "./pages/SplashScreen";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";


function Dashboard() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <Header />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
