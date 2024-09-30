import React, { useContext, useEffect, useState } from "react";
import style from "./cart.module.css";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Checkout from "../checkout/Checkout";
import { CartContext } from "../../context/cartContext";

export default function Cart() {
  const [inCart, setInCart] = useState([]);
  const [state, setStet] = useState(false);
  const [total, setTotal] = useState(0);
  const {isCheckout,setIsCheckout}=useContext(CartContext);
  const getProducts = () => {
   try { const Products = JSON.parse(localStorage.getItem("cart"));
    if (Products){
      setInCart(Products);

    }
  console.log("Dfd")
  }
    catch(e){
      console.log(e)
    }
  };
  const totalPrice = () => {
    try{  const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart){
        const totalPrice = cart.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
        setTotal(totalPrice);
      }}
  catch(error){
    console.log(error)
  }
   
  };
  const increaseProduct = (product) => {
    const newCart = inCart.map((item) => {
      if (item.id == product.id) {
        const updatedQuantity = item.quantity + 1;
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    setStet(!state);
  };
  const decreaseQuantity = (product) => {
    const newCart = inCart
      .map((item) => {
        if (item.id == product.id) {
          const updatedQuantity = item.quantity - 1;
          if (updatedQuantity > 0) {
            return { ...item, quantity: updatedQuantity };
          }
          return null;
        }
        return item;
      })
      .filter((item) => item !== null);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setStet(!state);
  };

  useEffect(() => {
    totalPrice();

    getProducts();
  }, [state,isCheckout]);

  return (
    <div className={style.cart}>
      <h2>My Cart</h2>
      <ul className={style.Products}>
        {inCart.length>0 &&
          inCart.map((product) => (
            <li className={style.product}>
              <img src={product.image} alt="product image" />
              <h3 className={style.title}>{product.title.slice(0, 50)}</h3>
              <p className={style.price}>
                {product.price * product.quantity} $
              </p>
              <div className={style.quantity}>
                {product.quantity !== 1 ? (
                  <FaMinus
                    className={style.minus}
                    onClick={() => {
                      decreaseQuantity(product);
                    }}
                  />
                ) : (
                  <AiFillDelete
                    className={style.minus}
                    onClick={() => {
                      decreaseQuantity(product);
                    }}
                  />
                )}

                <span>{product.quantity}</span>

                <TiPlus
                  className={style.plus}
                  onClick={() => {
                    increaseProduct(product);
                  }}
                />
              </div>
            </li>
          ))}
      </ul>
      <div className={style.total}>Total Price : {total} $</div>
      <div className={style.checkout}>
        {" "}
        <button onClick={()=>{setIsCheckout(true)}}>
          Checkout
        </button>
      </div>
      {isCheckout&&      <Checkout  />
      }
    </div>
  );
}
