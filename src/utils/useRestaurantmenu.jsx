import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useRestaurantmenu = (resId) => {
  const [resinfo, setresinfo] = useState(null);
  
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresinfo(json.data);
    
  };
  return resinfo;
};
export default useRestaurantmenu;
