export default function Legend() {
  return (
    <div className="absolute right-3 top-28 z-[999] bg-white/90 backdrop-blur border rounded p-2 text-xs shadow">
      <div className="font-semibold mb-1">Leyenda</div>
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-block w-3 h-3 rounded" style={{background:'#00e5ff'}}/>
        <span>Agua detectada</span>
      </div>
      <div className="text-[10px] text-gray-500">
        Polígonos: TopoJSON simplificado
      </div>
    </div>
  );
}
