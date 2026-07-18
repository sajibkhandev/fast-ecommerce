import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Input from "../components/Input";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import Image from "../components/Image";
import SignUpBanner from "../assets/loginImage.png";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Audio, DNA, ColorRing } from "react-loader-spinner";
const Signup = () => {
  const [showPasswordIcon, setShowPasswordIcon] = useState(false)
  const [showPassword, setShowPassword] = useState("password")
  const auth = getAuth();
  const navigate = useNavigate()
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
const [loader, setLoader] = useState(false);

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


    if (name && email && password) {
      setLoader(true)
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

          if (errorCode.includes("auth/email-already-in-use")) {
            toast.error("Email already in use");
          }
        })
        .finally(() => {
          setLoader(false);
        });
    }

  };


  const handleShowPassword = () => {
    setShowPasswordIcon(!showPasswordIcon)
    setShowPassword(showPassword === "password" ? "text" : "password")
  }

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
            <div className="flex items-center">
              <Input
                onChange={handlePassword}
                type={showPassword}
                placeholder="Password"
                className="flex-1 w-full outline-none border-b border-[#00000066] mt-10"
              />
              <div onClick={handleShowPassword} className="cursor-pointer">
                {
                  showPasswordIcon ? <IoEyeOutline className="mt-12 text-2xl" /> : <IoEyeOffOutline className="mt-12 text-2xl" />

                }
              </div>

            </div>

            {passwordError && (
              <p className="bg-red-500 py-2 text-white px-5 mt-2 rounded">
                {passwordError}
              </p>
            )}
            <div className="mt-10 ">
             <div onClick={!loader ? handleCreateAccount : undefined}>
  <Button
    className="w-full py-4 mt-4 mb-4 flex justify-center items-center gap-x-3"
    type="button"
    text={
      loader ? (
        <ColorRing
          visible={true}
          height="24"
          width="24"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      ) : (
        "Create Account"
      )
    }
  />
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
