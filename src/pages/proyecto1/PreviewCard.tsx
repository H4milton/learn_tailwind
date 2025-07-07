"use client";
export default function PreviewCard() {
  return (
    <>
      <div className="w-[327px] bg-Blue-900-card-BG p-6 rounded-1xl">
        {/* card image */}
        <div className="relative mb-6 group">
          {/* image photo */}
          <img
            className="rounded-lg"
            src="../../../public/img/image-equilibrium.jpg"
            alt="image-equilibrium"
          />
          {/* view icon */}
          <div className="absolute top-0 h-full w-full cursor-pointer place-items-center rounded-lg bg-Cyan-400/50 hidden group-hover:grid">
            <img src="../../../public/img/icon-view.svg" alt="View icon" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-bold mb-4 hover:text-Cyan-400 cursor-pointer">
          Equilibrium #3429
        </h2>
        {/* end title */}

        <p className="text-blue-50 mb-4 text-sm">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="flex gap-1.5 mt-4 place-content-between">
          <div className="flex gap-1 items-center">
            <img src="../../../public/img/icon-ethereum.svg" alt="" />
            <p className="text-sm text-cyan-400">0.041 ETH</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src="../../../public/img/icon-clock.svg" alt="" />
            <p className="text-sm">3 days left</p>
          </div>
        </div>

        <hr className="text-blue-900 w-full my-6" />

        {/* created by */}
        <div className="flex gap-1.5 mt-4 items-center cursor-pointer group">
          <img
            src="../../../public/img/image-avatar.png"
            alt="image-avatar"
            className="w-[33px] h-[33px] border-2 border-blue-50 rounded-full me-2"
          />
          <p className="text-blue-50 text-base">
            Creation of <span className="text-blue-400 group-hover:text-Cyan-400">Jules Wyvern</span>
          </p>
        </div>
        {/* end created by */}
      </div>
    </>
  );
}
