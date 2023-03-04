import React from "react";

const Service = ({ src, title, alt }) => (
  <div className="border border-gray-200 flex flex-col items-center justify-center gap-5 py-9 px-5 rounded-sm hover:scale-105 duration-300">
    <div>
      <img className="max-w-[50px]" src={src} alt={alt} />
    </div>
    <h5 className="text-[#FC5D35] text-xl">{title}</h5>
    <p className="text-center">
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable.
    </p>
  </div>
);

export default Service;
