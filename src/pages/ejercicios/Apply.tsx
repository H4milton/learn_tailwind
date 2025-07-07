import React from "react";

export default function Apply() {
  return (
    <>
      <h1 className="font-bold">USO DE APPLY</h1>
      <p className="text-sm font-bold">propiedades apply disponibles:</p>
      <ul className="list-disc list-inside">
        <li className="text-sm">apply-none: no aplicar</li>
        <li className="text-sm">apply-auto: aplicar automáticamente</li>
        <li className="text-sm">apply-all: aplicar a todos</li>
        <li className="text-sm">apply-even: aplicar a pares</li>
        <li className="text-sm">apply-odd: aplicar a impares</li>
      </ul>

      <div className="flex gap-2 my-2">
        <div className="box-grid apply-none">01</div>
        <div className="box-grid apply-auto">02</div>
        <div className="box-grid apply-all">03</div>
        <div className="box-grid apply-even">04</div>
        <div className="box-grid apply-odd">05</div>
        <div className="box-grid apply-even">06</div>
        <div className="box-grid apply-odd">07</div>
      </div>

      <nav className="">
        <ul className="flex gap-2 list-none justify-center text-md font-bold">
          <li>
            <a href="#" className="button-nav">Inicio</a>
          </li>
          <li>
            <a href="#" className="button-nav">Sobre</a>
          </li>
          <li>
            <a href="#" className="button-nav">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
