import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">Achref Chakroun</h1>
        <p className="text-lg text-gray-600">MSc – AI & Embedded Systems @ UQAR</p>
        <div className="mt-4 flex justify-center gap-4 text-sm text-blue-500 underline">
          <a href="mailto:achref@email.com" target="_blank">Email</a>
          <a href="https://github.com/Muffinxz" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/achref" target="_blank">LinkedIn</a>
        </div>
      </header>

      {/* About Me */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-700">
          I'm a master's student at the Université du Québec à Rimouski (UQAR),
          specializing in hardware acceleration of deep learning models using FPGAs.
          Passionate about embedded AI, real-time inference, and edge computing.
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>MSc in Engineering – AI & Embedded Systems, UQAR (2023 – Present)</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Projects</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            <strong>FPGA Acceleration of YOLOv5:</strong> Implemented real-time object detection on the Kria KV260 using a quantized YOLOv5 model and Vitis AI.
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-1 text-gray-700">
          <li>🧠 PyTorch</li>
          <li>📦 TensorFlow</li>
          <li>💻 FPGA</li>
          <li>🛠 Vivado / Vitis AI</li>
          <li>🧾 Python / C++ / Bash</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-sm text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Achref Chakroun. All rights reserved.
      </footer>
    </div>
  );
}
