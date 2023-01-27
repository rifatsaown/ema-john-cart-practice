import React from "react";

const Cart = ({ cart }) => {
  let quantity = 0;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
    quantity = quantity + product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * .1).toFixed(2)) ;
  const grandTotal = total + shipping + tax;

  return (
    <div className="pl-5 mt-5">
      <h3 className="text-2xl font-bold text-center mb-9">Order Summary</h3>
      <p>Selected Item : {quantity}</p>
      <p>Total Price : {total}</p>
      <p>Total Shiping: {shipping}</p>
      <p>Tax + Vat : {tax} </p>
      <p className="text-lg font-semibold">Grand Total : {grandTotal}</p>
    </div>
  );
};

export default Cart;
