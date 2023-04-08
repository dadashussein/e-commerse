import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
// import components

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      }  w-full h-full top-0 bg-white fixed shadow-2xl md:w-[35vw] xl:max-w-[30vw]  transition-all  duration-300 z-20 px-4 lg:px-[35px]`}
    >
      {/* shoping bag */}
      <div className="flex items-center justify-between rounded-md p-2 mt-4 bg-gray-200 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        {/* icons */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* card item */}
      <div className="flex flex-col  gap-y-2 h-[350px]  lg:h-[400px] overflow-y-auto  overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CardItem item={item} key={item.id} />;
        })}
      </div>

      <div className="flex flex-col  gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer rounded-md py-2 bg-red-500 text-white w-10 h-19 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={`/`}
          className="bg-gray-200 rounded flex p-1 justify-center items-center text-primary  w-full  font-medium"
        >
          View Cart
        </Link>
        <Link
          to={`/`}
          className="bg-primary  rounded flex p-1 justify-center items-center text-white  w-full  font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
