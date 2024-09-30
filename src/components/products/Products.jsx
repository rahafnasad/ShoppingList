import React, {  useEffect, useState } from "react";
import style from "./products.module.css";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { CartContext } from "../../context/cartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const star = [1, 2, 3, 4, 5];
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const addToCart = (product) => {
    let cart = []; 
    const storedCart = localStorage.getItem("cart");
    let idExists ;
    if (storedCart) {
        cart = [...JSON.parse(storedCart)]; 
         idExists = cart.some(obj => obj.id === product.id);

    }
    if (!idExists){
      product.quantity=1;
            cart.push(product);
            toast("Product Added to cart Successfully", {
                style: {
                  background: "#8c1c13",
                  color: "white",
                  fontSize: "15px",
                  fontFamily: "Cairo, sans-serif",
                },
                progressStyle: {
                    background: "black", 
                  },
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });

    }
    else {
        
        toast("This product is available.", {
            style: {
              background: "#8c1c13",
              color: "white",
              fontSize: "15px",
              fontFamily: "Cairo, sans-serif",
            },
            progressStyle: {
                background: "black", 
              },
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
};
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={style.products}>
      <h2>Products</h2>
      <ul>

      <div className={`row ${style.allProducts}`}>
        {products.length &&
          products.map((product) => (
            <div className={`col-lg-3 `}>
              <div className={style.product}>
                <div className={style.overlay}>
                  <p className={style.description}>
                    {product.description.slice(0, 150)}...
                  </p>
                  <button className={style.add} onClick={()=>{addToCart(product)}}>add to cart</button>
                </div>
                <img src={product.image} alt="product image" />

                <h3 className={style.title}>{product.title.slice(0, 50)}</h3>
                <p className={style.price}>{product.price} $</p>
                <div className={style.stars}>
                  {star.map((star) => (
                    <FaStar className={`${product.rating.rate > star ? "bg-golden" : ""} ${style.star}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      </ul>
      
    </div>
  );
}
/**      <p>{product.rating.count}</p>
                <p>{product.rating.rate}</p> */
