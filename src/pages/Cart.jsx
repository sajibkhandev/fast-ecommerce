
import { useDispatch, useSelector } from "react-redux";
import monitor from "../assets/Monitor-Cart-Small.png";
import Console from "../assets/console.png";
import { useEffect, useState } from "react";
import { decrement, increment, removeitem } from "../slices/addtocartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch =useDispatch()
  const [qty1, setQty1] = useState(1);
  const [qty2, setQty2] = useState(2);
  const [coupon, setCoupon] = useState("");
  let [subtotal, setSubTotal] = useState('');

  

  const data =useSelector(state=>state.cart.value)

  useEffect(()=>{
    let subtotal=0
    data.map(item=>{
      subtotal+=item.quantity*item.price
  
    })
    setSubTotal(subtotal)
  
  },[data])





  return (
    <div className="min-h-screen bg-white px-6 py-8 max-w-5xl mx-auto font-['Poppins',sans-serif]">
      <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400 font-['Poppins',sans-serif]">
        <span className="cursor-pointer hover:text-gray-600 transition-colors">Home</span>
        <span>/</span>
        <span className="font-semibold text-gray-800">Cart</span>
      </nav>

      <div className="w-full overflow-x-auto rounded-sm border border-gray-200 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              {["Product", "Price", "Quantity", "Subtotal"].map((h) => (
                <th
                  key={h}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700 font-['Poppins',sans-serif]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              data.map(item=>(
                <tr className="border-b border-gray-100 bg-white">
              <td className="px-6 py-5">
                <div onClick={()=>dispatch(removeitem(item))} className="flex items-center gap-3">
                  <button className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center hover:bg-red-600 transition-colors flex-shrink-0">
                    ✕
                  </button>
                  <div className="w-14 h-14 bg-gray-100 rounded" >
                    <img src={item.src} alt="" />
                  </div>
                  <span className="font-medium text-gray-800 font-['Poppins',sans-serif]">{item.title}</span>
                </div>
              </td>
              <td className="px-6 py-5 text-gray-700 font-['Poppins',sans-serif]">${item.price}</td>
              <td className="px-6 py-5">
                <div className="flex items-center border border-gray-300 rounded w-fit overflow-hidden">
                  <span className="px-3 py-1.5 text-gray-800 text-sm min-w-[2.5rem] text-center font-['Poppins',sans-serif]">
                    {item.quantity}
                  </span>
                  <div className="flex flex-col border-l border-gray-300">
                    <button onClick={() => dispatch(increment(item))} className="px-2 py-0.5 text-gray-500 hover:bg-gray-100 text-xs leading-none transition-colors">▲</button>
                    
                    <button onClick={() => dispatch(decrement(item))} className="px-2 py-0.5 text-gray-500 hover:bg-gray-100 text-xs leading-none border-t border-gray-300 transition-colors">▼</button>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 font-semibold text-gray-800 font-['Poppins',sans-serif]">${item.quantity*item.price}</td>
            </tr>

              ))
            }
           
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mb-10">
        <button className="px-7 py-2.5 border border-gray-800 rounded text-sm font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition-colors font-['Poppins',sans-serif]">
          Return To Shop
        </button>
        <button className="px-7 py-2.5 border border-gray-800 rounded text-sm font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition-colors font-['Poppins',sans-serif]">
          Update Cart
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
        <div className="flex gap-3 items-center">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon Code"
            className="border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-600 placeholder-gray-400 w-52 outline-none focus:border-red-400 transition-colors font-['Poppins',sans-serif]"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded transition-colors font-['Poppins',sans-serif]">
            Apply Coupon
          </button>
        </div>

        <div className="border border-gray-200 rounded p-6 w-full md:w-80">
          <h2 className="text-lg font-bold text-gray-900 mb-4 font-['Poppins',sans-serif]">
            Cart Total
          </h2>

          <div className="flex justify-between py-3 border-b border-gray-200 text-sm text-gray-700 font-['Poppins',sans-serif]">
            <span>Subtotal:</span>
            <span className="font-medium">${subtotal}</span>
          </div>

          <div className="flex justify-between py-3 border-b border-gray-200 text-sm text-gray-700 font-['Poppins',sans-serif]">
            <span>Delivery:</span>
            <span className="font-medium text-gray-900">5$</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200 text-sm text-gray-700 font-['Poppins',sans-serif]">
            <span>Tax:</span>
            <span className="font-medium text-gray-900">2%</span>
          </div>

          <div className="flex justify-between py-3 text-sm font-semibold text-gray-900 font-['Poppins',sans-serif]">
            <span>Total</span>
            <span>${subtotal+(subtotal*2/100+5)}</span>
          </div>

          <Link to="/checkout">
          <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-3 rounded transition-colors font-['Poppins',sans-serif]">
            Proceed to checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
