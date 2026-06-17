import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../slices/counterSlice"

const About = () => {
  let dispatch=useDispatch()
  let data=useSelector((state)=>state.count.value)

  
  return (
    <div>
        
        <h1>Counter {data}</h1>
        <button onClick={()=>dispatch(increment(10))}>Increment</button>
        <button onClick={()=>dispatch(decrement(10))}>Decrement</button>
        
    </div>
  )
}

export default About