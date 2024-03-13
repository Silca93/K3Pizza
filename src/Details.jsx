import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addPizzas } from "./reducers/pizzaSlice";

export default function Details() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza)
  return (
    <div className="w-dvw h-dvh bg-yellow-300 flex">
        <div className="left w-1/2 flex justify-center items-center bg-yellow-300 ">
          <img src="https://pizzeriasoleluna.ch/wp-content/uploads/2021/03/pizzeria-template-header-pizza-img.png" alt="" />
        </div>
        <div className="right w-1/2 flex justify-center items-center flex-col">PIZA DETAILS:
        {
          pizzas.map((element, index) => {
            return (
              <p class key={index}>{element.description}<hr></hr></p>
            )
          })
          }
        </div>
    </div>
  )
}
