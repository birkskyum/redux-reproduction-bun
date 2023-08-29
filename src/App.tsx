import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="App" role="main">
      <article className="App-article">
        <img src={"/bunlogo.svg"} className="App-logo" alt="logo" />
        <div style={{ height: "30px" }}></div>
        
        <Counter />
      </article>
    </div>
  );
}

export default App;
