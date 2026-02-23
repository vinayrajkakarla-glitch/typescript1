import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const increment = ():void => {
  
    setCount(count + 1);
};
  return (
    <div>
      <h1>React + TypeScript - 2500031657- Vinay Kakarla</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default App;