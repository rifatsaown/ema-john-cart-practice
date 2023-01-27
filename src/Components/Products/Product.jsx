import React from "react";

const Product = ({ product }) => {
  const { img, name, price, ratings, seller } = product;
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
          <p>Rating : {ratings} Stars</p>
          <div className="card-actions">
            <button className="btn text-white border-none bg-orange-400">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
