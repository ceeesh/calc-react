import { useState } from 'react'

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.']

  const updateCalc = (value) => {
    if (ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return
    }

    setCalc(prevState => prevState + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const reset = () => {
    setCalc('')
    setResult('')
  }

  const delLast = () => {
    if(calc === '') {
      return
    }

    const value = calc.slice(0, -1);

    setCalc(value)
  }

  const createDigits = () => {
    const digits = []

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() =>  updateCalc(i.toString())} key={i} className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center h-full w-full bg-1btnsbg m-auto rounded text-[32px]">{i}</button>
      )
    }
    return digits
  }

  return (
    <div className="bg-1blue w-full h-screen flex justify-center items-center">
      <div className="container max-w-[450px] h-[550px] flex flex-col items-center p-[15px]">
        <header className="header flex justify-between h-[10%] w-full">
          <h1 className="text-[24px] text-white">calc</h1>

          <div>
            <span className="text-white">theme</span>
          </div>
        </header>
        <div className="screen bg-1screen h-[20%] w-full mt-4 rounded flex justify-end items-center text-white px-[10px] text-[32px]">
        {result ? <span className="text-neutral-700 text-xl mr-2">({result})</span> : ''} {calc || '0'}
        </div>
        <div className="buttons mt-4 bg-1btns h-[80%] w-full rounded grid p-[12px] grid-cols-4 grid-rows-5 text-1tcolor text-[36px]">

          <div className="numbers grid grid-cols-3 grid-rows-3 col-start-1 col-end-4 row-start-1 row-end-4 p-[5px] gap-[10px]">
            {createDigits()}
          </div>

          <div className="symbols1 flex justify-center items-center flex-col col-start-4 col-end-5 row-start-1 row-end-5 p-[5px] gap-[15px] mt-[-3.5px]">
            <button onClick={delLast} className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full text-[22px] rounded bg-1delbtn text-white">DEL</button>
            <button onClick={() =>  updateCalc('+')} className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]">+</button>
            <button onClick={() =>  updateCalc('-')} className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]">-</button>
            <button onClick={() =>  updateCalc('*')} className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]">x</button>
          </div>

          <div className="ml-1 symbols2 flex col-start-1 col-end-4 row-start-4 row-end-5 gap-[19px] p-[5px]">
            <button onClick={() =>  updateCalc('.')} className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]">.</button>
            <button onClick={() =>  updateCalc('0')} className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]">0</button>
            <button onClick={() =>  updateCalc('/')} className="max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]">/</button>
          </div>

          <div className="functions flex col-start-1 col-end-5 row-start-5 row-end-6 gap-[10px] 5-[5px] justify-between items-center mx-2">
            <button onClick={reset} className="max-w-[180px] w-full h-full max-h-[50px] rounded m-auto text-center bg-1reset flex justify-center items-center text-white text-[22px]">RESET</button>
            <button onClick={calculate} className="max-w-[180px] w-full h-full max-h-[50px] rounded m-auto text-center bg-1eql flex justify-center items-center text-white text-[22px]">=</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
