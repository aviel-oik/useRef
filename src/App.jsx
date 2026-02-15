import { useState } from 'react'
import './App.css'
import Input from './components/input'
import ClearInput from './components/clearInput'
import ClearWithRef from './components/ClearWithRef'

function App() {

  const [inp, setInp] = useState("")

  const clear = () => {
    setInp("")
  }

  return (
    <>
      {/* <Input onChange={setInp} value={inp}/>
      <ClearInput onClick={clear}/> */}
      <ClearWithRef />
    </>
  )
}

export default App


