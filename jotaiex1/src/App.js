import logo from './logo.svg';
import './App.css';
import { useAtom } from 'jotai';
import { countAtom } from './atoms';
import Account from './Account';

function App() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      {count}<br/>
      <Account/>
    </div>
  );
}

export default App;
