import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza, removePizza } from "./reducers/pizzaSlice";


export default function Order() {

  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier);
  const totalPrice = panier.value.reduce((total, pizza) => total + pizza.price, 0);

  console.log(panier);

  return (
    <div className="w-dvw h-dvh bg-yellow-500 flex flex-col justify-center items-center relative">
      <Link to="/K3Pizza_Eric/">
        <button className="w-[8rem] h-[3rem] border-2 border-black absolute top-10 left-10">BACK TO MENU</button>
        </Link>
        <div className="w-[60rem] h-[40rem] bg-blue-200 flex flex-col items-center gap-3 py-5 flex-wrap rounded-xl relative">
            <div className="titleContainer w-[9rem] h-[2rem] bg-white text-center rounded-xl ">
              <h1>Your Basket</h1>
            </div>
            {
             panier.value.map((element, index) => {
              return (
                
                  <div key={index} className="w-[25rem] h-[3.5rem] bg-white flex justify-between px-4 items-center rounded-2xl">
                    <div className='left'>
                      <p>{"1 x" + " " + element.name}</p>
                    </div>
                    <div className="right">
                      <button onClick={() => dispatch(removePizza(element.id))} className="btn btn-circle  text-white bg-red-500   ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  </div>
                
              )
            })
            }
            <div className="absolute bottom-2 right-[4rem]">
              <h1 className="text-lg">Total : {totalPrice} € </h1>

            </div>
        </div>
    </div>
  )
}
