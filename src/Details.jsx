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
      <div className="w-dvw h-dvh bg-[#0F4C5C] flex text-white max-[670px]:flex-col max-[670px]:justify-center max-[670px]:items-center">
          <div className="left w-1/2 flex flex-col justify-center items-center bg-[#0F4C5C] relative">
            
            <Link to="/K3Pizza_Eric/">
              <div className="back mb-7 w-full absolute top-5 left-5">
                <button className="w-[8rem] h-[3rem] border-[1px] bg-[#9A031E] border-white rounded-xl absolute top-5 left-5 text-white active:bg-white active:text-black">BACK TO MENU</button>
              </div>
            </Link>
            <div className="container w-[700px] h-[700px] max-[1400px]:w-[400px] max-[1400px]:h-[400px] max-[800px]:w-[300px] max-[800px]:h-[300px] border-[5px]  border-white animate-[spin_70s_ease-in-out_infinite] rounded-full">

              {/* <img className="rounded-full " src={currentPizza.image} alt="" /> */}
            </div>
          </div>
          <div className="right w-1/2 flex justify-center items-start flex-col gap-4">
              
            <h1 className="text-[3rem] max-[800px]:text-[2rem] max-[670px]:text-center">{(currentPizza.name).toUpperCase()}</h1>
              <p className="pr-[20px] text-justify max-[670px]:text-start max-[670px]:pr-0" >{currentPizza? currentPizza.description : "doesnt exist"}</p>
              <div className="text-white w-full flex justify-start pt-3">
                <p >Price: {currentPizza? currentPizza.price + "€" : "no price" }</p>
              </div>
              <div className="w-full h-[3rem] flex justify-start items-center">
                  <button onClick={() => {dispatch(addPizza(currentPizza), playSound()); console.log(panier);}} className="w-[9rem] h-[3rem] border-2 bg-[#9A031E] rounded-xl border-white active:bg-white active:text-black">ADD TO BASKET</button>
              </div>
          </div>
      </div>
    </>
  )
}
