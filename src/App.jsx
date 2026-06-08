import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
// import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Wishlist from "./pages/Wishlist";
import Error from "./pages/Error";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout/>}>

        <Route path="/" element={<Home />}></Route>
        <Route path="about/" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="account" element={<Account />}></Route>
        {/* <Route path="checkout" element={<Checkout />}></Route> */}
        <Route path="productdetails/:id" element={<Details />}></Route>
        <Route path="wishlist" element={<Wishlist />}></Route>
        <Route path="*" element={<Error />}></Route>
    </Route>
      
    </>
  )
);


const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App