//세션스토리지에 저장되기 때문에 새로고침해도 갱신이 안된다 
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const { value } = useSelector(state => state.persistedReducer.value);
  const { count } = useSelector(state => state.persistedReducer.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <div>
          value : {value}
        </div>
        <button onClick={() => dispatch({type:'INCREMENT'})}>+</button>
        <button onClick={() => dispatch({type:'DECREMENT'})}>-</button>
        <button onClick={() => dispatch({type:'RESET'})}>RESET</button>
        <div>
          count : {count}
        </div>
        <button onClick={() => dispatch({type:'PUSH'})}>UP</button>
    </div>
  );
}

export default App;
