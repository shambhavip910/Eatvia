import RestaurantCard, { isveg } from "./ReataurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofrestaurant, selistofrestaurant] = useState([]);
  const [filteredrestaurant, setFilteredrestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const Vegrestaurant = isveg(RestaurantCard);
  const { loggedinUser, setUsername } = useContext(UserContext);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6533453&lng=77.1588548&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    const restaurantData = json?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    selistofrestaurant(restaurantData || []);
    setFilteredrestaurant(restaurantData || []);
  };

  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-2xl font-semibold text-red-600 mt-20">
        Looks like you’re not connected to the Internet!!
      </h1>
    );
  }

  return listofrestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body min-h-screen">
      <div className="filter flex flex-wrap justify-center gap-4 md:gap-8 m-6 p-4 bg-white shadow-md rounded-2xl border border-red-100">
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button
            onClick={() => {
              const filteredlist = listofrestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredrestaurant(filteredlist);
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
          >
            Search
          </button>
        </div>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
          onClick={() => {
            const filteredlist = listofrestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredrestaurant(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="flex items-center gap-2">
          <label className="font-medium text-gray-700">Username:</label>
          <input
            className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            value={loggedinUser}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-center gap-6 px-4 pb-10">
        {filteredrestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            {restaurant.info.veg ? (
              <Vegrestaurant resdata={restaurant} />
            ) : (
              <RestaurantCard resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
