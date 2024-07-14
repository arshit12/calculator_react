import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
      e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result + Number(inputRef.current.value);
    });
  }; 
 
  function minus(e) { 
  	 e.preventDefault();
      const num = inputRef.current.value;
      console.log(parseFloat(num));
      setResult((result) => {
        return result - Number(inputRef.current.value);
      });
  };
 
  function times(e) { 
    e.preventDefault();
      const num = inputRef.current.value;
      console.log(parseFloat(num));
      setResult((result) => {
        return result * Number(inputRef.current.value);
      });
  }; 
 
  function divide(e) { 
    e.preventDefault();
      const num = inputRef.current.value;
      console.log(parseFloat(num));
      setResult((result) => {
        return result / Number(inputRef.current.value);
      });
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult((result) => result * 0);
      inputRef.current.value = 0;
  }; 
 console.log(result);
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <br/>
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput} className="btn1">reset Input</button> 
        <button onClick={resetResult} className="btn2">reset Result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
