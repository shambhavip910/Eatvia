import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartslice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-red-100 to-white flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-red-600">Your Cart 🛍️</h1>
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200"
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-700">
            <h2 className="text-2xl font-semibold mb-3">Your cart is empty!!</h2>
            <p className="italic text-red-500">
              Add some delicious items to your cart... ✿◡‿◡
            </p>
          </div>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
