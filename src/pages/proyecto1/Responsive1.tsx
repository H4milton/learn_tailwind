export default function Responsive1() {
  return (
    <>
      <div
        className="grid grid-cols-2 gap-2
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      "
      >
        <div className="box-grid">1</div>
        <div className="box-grid">2</div>
        <div className="box-grid">3</div>
        <div className="box-grid">4</div>
        <div className="box-grid">5</div>
        <div className="box-grid">6</div>
      </div>

      <div className="@container border-2 p-4 resize overflow-hidden">
        <div className="flex flex-col gap-2 @sm:flex-row flex-nowrap">
          <div className="box-grid flex-auto">1</div>
          <div className="box-grid flex-1">2</div>
          <div className="box-grid flex-1">3</div>
        </div>
      </div>

    </>
  );
}
