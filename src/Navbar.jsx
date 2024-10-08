import React  from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPizza } from './reducers/pizzaSlice';
import Siderbar from "./Sidebar";
import logo from './assets/image/pizzaLogo.jpeg';


export default function Navbar({hover, setHover}) {
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier);
 

  return (
    <div className="flex w-full h-[6rem] bg-[#9A031E] justify-center items-center px-5">

      <div className="flex w-[60%] h-[4rem] bg-[#9A031E] justify-end items-center max-[768px]:w-[80%]">
        <div className="logo w-[70px] h-[70px] max-[1200px]:w-[50px]  max-[1200px]:h-[50px] max-[600px]:w-[30px] max-[600px]:h-[30px] flex justify-center items-center rounded-full overflow-hidden mx-3">

          <img src={logo} alt=""  width="70px"/>
        </div>
          <h1 className="text-[3rem]  text-white max-[1200px]:text-[2rem] max-[850px]:text-[1.5rem] max-[500px]:text-[1.2rem] max-[425px]:text-[1rem]">Welcome to MolenPie</h1>
      </div>
      <div className="w-[40%] h-[4rem] bg-[#9A031E] flex items-center justify-end px-5">
          <Link to="/K3Pizza/Order/">
            <button onMouseEnter={()=> {setHover(!hover); console.log(hover);}} onMouseLeave={() => {setHover(!hover); console.log(hover);}} className="border-white border-[0.11rem] w-[3.5rem] h-[3.2rem] bg-[#0F4C5C] text-white rounded-xl"><i className="fa-solid fa-basket-shopping text-white"></i>&nbsp;{panier.value.length > 0 ? panier.value.length : ""}</button>
          </Link>  
      </div>
    </div>
  )
}
