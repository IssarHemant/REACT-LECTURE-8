import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName]=useState("Hemant")
  const [form, setForm]=useState({email:"",phone:""})

  const handleClick=()=>{
    alert("Hey I am clicked...")
  }
  
  // const handleMouseOver=()=>{
  //   alert("Hey I am hovered...")
  // }

  // const handleChange=(e)=>{
  //   setName(e.target.value)
  // }

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="container">
        <button onClick={handleClick}>Click Me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red box
      </div> */}
      {/* <input type="text" value={name} onChange={handleChange}/> */}
      <input type="text" name="email" value={form.email} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone} onChange={handleChange}/>
    </>
  )
}

export default App
