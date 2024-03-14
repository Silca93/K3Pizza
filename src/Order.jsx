import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza, removePizza } from "./reducers/pizzaSlice";


export default function Order() {

  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier);
  console.log(panier);

  return (
    <div className="w-dvw h-dvh bg-yellow-500 flex flex-col justify-center items-center relative">
      <Link to="/K3Pizza_Eric/">
        <button className="w-[8rem] h-[3rem] border-2 border-black absolute top-10 left-10">BACK TO MENU</button>
        </Link>
        <h1>
            {
             panier.value.map((element, index) => {
              return (
                <div key={index} className="w-[15rem] h-[10rem] bg-white flex  gap-4 justify-center items-center">
                  <div className='left'>
                    <p>{"1x" + " " + element.name}</p>
                  </div>
                  <div className="right">
                    <button onClick={() => dispatch(removePizza(element.id))} className="w-[5rem] h-[3rem] bg-red-500 border-2 border-black rounded-xl">remove</button>
                  </div>
                </div>
              )
            })
            }
        </h1>
    </div>
  )
}
