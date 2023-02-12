import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const createDigits = () => {
    const digits = []

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i}>{i}</button>
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
        <div className="buttons mt-4 bg-1btns h-[80%] w-full rounded">
          {createDigits()}
        </div>
      </div>
    </div>
  )
}

export default App
