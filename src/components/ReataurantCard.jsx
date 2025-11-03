import { CDN_URL } from "../utils/constant";
import { ALT_IMG } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    slaString,
    cloudinaryImageId,
  } = resdata?.info;

  return (
    <div className="m-4 p-4 w-full sm:w-[250px] bg-gray-200 rounded-lg border border-gray-300 hover:border-black hover:bg-gray-300 min-h-[350px] md:min-h-[400px] lg:min-h-[450px] flex flex-col">
      <img
        className="reslogo rounded-lg h-1/2 "
        src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : ALT_IMG}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = ALT_IMG;
        }}
        alt={name}
      />

      <h3 className="font-bold my-1.5 text-lg  line-clamp-1">{name}</h3>
      <p className="line-clamp-2"> {cuisines.join(", ")}</p>
      <h5>{avgRating}★</h5>
      <h5>{costForTwo}</h5>
      <h5>{slaString}</h5>
    </div>
  );
};

export const isveg = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-0 left-2 bg-green-700 text-white text-sm px-3 py-1 rounded-ee-full">
          VEG
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
