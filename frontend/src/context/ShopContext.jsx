import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '$'; // Can change currency used for entire application from here
    const delivery_fee = 10;
    const [search,setSerach] = useState("");
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        if(!size){
            toast.error("Select Product Size.");
            return;
        }

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] =  1;
        }
        setCartItems(cartData);
    }

    const value = {
        products, currency, delivery_fee,
        search, setSerach, showSearch, setShowSearch,
        cartItems, setCartItems, addToCart
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;