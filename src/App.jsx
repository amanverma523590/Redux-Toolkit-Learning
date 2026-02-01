import { useDispatch, useSelector } from "react-redux"
import { decrement, ifive, increment, reset } from "./slice/slice";


function App() {

  const dispatch = useDispatch();
  const counts = useSelector((state)=>state.counter.value);

  function handleIncrement(){
    dispatch(increment())
  }
  function handleDecrement(){
    dispatch(decrement())
  }
  function handleReset(){
    dispatch(reset())
  }
  function ib5(){
    dispatch(ifive(10))
  }

  return (
    <div>
      <h1>{counts}</h1>
      <button onClick={handleIncrement} className="btn btn-warning">Increment</button>
      <button onClick={handleDecrement} className="btn btn-primary mx-2">Decrement</button>
      <button onClick={handleReset} className="btn btn-danger mx-2">Reset</button>
      <button onClick={ib5} className="btn btn-secondary mx-2">Ib5</button>
    </div>
  )
}

export default App
