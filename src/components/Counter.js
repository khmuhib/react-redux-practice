
import {useDispatch,useSelector} from 'react-redux';
import {decrement,increment} from '../redux/state/counter/counterSlice';


export default function Counter() {
    const count = useSelector ((state) => state.counter.value);
    const nameList = useSelector ((state) => state.counter.name);
    const dispatch = useDispatch();
    
  return (
    <div>
      <button onClick={()=> {dispatch(increment())}} className='btn btn-primary'>+</button>
      <h1 className='d-inline'>{count}</h1>
      <button onClick={()=>{dispatch(decrement())}} className='btn btn-danger'>-</button>
      {nameList.map((item)=>{
        return (
          <div key={item.id}>{item}</div>
        )
      })}
    </div>
  )
}
