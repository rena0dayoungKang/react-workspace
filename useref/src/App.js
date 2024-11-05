import './App.css';
import { useRef } from 'react';

function App() {
  const elRef = useRef();
  return (
    <div className="App">
      <input type="text" ref={elRef}/>
      <button onClick={() => {alert(elRef.current.value)}}>Focus Input</button>
    </div>
  );
}

export default App;
