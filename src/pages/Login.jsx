import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import loginImg from '../assets/loginImage.png'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

const Login = () => {
  const [showPasswordIcon, setShowPasswordIcon] = useState(false)
  const [showPassword, setShowPassword] = useState('password')

  const auth = getAuth()
  const navigate = useNavigate()

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [emailError, setEmailError] = useState('')
  let [passwordError, setPasswordError] = useState('')
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
        })
    }
  }

  const handleShowPassword = () => {
    setShowPasswordIcon(!showPasswordIcon)
    setShowPassword(showPassword === 'password' ? 'text' : 'password')
  }

  return (
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
            <a
              href=""
              className="pl-[87px] text-base font-regular font-pop text-primary"
            >
              Forget Password?
            </a>
          </div>
        </div>
      </Flex>
    </Container>
  )
}

export default Login
