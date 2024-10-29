import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
//App.js의 자식 Employee를 호출

function App() {
  
  let department = [  //select box 처리
    {id:10, name:"홍보부"},
    {id:20, name:"개발부"},
    {id:30, name:"영업부"}
  ];

  let employee = [    //table 처리
    {id:100, name:"홍길동", dept:10},
    {id:101, name:"김길동", dept:20},
    {id:102, name:"고길동", dept:30}
  ];

  return (
    <div>
      <Employee emps={employee} depts={department}/>
    </div>
  );
}

export default App;
