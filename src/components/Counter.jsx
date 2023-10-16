import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment, reset, incrementByAmount} from '../redux/counterSlice'
import {Button}  from 'react-bootstrap'
const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state =>state.counterReducer.count)
  return (
   
    <>
        <div className='d-flex align-items-center mt-5 justify-content-center w-100'>
           
            <div className='border p-5 text-center rounded' >
                <h1>{count}</h1>
                <div>
            <Button onClick={()=>dispatch(increment())} className='m-1' variant="success">Increment</Button>
            <Button onClick={()=>dispatch(decrement())} className='m-1'  variant="warning">Decrement</Button>
            <Button onClick={()=>dispatch(reset())} className='m-1'  variant="danger">Reset</Button>
            </div>
            <Button onClick={()=>dispatch(incrementByAmount(5))} className='m-1'  variant="info">IncrementByAmount</Button>
            </div>
        </div>

    </>
  )
}

export default Counter