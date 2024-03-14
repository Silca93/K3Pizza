import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier);
  return (
    <div className="flex  w-full h-[4rem] bg-blue-400 justify-end items-center px-5">
        <Link to="/K3Pizza_Eric/Order/"><button className="w-[3.5rem] h-[3.2rem] bg-orange-500 rounded-xl"><i className="fa-solid fa-basket-shopping"></i></button></Link>  
    </div>
  )
}
