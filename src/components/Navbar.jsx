export default function Navbar() {
    return (
        <nav className="bg-slate-950 text-blue-200 py-4 shadow-md border-b border-blue-800 flex flex-col md:flex-row items-center justify-between px-6">
            {/* LOGO Y TÍTULO */}
            <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-0 flex items-center gap-2">
                🌊 <span className="text-blue-400">TabaSAR</span>
                <span className="text-gray-200">— Inundaciones (2019–2025)</span>
            </h1>

            {/* ENLACES */}
            <div className="flex space-x-6 text-sm md:text-base">
                <a
                    href="#mapa"
                    className="hover:text-blue-400 transition-colors duration-200"
                >
                    Mapa
                </a>
                <a
                    href="#linea"
                    className="hover:text-blue-400 transition-colors duration-200"
                >
                    Línea del Tiempo
                </a>
                <a
                    href="#datos"
                    className="hover:text-blue-400 transition-colors duration-200"
                >
                    Datos
                </a>
            </div>
        </nav>
    );
}
