import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);
export function CartContextProvider({ children }) {
    const [isCheckout, setIsCheckout] = useState(false);
   
    return (
        <CartContext.Provider
          value={{
            isCheckout,
            setIsCheckout,
          }}
        >
          {children}
        </CartContext.Provider>
      );
    }