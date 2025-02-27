{/*CONTEXT API TO DISPLAY MULTIPLE FOOD ITEMS , USE THIS CONTEXT API TO WRAP APP IN MAIN.JSX}*/}
 {/*the values inside this contextvalue can be acessed anywhere*/}
import {createContext} from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider=(props)=>{
          const contextValue={  
           
                 food_list
          }
          return (
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
          )
}
export default StoreContextProvider; 
