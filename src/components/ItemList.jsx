import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { additems } from "../utils/redux/cartslice";

const ItemList = ({ items }) => {
    // console.log(items)
    const dispatch=useDispatch();

    const handleclick=(item)=>{
        dispatch(additems(item));
    }
    return (
        <div>
            {items.map(item =>
                <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b ">
                    <div className="flex justify-between pr-4">
                        <div className=" flex flex-col w-[70%]">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span className="font-medium">{"₹"}{(item.card.info.price ?? item.card.info.defaultPrice) / 100}</span>
                            <span className="my-2 text-xs">
                                <span className="font-medium">★{item.card.info.ratings.aggregatedRating.rating}</span>
                                <span className="text-gray-600">{"  "}({item.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                            </span>
                            <p className="text-xs text-gray-600 leading-snug line-clamp-3">{item.card.info.description}</p>
                        </div>
                        <div className="relative h-30 w-30">
                             <img src={CDN_URL + item.card.info.imageId} className=" w-full h-full rounded-lg object-cover" />
                            
                              
                              <button className=" absolute -bottom-3 left-1/2 -translate-x-1/2 font-bold p-1 w-22 text-center border border-transparent bg-white px-3 py-1 rounded-lg active:bg-gray-200 active:border-black active:scale-95 transition-all duration-100"
                           
                            //   onClick={()=>{
                            //     dispatch(additems(item.card.info.name));
                            //   }}
                              onClick={()=>{handleclick(item)}}
                             >Add</button>
                        </div>     
                    </div>

                </div>
            )}
        </div>

        // 

    );
};
export default ItemList;