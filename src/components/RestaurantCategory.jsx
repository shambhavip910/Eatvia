
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showitems,setshowindex }) => {
    // const [showitems,setshowitems]=useState(false);
    // // console.log(data)
    const handleClick=()=>{
        // setshowitems(!showitems);
        setshowindex();
    }
    return (
        <div>
            {/* header */}
            <div className="mx-5 my-1 bg-gray-100 rounded-lg p-2  shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                    <span className="font-medium text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>▼</span>
                </div>  

                {showitems && <ItemList items={data.itemCards} />}

            </div>
            {/* Accordion Body */}
        </div>
    );
}
export default RestaurantCategory;