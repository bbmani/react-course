import logo from './logo.svg';
import './App.css';
import Jokes from './components/Jokes';

function App() {
  return (
    <div>
      <Jokes setup="first setup" punchline="first punchline"/>
      <Jokes setup="second setup" punchline="second punchline"/>
    </div>
  );
}

export default App;
