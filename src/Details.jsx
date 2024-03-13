import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { useParams } from 'react-router-dom';
import { addPizzas } from "./reducers/pizzaSlice";

export default function Details() {
  
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza)

  const {id=0} = useParams();
  const pizzaId = pizzas[id];
  // const pizzaId = pizzas.find(pizza => pizza.id === id);
  console.log(pizzaId);
  
  return (
    <div className="w-dvw h-dvh bg-yellow-300 flex">
        <div className="left w-1/2 flex justify-center items-center bg-yellow-300 ">
          <img src="https://pizzeriasoleluna.ch/wp-content/uploads/2021/03/pizzeria-template-header-pizza-img.png" alt="" />
        </div>
        <div className="right w-1/2 flex justify-center items-center flex-col gap-4"><h1 className="text-[2rem]">{pizzaId.name}:</h1>
            <p >{pizzaId? pizzaId.description : "doesnt exist" }<hr></hr></p>
            <div className=" w-full flex justify-center pt-3">
              <p >Price: {pizzaId? pizzaId.price + "€" : "no price" }</p>
            </div>
        </div>
        
    </div>
  )
}
