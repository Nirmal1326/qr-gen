import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import QR from "./QR"
function App() {
  // const [count, setCount] = useState(0)
  const [link,setLink]= useState("");
  const [items, setItems] = useState([]);
  const [filename,setfilename]= useState("");
  const [items2, setItems2] = useState([]);

  function handleChange(event){
    const newval=event.target.value;
    setLink(newval);
  }
  function handleChange2(event){
    const newval2=event.target.value;
    setfilename(newval2);
  }
  function addItem(){
    setItems((prevItems) => {
      return [...prevItems, link];
    });setLink("");
    setItems2((prevItems) => {
      return [...prevItems, filename];
    });setfilename("");
  }
  console.log(items,items2);

  return (
    <>
      <div>
      <input type="text" inputMode='url' onChange={handleChange} value={link}></input>
      <input type="text" inputMode='text' onChange={handleChange2} value={filename}></input> 
      <button onClick={addItem}>Generate</button>
      <QR/>
      </div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
