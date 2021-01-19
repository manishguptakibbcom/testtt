import logo from './logo.svg';
import './App.css';

function App() {
  async function connect2QB(e) {
    // try{
    //   const response = await fetch("");
    //   console.log(response.text());
    //   const data = await response.text();
    //   console.log(data)
    //   //https://jsonplaceholder.typicode.com/todos/1
    //   console.log('The link was clicked.');
    // }catch(e){
    //   console.log(e);
    // }
    fetch("")
        .then(response => response.text())
        .then((response) => {
            console.log(response)
        })
        .catch(err => console.log(err)) 
  }
  return (
    <div className="App">
      <button onClick={connect2QB}>
        Activate Lasers
      </button>
    </div>
  );
}

export default App;
