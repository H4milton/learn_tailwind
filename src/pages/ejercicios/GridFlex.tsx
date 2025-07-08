export default function GridFlex() {
  return (
    <>
      <h1 className="font-bold">Normal</h1>
      <div className="">
        <div className="box">01</div>
        <div className="box">02</div>
        <div className="box">03</div>
      </div>

      <br />
      <h1 className="font-bold">Flex</h1>
      <p className="text-sm font-bold">propiedades flex disponibles:</p>
      <ul className="list-disc list-inside">
        <li className="text-sm">flex-row: filas</li>
        <li className="text-sm">flex-col: columnas</li>
        <li className="text-sm">flex-wrap: multiple filas</li>
        <li className="text-sm">gap-x: espacio entre elementos</li>
        <li className="text-sm">gap-y: espacio entre filas</li>
        <li className="text-sm">justify-center: centrar</li>
        <li className="text-sm">justify-items-center: centrar elementos</li>
        <li className="text-sm">justify-content-between: distribuir</li>
      </ul>

      <span className="text-sm">
        <em className="font-bold">place-content-center</em> para centrar
      </span>
      <div className="border-2 flex justify-center gap-2 my-2 h-40">
        <div className="box w-16 px-4 ">01</div>
        <div className="box w-16 px-4 ">02</div>
        <div className="box w-16 px-4 ">03</div>
        <div className="box w-16 px-4 ">04</div>
      </div>

      <span className="text-sm">
        <em className="font-bold">justify-center</em> para centrar
        horizontalmente
        <em className="font-bold">item-center</em> para centrar elementos
        verticalmente
      </span>
      <div className="border-2 flex justify-center gap-2 my-2 h-20 items-center">
        <div className="box w-16 px-4">01</div>
        <div className="box w-16 px-4">02</div>
        <div className="box w-16 px-4">03</div>
        <div className="box w-16 px-4">04</div>
      </div>

      <span className="text-sm">
        <em className="font-bold">place-content-center</em> para centrar y{" "}
        <em className="font-bold">flex-wrap</em> para mantener las dimensiones
        siempre
      </span>

      <div className="border-2 flex place-content-center gap-2 flex-wrap my-2">
        <div className="box w-50 px-4">01</div>
        <div className="box w-50 px-4">02</div>
        <div className="box w-50 px-4">03</div>
        <div className="box w-50 px-4">04</div>
      </div>

      <span className="text-sm">
        <em className="font-bold">place-content-between</em> para distribuir
      </span>
      <div className="border-2 flex place-content-between gap-2">
        <div className="box w-auto px-4">01</div>
        <div className="box w-auto px-4">02</div>
        <div className="box w-auto px-4">03</div>
      </div>

      <span className="text-sm">
        <em className="font-bold">shrink-0</em> para no permitir que el elemento
        se redimensione
      </span>
      <div className="border-2 flex gap-2 my-2 flex-wrap">
        <div className="box w-20 px-4 shrink-0">01</div>
        <div className="box w-1600 px-4">02</div>
      </div>

      <span className="text-sm">
        <em className="font-bold">grow-0</em> para permitir que el elemento
        ocupe el espacio restante
      </span>
      <div className="border-2 flex gap-2 my-2">
        <div className="box w-20 px-4 grow-1">01</div>
        <div className="box w-30 px-4">02</div>
      </div>

      <h1 className="font-bold">GRID</h1>
      <div className="border-2 grid grid-flow-col gap-2 my-2 h-20 place-content-center overflow-x-auto">
        <div className="box ">01</div>
        <div className="box ">02</div>
        <div className="box ">03</div>
        <div className="box ">04</div>
        <div className="box ">05</div>
        <div className="box ">06</div>
        <div className="box ">07</div>
      </div>

      <div className="border-2 grid grid-cols-4 gap-1 place-content-center">
        <div className="box">01</div>
        <div className="box">02</div>
        <div className="box">03</div>
        <div className="box">04</div>
        <div className="box">05</div>
        <div className="box">06</div>
        <div className="box">07</div>
      </div>

      <div className="border-2 grid grid-cols-3 justify-items-center content-center gap-2 my-2">
        <div className="box">01</div>
        <div className="box">02</div>
        <div className="box">03</div>
        <div className="box">04</div>
      </div>

      <div className="border-2 grid grid-flow-col place-content-center content-center gap-2 my-2 h-20 ">
        <div className="box ">01</div>
        <div className="box ">02</div>
        <div className="box ">03</div>
        <div className="box ">04</div>
      </div>

      <div className="border-2 grid grid-cols-6 gap-2 my-2">
        <div className="box">01</div>
        <div className="box">02</div>
        <div className="box">03</div>
        <div className="box">04</div>
        <div className="box">05</div>
        <div className="box">06</div>
        <div className="box">07</div>
        <div className="box">08</div>
        <div className="box">09</div>
      </div>

      <div className="grid grid-cols-3 place-items-center gap-4 size-100 border-8">
        <div className="box grid place-items-center">01</div>
        <div className="box grid place-content-center">02</div>
        <div className="box">04</div>
        <div className="box">05</div>
        <div className="box">06</div>
        <div className="box">03</div>
      </div>

      <div className="grid grid-cols-3 place-content-center gap-4 border-8 size-100">
        <div className="box">01</div>
        <div className="box">02</div>
        <div className="box">03</div>
        <div className="box">04</div>
        <div className="box">05</div>
        <div className="box">06</div>
      </div>

      <div className="grid grid-cols-2 place-items-center gap-4 border-8 w-64 h-64">
        <div className="box ">01</div>
        <div className="box ">02</div>
        <div className="box ">03</div>
        <div className="box ">04</div>
      </div>

      <div className="grid h-56 grid-cols-3 place-items-center gap-4 border-8">
        <div className="box">01</div>
        <div className="box">02</div>
        <div className="box">03</div>
        <div className="box">04</div>
        <div className="box">05</div>
        <div className="box">06</div>
      </div>

      <div className="my-10 gap-2 grid grid-cols-3">
        <div className="box-grid col-span-2 col-start-2">01</div>
        <div className="box-grid">02</div>
        <div className="box-grid">03</div>
      </div>

      <div className="my-10 gap-2 grid grid-cols-3 grid-rows-4">
        <div className="box-grid col-span-2 col-start-2">01</div>
        <div className="box-grid">02</div>
        <div className="box-grid">03</div>
      </div>

      <div className="grid h-56 grid-cols-3 place-items-end gap-4 border-8">
        <div className="box">01</div>
        <div className="box">02</div>
        <div className="box">03</div>
        <div className="box">04</div>
        <div className="box">05</div>
        <div className="box">06</div>
      </div>

      <h1 className="font-bold">GRID</h1>
      <div className="p-8 font-sans">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">
          Alineación de Items en Flexbox (`align-items`)
        </h1>
        <p className="mb-4">
          Controla la alineación vertical de los ítems en un contenedor flex.
        </p>

        <p className="font-bold mt-4">Clase: `items-start`</p>
        <p className="mb-2">
          Alinea los ítems al inicio del contenedor (arriba).
        </p>
        <div className="flex items-start h-32 bg-slate-200 rounded-lg p-2 gap-2">
          <div className="bg-blue-500 text-white p-2 rounded-md">1</div>
          <div className="bg-blue-500 text-white p-2 h-16 rounded-md">2</div>
          <div className="bg-blue-500 text-white p-2 rounded-md">3</div>
        </div>

        <p className="font-bold mt-4">Clase: `items-center`</p>
        <p className="mb-2">Centra los ítems verticalmente.</p>
        <div className="flex items-center h-32 bg-slate-200 rounded-lg p-2 gap-2">
          <div className="bg-blue-500 text-white p-2 rounded-md">1</div>
          <div className="bg-blue-500 text-white p-2 h-16 rounded-md">2</div>
          <div className="bg-blue-500 text-white p-2 rounded-md">3</div>
        </div>

        <p className="font-bold mt-4">Clase: `items-end`</p>
        <p className="mb-2">
          Alinea los ítems al final del contenedor (abajo).
        </p>
        <div className="flex items-end h-32 bg-slate-200 rounded-lg p-2 gap-2">
          <div className="bg-blue-500 text-white p-2 rounded-md">1</div>
          <div className="bg-blue-500 text-white p-2 h-16 rounded-md">2</div>
          <div className="bg-blue-500 text-white p-2 rounded-md">3</div>
        </div>

        <h1 className="text-3xl font-bold mt-10 mb-6 border-b pb-2">
          Alineación de Contenido en Flexbox (`align-content`)
        </h1>
        <p className="mb-4">
          Distribuye las líneas de ítems cuando hay espacio extra. Solo funciona
          con `flex-wrap`.
        </p>

        <p className="font-bold mt-4">Clase: `content-center`</p>
        <p className="mb-2">
          Agrupa las líneas de ítems en el centro vertical del contenedor.
        </p>
        <div className="flex flex-wrap content-center h-48 bg-slate-200 rounded-lg p-2">
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">1</div>
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">2</div>
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">3</div>
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">4</div>
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">5</div>
        </div>

        <p className="font-bold mt-4">Clase: `content-between`</p>
        <p className="mb-2">
          Distribuye las líneas, pegando la primera arriba y la última abajo.
        </p>
        <div className="flex flex-wrap content-between h-48 bg-slate-200 rounded-lg p-2">
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">1</div>
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">2</div>
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">3</div>
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">4</div>
          <div className="bg-indigo-500 text-white p-2 m-1 rounded-md">5</div>
        </div>

        <h1 className="text-3xl font-bold mt-10 mb-6 border-b pb-2">
          Alineación de Items en Grid (`place-items`)
        </h1>
        <p className="mb-4">
          Controla cómo se alinea un ítem DENTRO de su celda de la cuadrícula.
        </p>

        <p className="font-bold mt-4">Clase: `place-items-start`</p>
        <p className="mb-2">
          Coloca los ítems en la esquina superior izquierda de su celda.
        </p>
        <div className="grid grid-cols-2 place-items-start h-32 bg-slate-200 rounded-lg p-2">
          <div className="bg-emerald-500 text-white p-2 rounded-md">1</div>
          <div className="bg-emerald-500 text-white p-2 rounded-md">2</div>
        </div>

        <p className="font-bold mt-4">Clase: `place-items-center`</p>
        <p className="mb-2">
          Centra los ítems perfectamente en el medio de su celda.
        </p>
        <div className="grid grid-cols-2 place-items-center h-32 bg-slate-200 rounded-lg p-2">
          <div className="bg-emerald-500 text-white p-2 rounded-md">1</div>
          <div className="bg-emerald-500 text-white p-2 rounded-md">2</div>
        </div>

        <p className="font-bold mt-4">Clase: `place-items-end`</p>
        <p className="mb-2">
          Coloca los ítems en la esquina inferior derecha de su celda.
        </p>
        <div className="grid grid-cols-2 place-items-end h-32 bg-slate-200 rounded-lg p-2">
          <div className="bg-emerald-500 text-white p-2 rounded-md">1</div>
          <div className="bg-emerald-500 text-white p-2 rounded-md">2</div>
        </div>

        <h1 className="text-3xl font-bold mt-10 mb-6 border-b pb-2">
          Alineación de Contenido en Grid (`place-content`)
        </h1>
        <p className="mb-4">
          Controla cómo se alinea la cuadrícula COMPLETA cuando hay espacio de
          sobra.
        </p>

        <p className="font-bold mt-4">Clase: `place-content-center`</p>
        <p className="mb-2">
          Centra toda la cuadrícula en el medio del contenedor.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 w-full h-48 bg-slate-200 rounded-lg place-content-center p-2">
          <div className="bg-purple-500 text-white p-2 m-1 rounded-md">1</div>
          <div className="bg-purple-500 text-white p-2 m-1 rounded-md">2</div>
          <div className="bg-purple-500 text-white p-2 m-1 rounded-md">3</div>
          <div className="bg-purple-500 text-white p-2 m-1 rounded-md">4</div>
        </div>

        <p className="font-bold mt-4">Clase: `place-content-between`</p>
        <p className="mb-2">
          Distribuye el espacio extra entre las filas y columnas.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 w-full h-48 bg-slate-200 rounded-lg place-content-between p-2">
          <div className="bg-purple-500 text-white p-2 rounded-md">1</div>
          <div className="bg-purple-500 text-white p-2 rounded-md">2</div>
          <div className="bg-purple-500 text-white p-2 rounded-md">3</div>
          <div className="bg-purple-500 text-white p-2 rounded-md">4</div>
        </div>
      </div>
    </>
  );
}
