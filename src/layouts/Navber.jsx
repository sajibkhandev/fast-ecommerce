import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import ListItem from "../components/ListItem";
import { useSelector } from "react-redux";

const Navber = () => {

  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef (null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);





  let [alldata, setAllData] = useState([]);
  let [search, setSearch] = useState([]);
  let [input, setInput] = useState("");
  let [open, setOpen] = useState(false);

  let data=useSelector(state=>state.cart.value)



  // console.log(input.length);

  let handleInput = (e) => {
    setInput(e.target.value);

    let search = alldata.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );

    setSearch(search);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/")
      .then((res) => setAllData(res.data.products));
  }, []);

  return (
    <nav className="pt-10 pb-4 border border-[#00000080]">
      <Container>
        <Flex>
          <div className="w-3/12">
            <Link to="/">
              {" "}
              <Image src={Logo} alt={"logo"} />
            </Link>
          </div>
          <div className="w-5/12">
            <ul className="flex gap-x-12 cursor-pointer">
              <Link to="/">
                {" "}
                <ListItem text="Home" />{" "}
              </Link>
              <Link to="/contact">
                {" "}
                <ListItem text="Contact" />{" "}
              </Link>
              <Link to="/about">
                {" "}
                <ListItem text="About" />{" "}
              </Link>
              <Link to="/signup">
                {" "}
                <ListItem text="Sign Up" />{" "}
              </Link>
              <Link to="/login">
                {" "}
                <ListItem text="Login" />{" "}
              </Link>
            </ul>
          </div>





          <div ref={searchRef} className="w-4/12 relative  flex justify-between items-center pl-10">
            <div className="relative w-60.75 bg-offwhitedark">
              <input
                onFocus={()=>setShowSearch(true)}
                value={input}
                onChange={handleInput}
                className="w-full py-1 pl-5 pr-9 placeholder:text-xs placeholder:text-[#00000080]"
                type="text"
                placeholder="What are you looking for?"
              />
              <FiSearch className="absolute top-1/2 -translate-y-1/2 right-4" />
            </div>
            {/* Serceah bar */}

            {input.length > 0 && search.length > 0 && showSearch && (
              <div

                className={`absolute top-11.25 z-50 rounded-xl left-0 w-full py-5 bg-linear-to-r from-black/50 to-black bg- px-10`}
              >
                {search.map((item) => (
                  <ul>
                    <Link
                      to={`/productdetails/${item.id}`}
                      onClick={() => {
                        setInput(item.title);
                        setSearch([]);
                      }}
                    >
                      {" "}
                      <li className="py-2 font-pop font-semibold text-base text-white">
                        {item.title}
                      </li>
                    </Link>
                  </ul>
                ))}
              </div>
            )}



            <Flex className="gap-x-5">
              <IoIosHeartEmpty className="text-2xl" />
              <IoCartOutline
                onClick={() => setOpen(!open)}
                className="text-2xl"
              />
            </Flex>
            {open && (
              <div className="overflow-scroll h-[80vh] absolute top-[46px] z-50 right-0 w-11/12 bg-offwhitedark rounded py-10">
                <ul className="flex justify-between items-center px-3 pt-10 pb-6 text-sm font-semibold border-b border-black/20">
                  <li>Product:</li>
                  <li>Image:</li>
                  <li>Quantity:</li>
                  <li>Price:</li>
                  <li>Total:</li>
                </ul>

                {
                  data.map(item=>(
                     <ul className="flex justify-between items-center px-3 py-5 text-sm font-normal border-b border-black/20">
                  <li>{item.title}</li>
                  <li><Image className="w-[40px]" src={item.src}/></li>
                  <li className="border border-black/60 py-0.5 px-2 rounded  flex gap-x-2">
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                    </li>
                  <li>{item.price}$</li>
                  <li>50</li>
                </ul>


                  ))
                }



                <div className=" mt-5 p-3 text-right">
                  <h2 className="text-3xl">Total: 500</h2>
                </div>
              </div>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navber;
