import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        🌊 Inundaciones Tabasco
      </h1>
      <p className="text-lg text-gray-300">
        Proyecto base con <span className="text-sky-400">React + TailwindCSS</span>
      </p>

      <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-lg">
        <p className="text-sm text-gray-400">
          TailwindCSS funcionando correctamente 🚀
        </p>
      </div>
    </div>
  );
}
