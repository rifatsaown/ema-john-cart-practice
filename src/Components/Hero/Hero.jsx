import React from "react";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import { addToDb, getStoredCart } from "../utilities/fakedb";

const Hero = () => {
  const [products, setproducts] = React.useState([]);
  const [cart, setcart] = React.useState([]);
  React.useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((json) => setproducts(json));
  }, []);
  React.useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    for (const id in savedCart) {
      const product = products.find((product) => product.id === id);
      if (product) {
        const quantity = savedCart[id];
        product.quantity = quantity;
        storedCart.push(product);
      }
    }
    setcart(storedCart);
  }, [products]);

  const buttonHandler = (addedProduct) => {
    const exists = cart.find((product) => product.id === addedProduct.id);
    let newCart = [];
    if(!exists){
      addedProduct.quantity = 1;
      newCart = [...cart , addedProduct];
    }
    else{
      const rest = cart.filter((product) => product.id !== addedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest , exists];
    }
    setcart(newCart);
    addToDb(addedProduct.id)
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mt-3">
        <div className="col-span-1 md:col-span-4">
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map((product, id) => (
                <Product  buttonHandler={buttonHandler}  product={product} key={id} />
              ))}
            </div>
          
        </div>
        <div className=" hidden md:block bg-orange-200 col-span-1 rounded-t-[20px]">
          <div className="sticky top-0">
            <Cart cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
