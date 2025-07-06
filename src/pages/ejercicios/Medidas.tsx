export default function Medidas() {
  return (
    <>
      <h1 className="font-bold">Medidas Tailwind</h1>
      <p className="text-sm mt-4 font-semibold">
        Medidas usando medidas definidos
      </p>
      <ul className="list-disc list-inside">
        <li className="text-sm">
          overflow-hidden: Oculta lo que se sale del div.
        </li>
        <li className="text-sm">
          whitespace-nowrap: No permite saltos de línea
        </li>
        <li className="text-sm">
          .text-ellipsis: Muestra "..." al final si el texto no cabe.
        </li>
      </ul>
      <div className="grid grid-cols-3 gap-1 my-3">
        <div className="col-span-1 bg-blue-100 ">
          Medida usando grid y col-span-1
        </div>
        <div className="col-span-1 bg-blue-200  overflow-hidden text-ellipsis">
          Medida usando grid y col-span-1
        </div>
        <div className="col-span-1 bg-blue-200 ">
          Medida usando grid y col-span-1
        </div>
      </div>

      <div className="gap-1 my-3 flex gap-2">
        <div className="col-span-1 bg-blue-100 size-[150px]">
          Medida usando size-[150px]
        </div>
        <div className="w-[100px] h-[100px] bg-blue-200  overflow-hidden text-ellipsis">
          Medida usando w-[100px] h-[100px] ocultar contenido de mas
        </div>
        <div className="w-[100px] h-[100px] bg-blue-200 ">
          Medida usando w-[100px] h-[100px] autosize
        </div>
      </div>

      <p className="text-sm my-4 font-semibold">
        Medidas usando medidas definidos
      </p>
      <div className="flex gap-2">
        <div className="bg-blue-300 w-1/3">Medidas usando terciarios 1/3</div>
        <div className="full bg-blue-300 w-2/3">Medidas usando cuartos 2/3</div>
      </div>

      <p className="text-sm my-4 font-semibold">
        Uso de cajas
      </p>
      <p className="bg-amber-800 w-40 border-8 border-blue-700">Caja 1</p>
      <p className="bg-amber-800 w-40 border-8 border-blue-700 box-content">Caja 2</p>
    </>
  );
}
