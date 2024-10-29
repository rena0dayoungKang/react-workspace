import SubComponent from './SubComponent';

function App() {
  return (
    <div>
      <SubComponent 
        str="react" 
        num={30} 
        boolean={1===1} 
        obj={{react:'리액트', exam:100}}
        arr={[10,20,30]} 
        func={console.log('I am Function')}/>
    </div>
  );
}

export default App;
