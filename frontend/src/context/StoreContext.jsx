{/*CONTEXT API TO DISPLAY MULTIPLE FOOD ITEMS , USE THIS CONTEXT API TO WRAP APP IN MAIN.JSX}*/}
 {/*the values inside this contextvalue can be acessed anywhere*/}
import {createContext, useEffect} from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)
import { useState } from "react";
const StoreContextProvider=(props)=>{
        const [cartItems,setCartItems]=useState({});
        const addToCart=(itemId)=>{
          if(!cartItems[itemId]){
            {/*this if creates a new entry for the foodproduct as it is not available on cart*/}
            setCartItems((prev)=>({...prev,[itemId]:1}))
          }
          else{
            {/*this else will increase the product value by 1 as it is already available in cart*/}
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
          }
        }
        {/*the below remove()decreases the product value from cart by1*/}
        const removeFromCart = (itemId)=>{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
         const getTotalCartAmount =()=>{
          let totalAmount=0;
         
          for(const item in cartItems)
          {
            if(cartItems[item]>0){
              let itemInfo = food_list.find((product)=>product._id===item);
              totalAmount+=itemInfo.price*cartItems[item];
            }
            }
            return totalAmount;
            
         }

          const contextValue={  
           
                 food_list,
                 cartItems,
                 setCartItems,
                 addToCart,
                 removeFromCart,
                 getTotalCartAmount
          }
          return (
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
          )
}
export default StoreContextProvider; 
