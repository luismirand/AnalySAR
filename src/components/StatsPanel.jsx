export default function StatsPanel({ stats }) {
  if (!stats)
    return (
      <div className="bg-slate-800 p-4 rounded-lg border border-blue-700 text-gray-400">
        Cargando estadísticas...
      </div>
    );

  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-blue-700">
      <h2 className="text-blue-300 font-semibold mb-2">Estadísticas</h2>
      <p>
        <strong>Polígonos detectados:</strong> {stats.totalFeatures}
      </p>
      <p>
        <strong>Área estimada:</strong> {stats.totalArea.toFixed(2)} ha
      </p>
      <p>
        <strong>Volumen:</strong> {stats.volumeM3.toLocaleString()} m³
      </p>
    </div>
  );
}
