import React from "react";

const Card = ({ name, img, status, specie, dimension, created }) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-2xl border-slate-800 border-2">
      <div className="h-full w-full">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={img}
          alt={name}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-serif text-3xl font-bold text-white">{name}</h1>
        <div className="mb-10 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex flex-row space-x-2 ">
            <h4 className="font-bold">Specie:</h4>
            <p>{specie}</p>
          </div>
          <div className="flex flex-row space-x-2 ">
            <h4 className="font-bold">Dimension:</h4>
            <p>{dimension}</p>
          </div>
          <div className="flex flex-row space-x-2 ">
            <h4 className="font-bold">Created: </h4>
            <p>{created.slice(0, 10)}</p>
          </div>
          <div className="px-10 py-2">
            <p
              className={`${status.toLowerCase()} status rounded-full  py-2 px-3.5   text-white `}
            >
              {status.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
