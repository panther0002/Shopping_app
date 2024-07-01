import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice"



const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();

  const removeFromCart=() =>{
    dispatch(remove(item.id));
    toast.success("Item Removed")
  }
  



  return(
    <div>
      <div className="flex flex-row gap-10 border-b-2 border-blue-300 mt-6">

        <div className="w-[20%] mb-20">
          <img src={item.image} className="h-full w-full object-cover"/>
        </div>

        <div className="flex flex-col gap-4 w-[50%]">
          <h1 className="font-bold text-[25px]">{item.title}</h1>
          <p className="text-[18px] font-medium">{item.description.split(" ").slice(0,15).join(" ")+"..."}</p>

          <div className="flex justify-between ">
            <div>
              <p className="text-green-700 text-[25px] font-bold">${parseFloat(item.price.toFixed(2))}</p>
            </div>

            <div onClick={removeFromCart} className="bg-red-300 w-8 h-8 flex justify-center items-center rounded-full">
              <MdDelete />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
