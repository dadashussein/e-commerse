import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <aside
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed top-0 h-full w-full bg-white shadow-2xl transition-all duration-300 z-20 px-4 md:w-[35vw] xl:max-w-[30vw] lg:px-[35px]`}
    >
      {/* shopping bag */}
      <header className="rounded-md p-2 mt-4 bg-gray-200 border-b flex items-center justify-between">
        <h2 className="uppercase text-sm font-semibold">
          Alış-veriş səbəti ({itemAmount})
        </h2>
        <button  onClick={handleClose} className="w-8 h-8 flex justify-center items-center cursor-pointer" >
          <IoMdArrowForward className="text-2xl" />
        </button>
      </header>

      {/* cart items */}
      <div className="flex flex-col gap-y-2 h-[350px] lg:h-[400px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>

      {/* cart summary */}
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex items-center justify-between w-full">
          <div className="uppercase font-semibold">
            <span className="mr-2">Cəm:</span>$ {total.toFixed(2)}
          </div>
          <button
            onClick={clearCart}
            className="w-10 h-19 flex justify-center items-center rounded-md py-2 bg-red-500 text-white text-xl cursor-pointer">
            <FiTrash2 />
          </button>
        </div>
        <Link
          to={`/`}
          className="flex justify-center items-center w-full p-1 bg-gray-200 rounded font-medium text-primary"
        >
          Səbətə Bax
        </Link>
        <Link
          to={`/`}
          className="flex justify-center items-center w-full p-1 bg-green-600 rounded font-medium text-white"
        >
          Ödənişə keç
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
