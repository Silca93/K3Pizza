import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPizza } from './reducers/pizzaSlice';


export default function Navbar() {
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier);


  return (
    <div className="flex w-full h-[4rem] bg-[#9A031E] justify-center items-center px-5">

      <div className="flex w-[60%] h-[4rem] bg-[#9A031E] justify-end items-center px-5">
          <h1 className="text-[3rem]  text-white">Welcome to MolenPizza</h1>
      </div>
      <div className="w-[40%] h-[4rem] bg-[#9A031E] flex items-center justify-end px-5">
          <Link to="/K3Pizza_Eric/Order/">
            <button className="border-white border-[0.11rem] w-[3.5rem] h-[3.2rem] bg-[#0F4C5C] text-white rounded-xl"><i className="fa-solid fa-basket-shopping text-white"></i>&nbsp;{panier.value.length > 0 ? panier.value.length : ""}</button>
          </Link>  
      </div>
    </div>
  )
}
