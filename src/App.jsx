import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MapView from "./components/MapView";
import TimeLine from "./components/TimeLine";
import InfoPanel from "./components/InfoPanel";
import StatsPanel from "./components/StatsPanel";
import Controls from "./components/Controls";

export default function App() {
  const [year, setYear] = useState("2025");
  const [stage, setStage] = useState("Durante");
  const [stats, setStats] = useState(null);

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow p-4 flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-blue-400">
          Visualización de Inundaciones — Tabasco
        </h1>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-4">
          {/* MAPA */}
          <div className="flex-1">
            <MapView year={year} stage={stage} onStatsChange={setStats} />
          </div>

          {/* PANELES DE INFORMACIÓN */}
          <aside className="w-full lg:w-80 space-y-4">
            <Controls
              year={year}
              setYear={setYear}
              stage={stage}
              setStage={setStage}
            />
            <InfoPanel year={year} stage={stage} />
            <StatsPanel stats={stats} />
          </aside>
        </div>

        {/* LÍNEA DEL TIEMPO */}
        <div className="w-full max-w-4xl mt-6">
          <TimeLine onYearChange={setYear} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
