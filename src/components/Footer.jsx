export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 text-sm text-center py-3 border-t border-blue-800">
      <p>
        © {new Date().getFullYear()} TabaSAR — Datos: Copernicus Sentinel-1 |
        Procesado en GEE | Proyecto de análisis hidrológico.
      </p>
    </footer>
  );
}
