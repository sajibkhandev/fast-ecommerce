import monitor from "./src/assets/Monitor-Cart-Small.png"
import Console from "./src/assets/console.png"
  return (
    <div className="p-8">
      
      <div className="grid grid-cols-4 font-Pop mb-4 text-gray-500">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      
      <div className="flex items-center justify-between border rounded-lg p-4 mb-4">
        <div className="flex items-center gap-4">
          <img
            src={monitor}
            className="w-16 h-16"
            alt=""
          />
          <p className="font-Pop">LCD Monitor</p>
        </div>

        <p className="font-Pop">$650</p>

        <select className="border px-2 py-1 rounded font-Pop">
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
        </select>

        <p className="font-Pop">$650</p>
      </div>

      
      <div className="flex items-center justify-between border rounded-lg p-4 mb-4">
        <div className="flex items-center gap-4">
          <img
            src={Console}
            className="w-16 h-16"
            alt=""
          />
          <p className="font-Pop">H1 Gamepad</p>
        </div>

        <p className="font-Pop">$550</p>

        <select className="border px-2 py-1 rounded font-Pop">
          <option>02</option>
          <option>01</option>
          <option>03</option>
          <option>04</option>
        </select>

        <p className="font-Pop">$1100</p>
      </div>

      
      <div className="flex justify-between my-6">
        <button className="border px-6 py-2 rounded font-Pop">
          Return To Shop
        </button>
        <button className="border px-6 py-2 rounded font-Pop">
          Update Cart
        </button>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between gap-6">
        
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-4 py-2 rounded font-Pop h-[56px]"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded font-Pop h-[56px]">
            Apply Coupon
          </button>
        </div>

        
        <div className="border rounded-lg p-6 w-full max-w-sm">
          <h2 className="font-Pop text-lg mb-4">Cart Total</h2>

          <div className="flex justify-between border-b py-2">
            <span className="font-Pop">Subtotal:</span>
            <span className="font-Pop">$1750</span>
          </div>

          <div className="flex justify-between border-b py-2">
            <span className="font-Pop">Shipping:</span>
            <span className="font-Pop">Free</span>
          </div>

          <div className="flex justify-between py-2">
            <span className="font-Pop">Total:</span>
            <span className="font-Pop">$1750</span>
          </div>

          <button className="bg-red-500 text-white w-full py-2 mt-4 rounded font-Pop">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;