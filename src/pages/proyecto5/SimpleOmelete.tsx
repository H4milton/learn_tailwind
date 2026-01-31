import React from "react";

export default function SimpleOmelete() {
  return (
    <>
      <div className="rounded-2xl m-5 bg-white text-Blue-950-main-BG mt-20 md:mx-60">
        <article className="p-5">
          <img
            src="../../../public/img/proyecto5/images/image-omelette.jpeg"
            className="rounded-2xl"
          ></img>
          <h1 className="font-bold">Simple Omelette Recipe</h1>
          <p className="text-sm">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="p-4 bg-red-800/20 my-4">
            <h2 className="font-bold text-red-900">Preparation time</h2>
            <p className="text-sm">
              <ul className="list-disc pl-5">
                <li>
                  <strong>Total:</strong>Approximately 10 minutes
                </li>
                <li>
                  <strong>Preparation:</strong> 5 minutes
                </li>
                <li>
                  <strong>Cooking:</strong> 5 minutes
                </li>
              </ul>
            </p>
          </div>
          <div className="p-4 my-4 border-gray-300 border-b">
            <h2 className="font-bold text-red-900">Ingredients</h2>
            <p className="text-sm">
              <ul className="list-disc pl-5 ">
                <li> 2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </li>
              </ul>
            </p>
          </div>
          <div className="p-4 my-4 border-gray-300 border-b">
            <h2 className="font-bold text-red-900">Instructions</h2>
            <p className="text-sm">
              <ol className="list-decimal pl-5 text-sm text-gray-700">
                <li>
                  <strong>Beat the eggs:</strong> In a bowl, beat the eggs with
                  a pinch of salt and pepper until they are well mixed. You can
                  add a tablespoon of water or milk for a fluffier texture
                </li>
                <li>
                  <strong>Heat the pan:</strong>Place a non-stick frying pan
                  over medium heat and add butter or oil
                </li>
                <li>
                  <strong>Cook the eggs:</strong> Cook the omelette: Once the
                  butter is melted and bubbling, pour in the eggs. Tilt the pan
                  to ensure the eggs evenly coat the surface.
                </li>
                <li>
                  <strong>Add fillings (optional):</strong> When the eggs begin
                  to set at the edges but are still slightly runny in the
                  middle, sprinkle your chosen fillings over one half of the
                  omelette.
                </li>
                <li>
                  <strong>Fold and serve:</strong> As the omelette continues to
                  cook, carefully lift one edge and fold it over the fillings.
                  Let it cook for another minute, then slide it onto a plate.
                </li>
                <li>
                  <strong>Enjoy:</strong> Serve hot, with additional salt and
                  pepper if needed.
                </li>
              </ol>
            </p>
          </div>
          <div className="p-4 my-4">
            <h2 className="font-bold text-red-900">Nutrition</h2>
            <p className="text-sm">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="mx-10 mt-10">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2">Calories</td>
                    <td className="py-2 text-right text-[#8B3A28] font-semibold">
                      277kcal
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2">Carbs</td>
                    <td className="py-2 text-right text-[#8B3A28] font-semibold">
                      0g
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2">Protein</td>
                    <td className="py-2 text-right text-[#8B3A28] font-semibold">
                      20g
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2">Fat</td>
                    <td className="py-2 text-right text-[#8B3A28] font-semibold">
                      22g
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
