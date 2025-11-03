// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

// const About = () => {
//   const {loggedinUser}=useContext(UserContext);
//   return (
//     <div>
//         <h1>About Us Page</h1>
//         <h1 className="font-bold text-5xl my-50">{loggedinUser}</h1>
//         <p>This is the about us page of our EATVIA app ;) </p>
//     </div>
//     )
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-100 to-white flex flex-col items-center justify-center p-6 text-gray-900">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">About EatVia</h1>

        <p className="text-lg mb-8 leading-relaxed">
          Hi! I’m <span className="font-semibold text-red-500">Shambhavi Pandey</span>, the creator of{" "}
          <span className="font-semibold text-red-500">EatVia</span>.  
          This project was built purely as a **frontend concept**, to explore UI/UX design, 
          component structure, and responsive layout building with React and Tailwind CSS.
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-red-100">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">What EatVia Is</h2>
          <p className="text-gray-700">
            EatVia is a demo food ordering interface — you can explore menus, forms, and visuals,
            but it’s not connected to a backend or real ordering system (yet).  
            It’s part of my journey to strengthen my React and front-end skills.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-red-100">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Tech Stack</h2>
          <p className="text-gray-700">
            Built using <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern JavaScript.  
            Focused on clean design, modular code, and an intuitive user experience.
          </p>
        </div>

        <p className="text-gray-600 mt-6">
          Future plans: integrate APIs, enable live ordering, and deploy a full-stack version 🚀
        </p>
      </div>
    </div>
  );
};

export default About;

