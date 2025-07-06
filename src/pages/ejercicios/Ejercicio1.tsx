import { useState } from "react";

export default function Ejercicio1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Propiedades de texto</h1>

        <p
          className="bg-red-400"
          onClick={() => setCount((count) => count + 1)}
        >
          Background {count}
        </p>

        <p className="text-blue-600">Text colored</p>

        <p className="decoration-sky-500 underline">
          subrayado
          <span className="block">
            para aplicar underline, siempre debe ir la clase decoration...
          </span>
        </p>

        <p className="border-2 border-red-500">
          Border
          <span className="block">
            para aplicar border, siempre debe ir la clase border...
          </span>
        </p>

        <p className="shadow-red-500 shadow-sm">Shadow</p>

        <p className="inset-shadow-sm inset-shadow-blue-500 ">Inset shadow</p>

        <label htmlFor="">
          <input type="checkbox" className="accent-red-950" checked />
          Accent
        </label>

        <textarea className="border-2 border-red-500"></textarea>
      </div>
    </>
  );
}
