import logo from './logo.svg';
import './App.css';
import Department from './Department';
import Employee from './Employee';

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
      <Department depts={department}/>
      <br/>
      <Employee emps={employee}/>
    </div>
  );
}

export default App;
