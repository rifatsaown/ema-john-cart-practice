import React from "react";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";

const Hero = () => {
  const [products, setproducts] = React.useState([]);
  const [cart, setcart] = React.useState([]);
  React.useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((json) => setproducts(json));
  }, []);
  const buttonHandler = (product) => {
    setcart([...cart, product]);
    
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mt-3">
        <div className="col-span-4">
          <div>
            <div className="grid grid-cols-3 gap-4">
              {products.map((product, id) => (
                <Product  buttonHandler={buttonHandler}  product={product} key={id} />
              ))}
            </div>
          </div>
        </div>
        <div className=" bg-orange-200 col-span-1 rounded-t-[20px]">
          <div className="sticky top-0">
            <Cart cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
