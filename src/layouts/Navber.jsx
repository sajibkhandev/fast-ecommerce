import axios from 'axios'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ListItem from '../components/ListItem'


const Navber = () => {
  let [alldata,setAllData]=useState([])
  let [search,setSearch]=useState([])
  let [input,setInput]=useState('')

console.log(input.length);

  let handleInput=(e)=>{
    setInput(e.target.value);

    let search=alldata.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))

    setSearch(search);

  }

  useEffect(()=>{
    axios.get("https://dummyjson.com/products/")
    .then(res=>setAllData(res.data.products))

  },[])




  return (
    <nav className='pt-10 pb-4 border border-[#00000080]'>
        <Container>
            <Flex>
                <div className='w-4/12'>
               <Link to='/'> <Image src={Logo} alt={"logo"}/></Link>
                </div>
                <div className='w-5/12'>
                <ul className='flex gap-x-12 cursor-pointer'>
                  <Link to="/"> <ListItem text="Home"/> </Link>
                  <Link to="/contact"> <ListItem text="Contact"/> </Link>
                  <Link to="/about"> <ListItem text="About"/> </Link>
                  <Link to="/signup"> <ListItem text="Sign Up"/> </Link>
                  <Link to="/login"> <ListItem text="Login"/> </Link>




                </ul>

                    </div>
                <div className='relative w-4/12 flex justify-between items-center pl-10'>
                   <div className='relative w-60.75 bg-offwhitedark'>
                       <input onChange={handleInput} className='w-full py-1 pl-5 pr-9 placeholder:text-xs placeholder:text-[#00000080]' type="text" placeholder='What are you looking for?'/>
                       <FiSearch className='absolute top-1/2 -translate-y-1/2 right-4'/>
                   </div>
                {/* Serceah bar */}


                   {
                    input.length &&
                    search.length &&
                    <div className={`absolute top-11.25 z-50 rounded-xl left-0 w-full py-5 bg-gradient-to-r from-black/50 to-black bg- px-10`}>
                       {
                        search.map(item=>(
                        <ul>
                          <Link to={`/productdetails/${item.id}`}
                          onClick={()=>{
                            setInput([])
                            setSearch([])
                          }}
                          > <li className='py-2 font-pop font-semibold text-base text-white'>{item.title}</li></Link>
                        </ul>
                        ))
                       }
                   </div>
                   }

                  <Flex className='gap-x-5'>
                     <IoIosHeartEmpty className='text-2xl' />
                    <IoCartOutline className='text-2xl' />
                  </Flex>



                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navber
