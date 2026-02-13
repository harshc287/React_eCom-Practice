export const  initialCartState = 
    JSON.parse(localStorage.getItem("cartB69")) || []
 
export function cartReducer(state, action){
    switch(action.type){
        case "ADD_TO_CART":{
            const exists = state.find(item => item.id === action.payload.id)

            let updateCart;

            if(exists){
                updateCart = state.map(item => 
                    item.id === action.payload.id
                    ? {...item, quantity: item.quantity + 1}
                    :item
                )
            } else{
                updateCart= [...state, {...action.payload, quantity: 1}]
            }

            localStorage.setItem("cartB69", JSON.stringify(updateCart))
            return updateCart;
        }

        case "INCREASE_QTY":{
            const updateCart = state.map(item => 
                item.id === action.payload 
                ? {...item, quantity: item.quantity + 1 }
                : item
            )

            localStorage.setItem("cartB69", JSON.stringify(updateCart))
            return updateCart
        }

        case "DECREASE_QTY": {
            const updateCart = state.map(item => 
                item.id === action.payload
                ? {...item, quantity: item.quantity - 1}
                :item
            )
            .filter(item => item.quantity > 0)

            localStorage.setItem("cartB69", JSON.stringify(updateCart))
            return updateCart
        }


        case "REMOVE_FROM_CART":
            const updateCart = state.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem("cartB69", JSON.stringify(updateCart))
            return updateCart


        case "CLEAR_CART":
            localStorage.removeItem("cartB69")
            return []

        default: 
            return state


    }
}