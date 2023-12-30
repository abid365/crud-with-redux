import React from "react";

const Footer = () => {
  return (
    <div className="pt-1 bg-gradient-to-r from-cyan-500 via-pink-400 to-emerald-300">
      <div className="grid lg:grid-cols-2 grid-cols-1 py-5 px-5 bg-black text-white">
        <div>
          <h1 className="font-bold text-sm pb-2">
            Redux CRUD App with <br /> Vite React
          </h1>
          <p className="text-xs">
            Learning Redux to implement in e-com project
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
