import logo from './logo.svg';
import './App.css';
import Subject from "./Subject";

function App() {
  const subjects = [
    {key:'js', text:'JavaScript'},
    {key:'java', text:'Java'},
    {key:'jq', text:'jQuery'},
    {key:'hc', text:'HTML/CSS'},
    {key:'spring', text:'Spring Framework'},
  ]


  return (
    <div className="App">
      <select name="subject">
        <Subject subjects = {subjects}/>
      </select>
    </div>
  );
}

export default App;
