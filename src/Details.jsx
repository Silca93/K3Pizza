import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addPizza, removePizza } from "./reducers/pizzaSlice";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import data from './assets/pizza.json'

//audio file//
import audio from './assets/sound/mamma-mia2.mp3';

export default function Details() {
  
  const pizzas = data;
  const {id} = useParams();
  
  const currentPizza = pizzas[id];

  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier);

  let mario = new Audio(audio);

  const playSound = () => {
    mario.play();
 }

  

  return (
    <>
     <Navbar/>
      <div className="w-dvw h-dvh bg-[#0F4C5C] flex text-white">
          <div className="left w-1/2 flex flex-col justify-center items-center bg-[#0F4C5C] relative">
            
            <Link to="/K3Pizza_Eric/">
              <div className="back mb-7 w-full absolute top-5 left-5">
                <button className="w-[8rem] h-[3rem] border-[1px] bg-[#9A031E] border-white rounded-xl absolute top-10 left-10 text-white active:bg-white active:text-black">BACK TO MENU</button>
              </div>
            </Link>
            <img className="animate-[spin_20s_infinite]" src="https://pizzeriasoleluna.ch/wp-content/uploads/2021/03/pizzeria-template-header-pizza-img.png" alt=""/>
          </div>
          <div className="right w-1/2 flex justify-center items-center flex-col gap-4">
              
            <h1 className="text-[2rem]">{currentPizza.name}:</h1>
              <p className="pr-5 text-justify" >{currentPizza? currentPizza.description : "doesnt exist"}</p>
              <div className="text-white w-full flex justify-center pt-3">
                <p >Price: {currentPizza? currentPizza.price + "€" : "no price" }</p>
              </div>
              <div className="w-full h-[3rem] flex justify-center items-center">
                  <button onClick={() => {dispatch(addPizza(currentPizza), playSound()); console.log(panier);}} className="w-[9rem] h-[3rem] border-2 bg-[#9A031E] rounded-xl border-white active:bg-white active:text-black">ADD TO BASKET</button>
              </div>
          </div>
      </div>
    </>
  )
}
