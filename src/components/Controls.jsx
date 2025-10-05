import React from "react";

export default function Controls({ year, setYear, stage, setStage }) {
  const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const stages = ["Antes", "Durante", "Después"];

  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-blue-700 shadow-md text-gray-200">
      <h2 className="text-blue-300 font-semibold mb-2">Año</h2>
      <select
        className="w-full bg-slate-700 text-gray-100 p-2 rounded mb-4 focus:ring focus:ring-blue-500"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      <h2 className="text-blue-300 font-semibold mb-2">Etapa</h2>
      <select
        className="w-full bg-slate-700 text-gray-100 p-2 rounded focus:ring focus:ring-blue-500"
        value={stage}
        onChange={(e) => setStage(e.target.value)}
      >
        {stages.map((etapa) => (
          <option key={etapa} value={etapa}>
            {etapa}
          </option>
        ))}
      </select>
    </div>
  );
}
