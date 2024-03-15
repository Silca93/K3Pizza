import React from "react";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addPizza } from "./reducers/pizzaSlice";
import Navbar from './Navbar';
import Footer from "./Footer";
import Siderbar from "./Sidebar";
import { Link } from "react-router-dom";
import data from './assets/pizza.json';

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

  //! Filter by price//
  const [price, setPrice] = useState([]); 

  const filterByPrice = () => {
    const sortedPizzas = pizzas.slice().sort((a, b) => {
      if (price === 'ascending') {
        return a.price - b.price;
      } else if (price === 'descending') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    setFilteredPizzas(sortedPizzas);
  };
    
  
  const [hover, setHover] = useState(false);

  return (
    <div className="w-dvw gap-4 flex-wrap relative">

      <Navbar hover={hover} setHover={setHover}/>
      {hover? <Siderbar/> : ""}
      <div className="w-full h-[7rem] flex flex-col justify-center items-center bg-[#0F4C5C]">
        <div className="w-full h-[150px] bg-[#0F4C5C] flex justify-between px-5 py-5">
          <input onChange={(e) => {setSearchVal(e.target.value), filterBySearch()}} type="text" placeholder="Filter by toppings" className="w-[15rem] h-[3rem] rounded-lg px-3 ml-5"/>
          <details className="dropdown">
            <summary className="m-1 btn mr-[3rem]">Filter By</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
              <li><a onClick={() => {setPrice('ascending'); filterByPrice(); console.log('filtering ascending...');}}>Ascending Price</a></li>
              <li><a onClick={() => {setPrice('descending'); filterByPrice(); console.log('filtering descending...');}}>Descending Price</a></li>
            </ul>
          </details>
        </div>
        
      </div>
      <div className="pizzaCards w-dvw bg-[#0F4C5C] flex gap-7 flex-wrap justify-center py-5">
        

        {filteredPizzas.map((element, index) => {
                return (
              <Link key={index} to={`/K3Pizza_Eric/Details/${index}`}>
                <div className="w-[20rem] h-[30rem]">
               {/* <Link key={index} to={`/Details/${searchIndex(element)}`}> */}

                  <div className="flex justify-center">

                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="PIZZAS overflow-hidden h-[15rem]">
                        <img className="py-2 object-cover w-[100%] h-[100%]"  src={element.image} alt={element.name} />
                    </figure>
                    <div className="card-body bg-[#9A031E] rounded-b-xl">
                        <h2 className="card-title text-white">
                        {(element.name).toUpperCase()}
                        </h2>
                        <p className="text-white"><strong className="text-white">Toppings:</strong> {(element.topping).join(", ")}</p>
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
      
      <Footer/>
    </div>
  );
}


