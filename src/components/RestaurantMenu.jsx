import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantmenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[5].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="min-h-screen bg-linear-to-br from-red-100 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="border-b border-gray-300 pb-4 mb-6 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-2">{name}</h1>
          <p className="text-gray-700 text-lg">
            {cuisines?.join(", ")} • {costForTwoMessage}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.categoryId || index}
              data={category?.card?.card}
              showitems={index === showIndex}
              setshowindex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

