import { useCallback, useState } from 'react'
import './App.css'

function App() {
const [length, setlength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)

const [Password, setPaaaword] = useState("")

const passwordGenerator = useCallback( ()=> {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str +='!@#$%^&*()_+=-`'

  for (let i = 1; i <= array.length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass = str.charAt(char)
  }
  setPaaaword(pass)
}, [length, numberAllowed, charAllowed, setPaaaword])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
         <input type="text"
         value={Password}
         className='outline-none w-full py-1 px-3'
         placeholder='Password'
         readOnly
         
         />
      </div>
         </div>
    </>
  )
}

export default App
