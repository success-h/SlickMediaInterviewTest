import React from "react";

export const Card1 = () => {
  return (
    <div className="w-[200px] h-[200px] bg-gray-dark">
      <img src="/hero.jpg" alt="hero" />
      <p>Name</p>
    </div>
  );
};
export const Card2 = () => {
  return (
    <div className="max-w-[300px] max-h-[300px] relative opacity-10 bg-gray-dark">
      <img src="/hero.jpg" alt="hero" />
      <p>Name</p>
    </div>
  );
};
