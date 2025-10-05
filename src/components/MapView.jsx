import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

export default function MapView({ year, stage, onStatsChange }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fileName = `Agua_${stage}_Tabasco_${year}.geojson`;
        const path = `/data/${fileName}`;

        console.log("🔍 Loading:", path);

        fetch(path)
            .then((res) => {
                if (!res.ok) throw new Error(`Archivo no encontrado: ${fileName}`);
                return res.json();
            })
            .then((geo) => {
                setData(geo);
                setError(null);

                // Cálculo de estadísticas básicas
                const totalFeatures = geo.features?.length || 0;
                const totalArea = totalFeatures * 0.1; // ejemplo base (hectáreas)
                const volumeM3 = totalArea * 1000;

                if (onStatsChange) onStatsChange({ totalFeatures, totalArea, volumeM3 });
            })
            .catch((err) => {
                console.error("❌ Error cargando GeoJSON:", err);
                setData(null);
                setError(err.message);
                if (onStatsChange) onStatsChange(null);
            });
    }, [year, stage]);

    return (
        <div className="w-full h-[70vh] rounded-lg overflow-hidden border border-blue-700 shadow-lg bg-slate-800">
            <MapContainer
                center={[17.9, -92.93]} // Tabasco
                zoom={8}
                className="h-full w-full"
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {data && (
                    <GeoJSON
                        key={`${year}-${stage}`} // 👈 fuerza a React-Leaflet a reconstruir la capa
                        data={data}
                        style={() => ({
                            color: "#00BFFF",
                            weight: 1,
                            fillColor: "#0077FF",
                            fillOpacity: 0.35,
                        })}
                    />
                )}

            </MapContainer>

            {!data && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 text-gray-300 text-sm">
                    {error ? (
                        <span>⚠️ {error}</span>
                    ) : (
                        <span>🛰️ Cargando datos de inundación...</span>
                    )}
                </div>
            )}
        </div>
    );
}
