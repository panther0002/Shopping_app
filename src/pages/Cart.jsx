import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {
  const { cart }=useSelector( (state) => state);
  console.log("printing cart");
  console.log(cart);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce( (acc,curr) => acc + curr.price , 0 ));
  },[cart])   //cart e change hole update hoye jabe total amount

  return (
    <div className="px-[50px]">
    {
      cart.length > 0 ?
                    
      (<div className="flex flex-row gap-16 max-w-6xl justify-center mx-auto pt-10">

          <div className="">
          {
            cart.map( (item,index) => {
              return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
          }
          </div>

          <div className="flex flex-col justify-between py-2 pb-10">
            <div>
              <div className="text-green-700 text-[30px] font-semibold">Your Cart</div>
              <div className="text-green-700 font-bold text-[60px]">Summary</div>
              <p className="font-bold text-[22px]">
                Total items : <span className="font-medium text-[22px]"> {cart.length}</span>
              </p>
              
            </div>

            <div className="mx-auto">
              <div className="flex gap-2 mb-2 text-[20px]">
              Total Amount - 
                <p className="font-bold"> ${totalAmount}</p>
              </div>
              <button className=" w-full bg-green-600 px-10 py-2 text-[20px] font-bold text-white text-center">
                  Checkout Now
              </button>
            </div>
          </div>
          
        </div>
      ):
                   
      ( <div className="flex flex-col gap-4 max-w-xl items-center justify-center h-screen mx-auto">
          <p className="px-4 py-2 bg-red-200 w-[200px] text-center font-semibold border-2 border-red-950  hover:bg-red-400 transition-all duration-200">Cart Empty</p>
          <Link to="/">
            <button className="px-4 py-2 w-[200px] bg-green-300 text-center font-semibold border-2 border-green-600 hover:bg-green-500 transition-all duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )

    }
    </div>
  );
};

export default Cart;
