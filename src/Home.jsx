import React from "react";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addPizza } from "./reducers/pizzaSlice";
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import data from './assets/pizza.json'

export default function Home() {

  // const dispatch = useDispatch();
  const pizzas = data
   
  //! filtering search bar//
   
  const [searchVal, setSearchVal] = useState("");
  
  const [filteredPizzas, setFilteredPizzas] = useState(pizzas);
  
  const filterBySearch = () => {
    const filteredBySearch = pizzas.filter(pizzas =>
      pizzas.topping.some(topping => topping.toLowerCase().includes(searchVal.toLowerCase()))
    );
    setFilteredPizzas(filteredBySearch);
  };

    
  return (
    <div className="w-dvw  gap-4 flex-wrap">

      <Navbar/>
      <div className="w-full h-[7rem] flex flex-col justify-center items-center bg-yellow-400">
        <h1 className="text-[3rem] text-center text-white">Welcome to MolenPizza</h1>
        <input onChange={(e) => {setSearchVal(e.target.value), filterBySearch()}}type="text" placeholder="Filter by name" />
      </div>
      <div className="pizzaCards w-dvw bg-yellow-400 flex gap-7 flex-wrap justify-center">

        {filteredPizzas.map((element, index) => {
                return (
              <Link key={index} to={`/K3Pizza_Eric/Details/${index}`}>
                <div className="w-[20rem] h-[30rem] ">
               {/* <Link key={index} to={`/Details/${searchIndex(element)}`}> */}

                  <div className="flex justify-center">

                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img className="py-2" src="https://pizzeriasoleluna.ch/wp-content/uploads/2021/03/pizzeria-template-header-pizza-img.png"  alt={element.name} width="250px"/>
                    </figure>
                    <div className="card-body bg-orange-300 rounded-b-xl">
                        <h2 className="card-title ">
                        {(element.name).toUpperCase()}
                        </h2>
                        <p className=""><strong>Toppings:</strong> {(element.topping).join(", ")}</p>
                        <div className="card-actions justify-end">
                          <button onClick={()=>{handleClick(), handleAdd()}} className="w-[4rem] h-[2rem] bg-black text-white rounded-2xl border-2 border-white mr-[6.5rem] mt-1">Order</button>
                        <div className="badge bg-white badge-outline w-[5rem] h-[2rem]"><p className="flex justify-center text-[17px] font-bold">{element.price} €</p></div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
            })
        }
      </div>
    </div>
  );
}


