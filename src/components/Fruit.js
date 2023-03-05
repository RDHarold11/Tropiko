import React from "react";

const Fruit = ({ title, src, alt }) => (
  <div className="grid md:grid-cols-3 py-7 mt-9 gap-20 justify-center items-center md:text-left text-center">
    <div className="col-span-2">
      <h3 className="text-3xl font-medium ">Best Fresh {title}</h3>
      <p className="py-5">
        but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be
      </p>
      <button className="bg-black text-white py-3 px-9 mt-5">Buy Now</button>
    </div>
    <div>
      <img src={src} alt={alt} className="mx-auto max-w-[250px]" />
    </div>
  </div>
);

export default Fruit;
