import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { NavBar } from "./NavBar";

const MyOrderContent = () => {
  let { orderIndex } = useParams();
  const { orders } = useContext(AppContext);
  const orderToRender = orders[orderIndex];
  return (
    <>
    <NavBar/>
    <div className="main-container">
      <div className="grid-container">
        {orderToRender?.products?.map((product) => (
          <div className="product-item" key={product.id}>
            <div className="product-info">
              <figure>
                <img src={product.images[0]} alt="Product in order" />
              </figure>
              <p> {product.title} </p>
            </div>
            <div className="product-cancelled">
              <p className="shopping-cart-product-price"> {`$${product?.price}`} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MyOrderContent;
