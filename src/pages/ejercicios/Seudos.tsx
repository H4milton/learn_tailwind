'use client'
import { useState, useEffect } from "react";

export default function Seudos() {
  function handleClick() {
    //Cambiamos el tema de oscuro a claro
    const htmlStatus = document.documentElement.className

    if (htmlStatus.includes("dark")) {
      document.documentElement.className = htmlStatus.replace("dark", "");
      setTextButton("Oscuro");
      localStorage.setItem("theme", "light");
    }else{
      document.documentElement.classList.add("dark");
      setTextButton("Claro");
      localStorage.setItem("theme", "dark");
    }
  }

  const [textButton, setTextButton] = useState("Oscuro");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setTextButton("Claro");
    } else {
      document.documentElement.classList.remove("dark");
      setTextButton("Oscuro");
    }
  }, []); // El array vacío [] significa que este efecto se ejecuta solo una vez, después del primer renderizado.

  return (
    <>
      <h1 className="font-bold">
        USO DE PSEUDO-ELEMENTOS & PSEUDO-CLASSES & DARK MODE
      </h1>

      <button className="my-4 border-2 rounded-lg bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-900 cursor-pointer focus:outline-blue-50 focus:outline-8 active:bg-green-600"
      onClick={handleClick}
      >
        {textButton}
      </button>

      <div
        className="border-4 border-gray-400 rounded-2xl text-gray-400 text-center py-4
      dark:bg-gray-600 dark:text-white dark:border-purple-500
      "
      >
        <h1 className="font-bold">TEST DARK MODE</h1>
        <p className="font-extralight text-sm">
          Esto es un ejemplo de uso de dark mode
        </p>
      </div>

      <h1 className="font-bold">USO DE PSEUDO-ELEMENTOS & PSEUDO-CLASSES</h1>
      <p className="mb-5">Pseudo Clases</p>
      <p className="text-sm font-bold">
        propiedades pseudo clases disponibles:
      </p>
      <ul className="list-disc list-inside">
        <li className="text-sm">hover: mouse over</li>
        <li className="text-sm">focus: mouse focus</li>
        <li className="text-sm">active: mouse down</li>
        <li className="text-sm">visited: visited link</li>
        <li className="text-sm">first-child: first child</li>
        <li className="text-sm">last-child: last child</li>
        <li className="text-sm">odd: odd child</li>
        <li className="text-sm">even: even child</li>
      </ul>

      <button className="rounded-full bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-900 cursor-pointer focus:outline-blue-50 focus:outline-8 active:bg-green-600">
        Botón prueba
      </button>
      <br />
      <div className="flex gap-2">
        <a href="#" className="hover:underline visited:text-green-600">
          Google
        </a>
        <a href="#" className="hover:underline">
          Google
        </a>
      </div>

      <p className="my-5">Pseudo Elementos</p>
      <p className="text-sm font-bold">
        propiedades pseudo elementos disponibles:
      </p>
      <ul className="list-disc list-inside marker:text-sky-400">
        <li className="text-sm">before: before</li>
        <li className="text-sm">after: after</li>
        <li className="text-sm">first-letter: first letter</li>
        <li className="text-sm">first-line: first line</li>
        <li className="text-sm">selection: selection</li>
        <li className="text-sm">placeholder: placeholder</li>
      </ul>

      <div className="flex flex-col gap-2 my-2">
        <label className="text-sm font-semibold after:ml-0.5 after:text-red-500 after:content-['*']">
          Ejemplo input
        </label>
        <input
          type="text"
          className="border-2 rounded-lg  placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm p-2"
          placeholder="Escribe aquí"
        />
        <blockquote className="text-center text-2xl font-semibold text-gray-900 italic">
          When you look
          <span className="relative before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>

        <input
          type="file"
          className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
        />
      </div>
    </>
  );
}