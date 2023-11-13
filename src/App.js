import "./App.css";
import User from "./components/User";

function App() {
  let num = 333;
  let str = "triple three";
  let bool = true;
  let obj = {
    name: "Maya",
    age: 27,
    ishuman: true,
  };

  return (
    <div className="App">
      <User num={num} str={str} bool={bool} obj={obj} />
    </div>
  );
}

export default App;
