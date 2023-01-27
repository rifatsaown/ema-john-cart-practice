import React from "react";
import { BsCartPlus } from "react-icons/bs";
const Product = ({ product, buttonHandler }) => {
  const { img, name, price, ratings, seller} = product;
  const rating = [];
  for (let i = 0; i < ratings; i++) {
    rating.push(<span key={i}>⭐</span>);
  }
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price : {price}</p>
          <p>Seller : {seller}</p>
          <p className="flex alig">Rating : {rating}</p>
          <div className="card-actions">
            <button
              onClick={() => buttonHandler(product)}
              className="btn text-white border-none bg-orange-400"
            >
              Buy Now &nbsp; <BsCartPlus/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
