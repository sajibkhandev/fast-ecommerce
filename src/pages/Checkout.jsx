import { useState } from "react"
import Checkoutform from "../components/checkoutform"
import Container from "../components/Container"
import Flex from "../components/Flex"
import { FaCheck } from "react-icons/fa"
import Image from "../components/Image"
import Check_one from "../assets/checkout1.png"
import Check_two from "../assets/checkout2.png"
import Bkash from "../assets/bkash.png"
import Nagad from "../assets/Nagad.png"
import Visa from "../assets/Visa.png"
import Mastercard from "../assets/Mastercard.png"
import Button from "../components/Button"




import Checkoutproduct from "../components/Checkoutproduct"
import Checkoutbilling from "../components/Checkoutbilling"
import Checkoutpayment from "../components/Checkoutpayment"




const Checkout = () => {
  let [checked, setchecked] = useState(true)

  return (
    <section className="pt-20 pb-35">
      <Container>
        <h4 className="font-pop text-sm font-normal pr-3 text-black/50">Account <span className="px-3">/</span>My Account <span className="px-3">/</span>Product <span className="px-3">/</span>View Cart <span className="px-3">/</span><span className="text-black pl-1.75">CheckOut</span></h4>
        <h2 className="font-inter font-medium text-4xl text-black pt-20 pb-12">Billing Details</h2>
        
        <Flex className={`gap-x-43.25`}>
          <div className="w-5/12">
            <Checkoutform text={`First Name`} required={true} />
            <Checkoutform text={`Company Name`} required={false} />
            <Checkoutform text={`Street Address`} required={true} />
            <Checkoutform text={`Apartment, floor, etc. (optional)`} required={false} />
            <Checkoutform text={`Town/City`} required={true} />
            <Checkoutform text={`Phone Number`} required={true} />
            <Checkoutform text={`Email Address`} required={true} />

            <Flex className="items-center gap-x-4">
              <FaCheck className={`text-xl p-0.5 inline-block ${checked ? " text-xl border-2 border-black bg-white text-black" : "bg-primary text-white text-xl"}`} onClick={()=>setchecked(!checked)} />
              <p className="text-black font-pop font-normal text-base text-center">Save this information for faster check-out next time</p>
            </Flex>
          </div>


          <div className="w-7/12">
            <Checkoutproduct src={Check_one} text="LCD Monitor" amount="$650" />
            <Checkoutproduct src={Check_two} text="H1 Gamepad" amount="$1100" />
            <div className="pb-8">
              <Checkoutbilling text={`Subtotal:`} amount={`$1750`} />
              <Checkoutbilling className={`mt-4 mb-4`} text={`Shipping:`} amount={`Free`} />
              <Checkoutbilling text={`Total:`} amount={`$1750`} />
            </div>
            <div>
              <Checkoutpayment payment={`Bank`} src_one={Bkash} src_two={Visa} src_three={Mastercard} src_four={Nagad} />
              <Checkoutpayment payment={`Cash On Delievery`} />
            </div>
            <div className="flex gap-x-4 ">
              <input type="text" className="border rounded-sm w-75 border-black placeholder:pl-6 font-pop font-normal text-base text-black/50" placeholder="Coupon Code" />
              <Button text={`Apply Coupon`} />
            </div>
            <Button className={`mt-8`} text={`Place Order`} />
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Checkout
