import { createSlice } from "@reduxjs/toolkit";
import pizzaData from './../assets/pizza.json'

export const pizzaSlice = createSlice({
    name:"pizza",
    
    initialState: pizzaData,

    reducers: {
        addPizzas: (state, action) => {

        },

        
    }
})

export const {addPizzas} = pizzaSlice.actions;

export default pizzaSlice.reducer;