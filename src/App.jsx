import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const createDigits = () => {
    const digits = []

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center h-full w-full bg-1btnsbg m-auto rounded">{i}</button>
      )
    }
    return digits
  }

  return (
    <div className="bg-1blue w-full h-screen flex justify-center items-center">
      <div className="container max-w-[450px] h-[550px] flex flex-col items-center p-[15px]">
        <header className="header flex justify-between h-[10%] w-full">
          <h1>calc</h1>

          <div>
            <span>theme</span>
          </div>
        </header>
        <div className="screen bg-1screen h-[20%] w-full mt-4 rounded">

        </div>
        <div className="buttons mt-4 bg-1btns h-[80%] w-full rounded grid p-[12px] grid-cols-4 grid-rows-5 text-1tcolor text-[36px]">

          <div className="numbers grid grid-cols-3 grid-rows-3 col-start-1 col-end-4 row-start-1 row-end-4 p-[5px] gap-[10px]">
            {createDigits()}
          </div>

          <div className="symbols1 flex flex-col col-start-4 col-end-5 row-start-1 row-end-5 p-[5px] gap-[15px] mt-1">
            <button className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full text-[22px] rounded bg-1delbtn text-white">DEL</button>
            <button className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded">+</button>
            <button className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded">-</button>
            <button className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded">x</button>
          </div>

          <div className="ml-1 symbols2 flex col-start-1 col-end-4 row-start-4 row-end-5 gap-[19px] p-[5px]">
            <button className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded">.</button>
            <button className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded">0</button>
            <button className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded">/</button>
          </div>
          
          <div className="functions flex col-start-1 col-end-5 row-start-5 row-end-6 gap-[10px] 5-[5px] justify-between items-center mx-2">
            <button className="max-w-[180px] w-full max-h-[50px] rounded m-auto text-center bg-1reset flex justify-center items-center text-white">RESET</button>
            <button className="max-w-[180px] w-full max-h-[50px] rounded m-auto text-center bg-1eql flex justify-center items-center text-white">=</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
