import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Input from "../components/Input";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import Image from "../components/Image";
import SignUpBanner from "../assets/loginImage.png";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const auth = getAuth();
  const navigate=useNavigate()
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let lowercase = /(?=.*[a-z])/;
  let uppercase = /(?=.*[A-Z])/;
  let digit = /(?=.*\d)/;
  let special = /(?=.*[@$!%*?&])/;
  let minnumber = /[A-Za-z\d@$!%*?&]{6,}$/;

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); 
  };

  let handleCreateAccount = () => {
    if (!name) {
      setNameError("Enter your name");
    }
    if (!email) {
      setEmailError("Enter Your Email");
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter Valid Email");
    }
    if (!password) {
      setPasswordError("Enter Your password");
    }


    if (name && email && password){
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
         toast.success("Registration Successfully");
         console.log(userCredential.user);

         setTimeout(() => {
          navigate("/login")

         }, 2000);

        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);

         if(errorCode.includes("auth/email-already-in-use")){
          toast.error("Already Use")
         }


        });
    }
  };

  return (
    <section className="py-30">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Container>
        <Flex className="items-center">
          <div className="w-8/12 pr-10">
            <Image src={SignUpBanner} />
          </div>

          <div className="w-4/12">
            <h4 className="font-medium text-4xl text-black font-inter">
              Create an account
            </h4>
            <p className="font-normal font-pop text-base text-black pt-6">
              Enter your details below
            </p>

            <Input
              onChange={handleName}
              type="text"
              placeholder="Name"
              className="w-full outline-none border-b border-[#00000066] mt-10"
            />
            {nameError && (
              <p className="bg-red-500 py-2 text-white px-5 mt-2 rounded">
                {nameError}
              </p>
            )}
            <Input
              onChange={handleEmail}
              type="text"
              placeholder="Email or Phone Number"
              className="w-full outline-none border-b border-[#00000066] mt-10"
            />
            {emailError && (
              <p className="bg-red-500 py-2 text-white px-5 mt-2 rounded">
                {emailError}
              </p>
            )}
            <Input
              onChange={handlePassword}
              type="text"
              placeholder="Password"
              className="w-full outline-none border-b border-[#00000066] mt-10"
            />
            {passwordError && (
              <p className="bg-red-500 py-2 text-white px-5 mt-2 rounded">
                {passwordError}
              </p>
            )}

            <div className="mt-10 ">
              <div onClick={handleCreateAccount}>
                <Button text="Create Account" className="w-full" />
              </div>

              <div className="border border-[#00000066] w-full py-4 mt-4 mb-8 flex justify-center items-center gap-x-3">
                <FcGoogle className="text-2xl" />
                <button className=" text-base font-pop font-normal text-black ">
                  {" "}
                  Sign up with Google
                </button>
              </div>
              <p className="font-pop text-base font-normal text-[#00000070]">
                Already have account?{" "}
                <Link to='/login'>
                <span className="font-medium text-black underline pl-2 cursor-pointer">
                  Log in
                </span>
                </Link>
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Signup;
