<<<<<<< HEAD
import { useState } from "react";
import Checkoutform from "../components/checkoutform";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaCheck } from "react-icons/fa";
import Image from "../components/Image";
import Check_one from "../assets/checkout1.png";
import Check_two from "../assets/checkout2.png";
import Bkash from "../assets/bkash.png";
import Nagad from "../assets/Nagad.png";
import Visa from "../assets/Visa.png";
import Mastercard from "../assets/Mastercard.png";
import Button from "../components/Button";

import Checkoutproduct from "../components/Checkoutproduct";
import Checkoutbilling from "../components/Checkoutbilling";
import Checkoutpayment from "../components/Checkoutpayment";

const Checkout = () => {
  let [checked, setchecked] = useState(true);
=======
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link, useParams } from 'react-router-dom'
import ListItem from '../components/ListItem'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Input from '../components/Input'
import Image from '../components/Image'
import Bkash from '../assets/bkash.png'
import Nagad from '../assets/Nagad.png'
import Button from '../components/Button'
import { useSelector } from 'react-redux'

const Checkout = () => {


  let [subTotal,setSubTotal] = useState("")



  const billingFields = [
    'First Name',
    'Company Name',
    'Street Address',
    'Apartment, Floor, etc. (Optional)',
    'Town / City',
    'Phone Number',
    'Email Address',
  ]

  let data = useSelector((state)=>state.cart.value)


  useEffect(()=>{
    let subTotal = 0
    data.map((item)=>{
      subTotal+=item.quantity+item.price
    })
    setSubTotal(subTotal)
  },[])

>>>>>>> 1152e9f6587d0dc9e385b6ea37dcbbe6f72d2d33

  return (
    <section className="pb-35">
      <Container>
<<<<<<< HEAD
        <h4 className="font-pop text-sm font-normal pr-3 text-black/50">
          Account <span className="px-3">/</span>My Account{" "}
          <span className="px-3">/</span>Product <span className="px-3">/</span>
          View Cart <span className="px-3">/</span>
          <span className="text-black pl-1.75">CheckOut</span>
        </h4>
        <h2 className="font-inter font-medium text-4xl text-black pt-20 pb-12">
          Billing Details
        </h2>

        <Flex className={`gap-x-43.25`}>
          <div className="w-5/12">
            <Checkoutform text={`First Name`} required={true} />
            <Checkoutform text={`Company Name`} required={false} />
            <Checkoutform text={`Street Address`} required={true} />
            <Checkoutform
              text={`Apartment, floor, etc. (optional)`}
              required={false}
            />
            <Checkoutform text={`Town/City`} required={true} />
            <Checkoutform text={`Phone Number`} required={true} />
            <Checkoutform text={`Email Address`} required={true} />

            <Flex className="items-center gap-x-4">
              <FaCheck
                className={`text-xl p-0.5 inline-block ${checked ? " text-xl border-2 border-black bg-white text-black" : "bg-primary text-white text-xl"}`}
                onClick={() => setchecked(!checked)}
              />
              <p className="text-black font-pop font-normal text-base text-center">
                Save this information for faster check-out next time
              </p>
            </Flex>
          </div>

          <div className="w-7/12">
            <div className="w-7/12">
              {localStorage.getItem("cart") ? (
                JSON.parse(localStorage.getItem("cart")).map((item) => (
                  <Checkoutproduct
                    key={item.title}
                    item={item}
                    src={item.image}
                    title={item.title}
                    price={`$${item.price}`}
                    quantity={item.quantity}
                  />
                ))
              ) : (
                <p className="text-black font-pop font-normal text-base text-center">
                  No items in cart
                </p>
              )}
            </div>

            <div className="pb-8">
              <Checkoutbilling
                item={{
                  text: `Subtotal:`,
                  subtotal: localStorage.getItem("cart")
                    ? JSON.parse(localStorage.getItem("cart"))
                        .map((item) => (item.price * item.quantity).toFixed(2))
                        .reduce(
                          (total, amount) => total + parseFloat(amount),
                          0,
                        )
                        .toFixed(2)
                    : 0,
                }}
              />
              <Checkoutbilling
                item={{
                  className: `mt-4 mb-4`,
                  text: `Shipping:`,
                  subtotal: "5$",
                }}
              />
              <Checkoutbilling
                item={{
                  text: `Total:`,
                  subtotal: `$${(localStorage.getItem("cart") &&
                  JSON.parse(localStorage.getItem("cart")).length > 0
                    ? JSON.parse(localStorage.getItem("cart")).reduce(
                        (total, item) =>
                          total +
                          parseFloat(item.price) * parseInt(item.quantity),
                        0,
                      ) + 5
                    : 0
                  ).toFixed(2)}`,
                }}
              />
            </div>
            <div>
              <Checkoutpayment
                payment={`Bank`}
                src_one={Bkash}
                src_two={Visa}
                src_three={Mastercard}
                src_four={Nagad}
              />
              <Checkoutpayment payment={`Cash On Delievery`} />
            </div>
            <div className="flex gap-x-4 ">
              <input
                type="text"
                className="border rounded-sm w-75 border-black placeholder:pl-6 font-pop font-normal text-base text-black/50"
                placeholder="Coupon Code"
              />
              <Button text={`Apply Coupon`} />
=======
        <div className="py-20">
          <ul className="flex flex-wrap gap-2">
            <Link to="/">
              <ListItem text="Account" />
            </Link>
            /
            <Link to="/">
              <ListItem text="My Account" />
            </Link>
            /
            <Link to="/">
              <ListItem text="Product" />
            </Link>
            /
            <Link to="/">
              <ListItem text="View Cart" />
            </Link>
            /
            <ListItem text="CheckOut" />
          </ul>
        </div>
        <Heading text="Billing Details" className={`font-medium! pb-12`} />

        <Flex className="flex-col md:flex-row">

          <div className="md:w-1/2 flex flex-col">
            {billingFields.map((field, index) => (
              <div key={index} className="mx-auto md:mx-0">
                <label className="font-pop font-normal text-base text-black/40 pb-2 block">
                  {field}
                </label>
                <Input className="bg-input  md:w-4/5  mb-8" />
              </div>
            ))}
          </div>

          <div className="md:w-1/2 p-3 lg:p-0">

           {
            data.map(item=>(
                <div className="flex items-center justify-between mb-5">
              <div className="flex gap-x-4 items-center">
                <div>
                  <Image src={item.src} className="w-13 h-13" />
                </div>
                <p className="text-base font-normal font-pop text-black">
                 {item.title}
                </p>
              </div>
              <p className="text-base text-black font-pop font-normal">{item.price}</p>
            </div>

            ))
           }

            <div className="flex items-center justify-between border-b border-black/40 pb-4">
              <p className="text-base font-normal font-pop text-black">
                Subtotal
              </p>

              <p className="text-base text-black font-pop font-normal">{subTotal}</p>
            </div>

            <div className="flex items-center justify-between border-b border-black/40 py-4">
              <p className="text-base font-normal font-pop text-black">
                Shipping
              </p>

              {
                data.length < 1 ? 0 : <p className="text-base text-black font-pop font-normal">5$</p>

              }
>>>>>>> 1152e9f6587d0dc9e385b6ea37dcbbe6f72d2d33
            </div>

            <div className="flex items-center justify-between  pt-4">
              <p className="text-base font-normal font-pop text-black">
                Total:
              </p>

              {
                data.length < 1 ? 0 : <p className="text-base text-black font-pop font-normal">{subTotal+5}</p>
              }
            </div>

            <div className="flex justify-between pt-8">
              <div className="flex items-center gap-x-4">
                <Input type="radio" />
                <label htmlFor="">Bank</label>
              </div>
              <div className="flex items-center gap-5">
                <Image src={Bkash} className="w-15 h-7" />
                <Image src={Nagad} className="w-15 h-10" />
              </div>
            </div>

            <div className="flex gap-x-4 pt-8">
              <Input type="radio" />
              <label htmlFor="">Cash On Delevery</label>
            </div>
            <div className="flex gap-4 py-8">
              <Input
                placeholder="Coupon Code"
                className="border border-black/50 rounded w-1/2 lg:w-full"
              />
              <Button text="Apply Coupon" className="w-1/2 lg:w-full"/>
            </div>
              <Button text="Place Order" className="w-full"/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Checkout;
