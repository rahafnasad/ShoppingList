import React, { useContext } from 'react'
import style from './checkout.module.css'
import { CartContext } from '../../context/cartContext';

export default function Checkout() {
  const {isCheckout,setIsCheckout}=useContext(CartContext);
  const checkoutPRoduct =()=>{
    setIsCheckout(false);
    localStorage.removeItem("cart")
  }

  return (
    <div className={style.checkoutParent}>
      <div className={style.checkout}>
        <h3>Checkout</h3>

        <form>

           <div className={style.name}>
           <label htmlFor="name">Name</label>
           <input type="text" placeholder='Rahaf Hussein'/>
           </div>
           <div className={style.email}>
           <label htmlFor="email">Email</label>
           <input type="text" placeholder='Rahaf@gmail.com'/>
           </div>
           <div className={style.buttons}>
            <button className={style.checkoutButton} onClick={checkoutPRoduct}>Checkout</button>
            <button className={style.cancelButton} onClick={()=>{setIsCheckout(false)}}>Cancel</button>

           </div>
    
        </form>
    </div>
    </div>
  )
}
