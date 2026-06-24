import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import RootLayout from "../layouts/RootLayout"
import loginImg from "../assets/loginImage.png"
import Heading from "../components/Heading"
import Button from "../components/Button"
import { useForm } from "react-hook-form";



const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
<Container>
  <Flex className="pt-15 items-center justify-between gap-10 px-4 pt-15 pb-[140px]">
  <div className="w-1/2">
    <Image src={loginImg}>
    </Image>
  </div>
  <div className="w-1/2 pl-[129px]">

<Heading text="Login to Exclusive"></Heading>
<p className="font-pop text-base font-regular pt-6 pb-12"> Enter your details below </p>


<form onSubmit={handleSubmit(onSubmit)} className="space-y-6"/>

<div className="flex flex-col pb-10 gap-10">
<div>
  <input type="email" className="w-full border-b border-gray-300 outline-none py-3 placeholder:text-gray-400 focus:border-black transition-all duration-300" placeholder="Email or Phone Number"
        {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
/>

   {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
</div>
<div>
  <input type="password" className="w-full border-b border-gray-300 outline-none py-3 placeholder:text-gray-400 focus:border-black transition-all duration-300" placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}/>
                   {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
</div>
</div>
<div className="flex items-center justify-center pt-2">
  <Button className="" text="Login" type="submit"></Button>
  <a href="" className="pl-[87px] text-base font-regular font-pop text-primary">Forget Password?</a>
</div>
  </div>
  </Flex>
</Container>
  )
}

export default Login
