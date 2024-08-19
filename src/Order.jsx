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
    <div className="w-dvw h-screen bg-[#0F4C5C] flex flex-col justify-center items-center relative">
      <Link to="/K3Pizza/">
        <button className="w-[6rem] h-[2.5rem] z-50 border-[1px] bg-[#9A031E] border-white rounded-xl absolute top-10 left-10 text-white text-[12px] px-2 active:bg-white active:text-black">BACK TO MENU</button>
      </Link>
        <div className="w-[600px] max-[650px]:w-[450px] max-[500px]:w-[350px] h-[35rem] bg-[#9A031E] flex flex-col items-center gap-3 py-5 flex-wrap rounded-xl relative">
          <div className="toppart w-full h-[10%]  flex justify-center items-center">

            <div className="titleContainer w-[10rem]  h-[3rem] bg-white flex justify-center items-center text-center rounded-xl ">
              <h1>Your Basket</h1>
            </div>
          </div>
            <div className="pizzas h-[83%] w-full bg-gray-300 flex flex-col overflow-x-auto justify-center items-center py-3">

                {
                panier.value.map((element, index) => {
                  return (
                    
                      <div key={index} className="w-[25rem] max-[650px]:w-[20rem] h-[3.5rem] bg-white flex justify-between  px-4 my-2 items-center rounded-2xl">
                        <div className='left'>
                          <p>{"1 x" + " " + element.name}</p>
                        </div>
                        <div className="right">
                          <button onClick={() => dispatch(removePizza(element.id))} className="btn btn-circle  text-white bg-[#0F4C5C] ">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        </div>
                      </div>
                    
                  )
                })
                }
              </div>  

            <div className="h-[6%] w-[9rem] absolute bottom-2 right-[4rem] bg-white px-2 py-2 pt-1  rounded-sm">
              <h1 className="text-xl ">Total : {totalPrice} € </h1>
            </div>
        </div>
    </div>
  )
}
