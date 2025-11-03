
const Grocery = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-red-100 to-white text-gray-900 px-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        🛒 Grocery Section
      </h1>
      <h3 className="text-xl font-semibold text-red-500 mb-6">
        Hey!! This is the Grocery section of our app ;)
      </h3>
      <p className="text-gray-700 text-lg max-w-2xl">
        Let’s imagine there are a ton of child components inside this giant component
        <span className="text-red-400 font-semibold"> — Lazy Loaded!</span>  
        <br />Used this as an example of <strong>React Lazy Loading</strong> ●'◡'●
      </p>
    </div>
  );
};

export default Grocery;
