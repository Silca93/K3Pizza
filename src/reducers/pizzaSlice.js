import { createSlice } from "@reduxjs/toolkit";

export const pizzaSlice = createSlice({
    name:"panier",
    
    initialState: {
        value: []
    },

    reducers: {
        addPizza : (state, action) => {
            state.value.push(action.payload)
            
        },
        removePizza: (state, action) => {
            const pizzaIndex = state.value.findIndex(pizza => pizza.id === action.payload); 
            if (pizzaIndex !== -1) {
              state.value.splice(pizzaIndex, 1); 
            }
        },
    }
})

export const {addPizza, removePizza} = pizzaSlice.actions;
export default pizzaSlice.reducer;
