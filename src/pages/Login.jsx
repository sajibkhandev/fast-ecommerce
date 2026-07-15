import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import loginImg from '../assets/loginImage.png'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { RxCross2 } from "react-icons/rx";
import { Audio } from 'react-loader-spinner'


const Login = () => {
  const [showPasswordIcon, setShowPasswordIcon] = useState(false)
  const [showPassword, setShowPassword] = useState('password')
  const [popup, setPopup] = useState(false)

  const auth = getAuth()
  const navigate = useNavigate()

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [emailError, setEmailError] = useState('')
  let [passwordError, setPasswordError] = useState('')
  let [resetEmail, setResetEmail] = useState('')
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  let handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  let handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  let handleLogin = () => {
    if (!email) {
      setEmailError('Enter Your Email')
    } else if (!emailRegex.test(email)) {
      setEmailError('Enter Valid Email')
    }
    if (!password) {
      setPasswordError('Enter Your password')
    }
    if (email && password && emailRegex.test(email)) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (userCredential.user.emailVerified) {
            toast.success('Login Successful')
            setTimeout(() => {
              navigate('/')
            }, 2000)
          } else {
            toast.error('Verify Your Email')
          }
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("invalid credential")
          }



        })
    }
  }

  const handleShowPassword = () => {
    setShowPasswordIcon(!showPasswordIcon)
    setShowPassword(showPassword === 'password' ? 'text' : 'password')
  }

  let handleSend = () => {

    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        setPopup(false)
        toast.success("Check Your Email for reset Password")

      })
      .catch((error) => {
        const errorCode = error.code;

      });

  }

  return (


    <section >

      <Container>
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
        <Flex className="pt-15 items-center justify-between gap-10 px-4 pt-15 pb-[140px]">
          <div className="w-1/2">
            <Image src={loginImg}></Image>
          </div>
          <div className="w-1/2 pl-[129px]">
            <Heading text="Login to Exclusive"></Heading>
            <p className="font-pop text-base font-regular pt-6 pb-12">
              {' '}
              Enter your details below{' '}
            </p>

            <div className="flex flex-col pb-10 gap-10">
              <div>
                <input
                  onChange={handleEmail}
                  type="email"
                  className="w-full border-b border-gray-300 outline-none py-3 placeholder:text-gray-400 focus:border-black transition-all duration-300"
                  placeholder="Email or Phone Number"
                />
                {emailError && (
                  <p className="bg-red-500 py-2 text-white px-5 mt-2 rounded">
                    {emailError}
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center">
                  <input
                    onChange={handlePassword}
                    type={showPassword}
                    className="w-full border-b border-gray-300 outline-none py-3 placeholder:text-gray-400 focus:border-black transition-all duration-300"
                    placeholder="Password"
                  />
                  <div onClick={handleShowPassword} className="cursor-pointer">
                    {showPasswordIcon ? (
                      <IoEyeOutline className="text-2xl" />
                    ) : (
                      <IoEyeOffOutline className="text-2xl" />
                    )}
                  </div>
                </div>
                {passwordError && (
                  <p className="bg-red-500 py-2 text-white px-5 mt-2 rounded">
                    {passwordError}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center  pt-2">
              <div onClick={handleLogin}>
                <Button className="" text="Login" type="submit"></Button>
              </div>
              <p onClick={() => setPopup(true)}
                className="pl-[87px] cursor-pointer text-base font-regular font-pop text-primary"
              >
                Forget Password?
              </p>
            </div>
          </div>
        </Flex>

      </Container>

      {
        popup &&
        <div className='z-50 fixed top-0 left-0 w-full h-screen bg-black/80 flex justify-center items-center '>
          <div className='relative w-[500px] py-16 px-10  bg-white rounded-md flex flex-col justify-center items-start gap-y-5'>
            <RxCross2 onClick={() => setPopup(false)} className='absolute top-5 right-5 text-2xl' />

            <h2 className='text-3xl text-black font-bold font-pop'>Forget Your Password!</h2>
            <p className='text-base  pt-6'>Enter Your Email to Reset Password:</p>
            <input onChange={(e) => setResetEmail(e.target.value)} className='py-1 px-2 border border-black/40 rounded w-full' type="text" />
            <div>
              <button onClick={() => setPopup(false)} className='py-2 px-5 bg-blue-500 text-white rounded mr-4'>Back to Login</button>
              <button onClick={handleSend} className='py-2 px-10 bg-blue-500 text-white rounded'>Send</button>
            </div>

          </div>
        </div>
      }
    </section>


  )
}

export default Login
