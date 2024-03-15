import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pizzas from './assets/pizza.json'

export default function Sidebar() {

  const panier = useSelector((state) => state.panier);
  const totalPrice = panier.value.reduce((total, pizza) => total + pizza.price, 0);

  return (
    <div className="w-[20rem] h-[25rem] flex flex-col items-center bg-white absolute right-1 z-50 rounded-b-xl">
        <div className="Recent w-[50%] h-[2rem] bg-[#0F4C5C] rounded-lg flex justify-center items-center my-3">
            <h1 className="text-white">RECENT ITEMS:</h1>
        </div>
        {panier.value.slice(-2).map((element, index)=>{
            return (
                <div className="flex justify-between items-center w-[90%] px-[2rem]" key={index}>
                    
                    <img className="rounded-xl pt-2" src={element.image} alt="" width="70px" />
                    <p className="text-lg">1 x {element.name}</p>
                </div>
            )
        })}
        <div className="price absolute bottom-2 bg-[#0F4C5C] py-3 px-3 rounded-lg">
            <h1 className="text-xl text-white">Total: {totalPrice} €</h1>
        </div>
    </div>
  )
}
