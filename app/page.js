import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row p-2">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
