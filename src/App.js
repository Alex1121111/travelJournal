import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import data from './components/data'

function App() {
  const cardElem = data.map(
    d =>{
      return(
        <Card 
        key = {d.id}
        {...d}
        />
      )
    }
  )
  return (
    <div className="App">
      <Header/>
      {cardElem}
    </div>
  );
}

export default App;
