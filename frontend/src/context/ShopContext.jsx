import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '$'; // Can change currency used for entire application from here
    const delivery_fee = 10;
    const [search,setSerach] = useState("");
    const [showSearch,setShowSearch] = useState(false);

    const value = {
        products, currency, delivery_fee,
        search, setSerach, showSearch, setShowSearch
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;