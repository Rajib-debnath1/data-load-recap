import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos/Todos';
import Mobile from './components/Mobile/Mobile';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <Todos></Todos>
    </div>
  );
}

export default App;
