import PropsNode from "./PropsNode";

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <p>node transfer</p>
      <PropsNode> 
        {/* 컴포넌트에 태그 자체를 넘길 수 있는 PropsNodeㅛ */}
        <span>node from App.js</span>

      </PropsNode>
    </div>
  );
}

export default App;
