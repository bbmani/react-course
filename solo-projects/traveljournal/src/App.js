import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Data from "./Data"

function App() {
  const cards = Data.map(item => {
    return (
      <Home 
        key={item.key}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navigation />
      {cards}
    </div>
  );
}

export default App;
