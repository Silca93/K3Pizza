import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom';
import { addPizza } from "./reducers/pizzaSlice";
import Navbar from './Navbar';
import data from './assets/pizza.json';
import audio from './assets/sound/mamma-mia2.mp3';

export default function Details() {
  const pizzas = data;
  const { id } = useParams();
  const currentPizza = pizzas[id];

  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier);

  let mario = new Audio(audio);

  const playSound = () => {
    mario.play();
  };



  const getImageUrl = (imagePath) => {
    // Remove './public/' from the start of the path if it exists
    const cleanPath = imagePath.replace(/^\.?\/public\//, '');
    // Construct the full URL using the base URL from Vite
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };
  console.log("Base URL:", import.meta.env.BASE_URL);
  console.log("Current pizza:", currentPizza);
  console.log("Image path:", currentPizza?.image);
  console.log("Full image URL:", currentPizza ? getImageUrl(currentPizza.image) : "No image");

  console.log("Full image URL:", currentPizza ? getImageUrl(currentPizza.image) : "No image");

  return (
    <>
      <Navbar />
      <div className="w-dvw h-dvh bg-[#0F4C5C] flex text-white max-[670px]:flex-col max-[670px]:justify-center max-[670px]:items-center">
        <div className="left w-1/2 flex flex-col justify-center items-center bg-[#0F4C5C] relative">
          <Link to="/K3Pizza/">
            <div className="back mb-7 mt-2 w-full absolute top-4 left-5">
              <button className="w-[8rem] h-[3rem] border-[1px] bg-[#9A031E] border-white rounded-xl absolute top-5 left-5 text-white active:bg-white active:text-black max-[670px]:top-[-6rem] max-[670px]:left-[-8rem] max-[610px]:top-[-4rem] max-[500px]:top-[-3rem] max-[500px]:left-[-7rem] max-[500px]:w-[6rem]">BACK TO MENU</button>
            </div>
          </Link>
          <div className="container w-[700px] h-[700px] max-[1400px]:w-[400px] max-[1400px]:h-[400px] max-[800px]:w-[300px] max-[800px]:h-[300px] border-[5px] border-white animate-[spin_70s_ease-in-out_infinite] rounded-full">
            {currentPizza && currentPizza.image ? (
              <img 
              className="object-cover rounded-full w-[100%] h-[100%] z-50" 
              src={getImageUrl(currentPizza.image)} 
              alt={currentPizza.name} 
              onError={(e) => {
                console.error("Image failed to load:", e.target.src);
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = "./../public/images/vesuvius.jpg"; // Note: removed ../public
              }} 
            />
            ) : (
              <p className='text-xl text-white '>Image not found</p>
            )}
          </div>
        </div>
        <div className="right w-1/2 flex justify-center items-start flex-col gap-4">
          <h1 className="text-[3rem] max-[800px]:text-[2rem] max-[670px]:text-center max-[670px]:ml-3">{currentPizza ? currentPizza.name.toUpperCase() : 'Pizza not found'}</h1>
          <p className="pr-[20px] text-justify max-[670px]:text-start max-[670px]:pr-0 max-[670px]:text-[13px] max-[670px]:ml-3">{currentPizza ? currentPizza.description : 'Description not available'}</p>
          <div className="text-white w-full flex justify-start pt-3">
            <p className='max-[670px]:ml-3'>Price: {currentPizza ? currentPizza.price + '€' : 'No price available'}</p>
          </div>
          <div>
          </div>
          <div className="w-full h-[3rem] flex justify-start items-center max-[670px]:ml-3">
            <button onClick={() => { dispatch(addPizza(currentPizza)); playSound(); console.log(panier); }} className="w-[9rem] h-[3rem] border-2 bg-[#9A031E] rounded-xl border-white active:bg-white active:text-black">ADD TO BASKET</button>
          </div>
        </div>
      </div>
    </>
  );
}
