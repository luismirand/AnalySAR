export default function InfoPanel({ year, stage }) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-blue-700">
      <h2 className="text-blue-300 font-semibold mb-2">Información</h2>
      <p>
        <strong>Año:</strong> {year}
      </p>
      <p>
        <strong>Etapa:</strong> {stage}
      </p>
      <p className="text-sm text-gray-400 mt-2">
        Datos procesados en Google Earth Engine (Sentinel-1 SAR)
      </p>
    </div>
  );
}
