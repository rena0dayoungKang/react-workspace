import logo from './logo.svg';
import './App.css';
import PropTest from './PropTest';
import PropTest2 from './PropTest2';
import Person from './Person';

function App() {
  let perInfo = {name:'song', age:30, nick:'송송이'};
  return (
    <div>
      {/* <PropTest name={perInfo.name} age={perInfo.age}/>
      <PropTest2 per={perInfo}/> */}
      <Person per={perInfo}/>
    </div>
  );
}

export default App;
