import { useDispatch, useSelector } from "react-redux"
import { increment } from "../slices/counterSlice"

const Signup = () => {
   let dispatch=useDispatch()
  let data=useSelector((state)=>state.count.value)
  return (
    <div>
      <h2>Count {data}</h2>
      <button onClick={()=>dispatch(increment(5))}>increment</button>
    </div>
  )
}

export default Signup