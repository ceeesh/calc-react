import { useState } from 'react'
import historyBtn from './assets/ellipsis.png'
import History from './History';

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([])
  const [historyModal, setHistoryModal] = useState(false)
  const [theme, setTheme] = useState(1)

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

  const createDigits = () => {
    const digits = []

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i} 
        className={`
        ${theme === 1  ? 'bg-1btnsbg' : null} ${theme === 2  ? 'text-2text bg-1btnsbg' : null} ${theme === 3  ? 'text-3text bg-3btnsbg shadow-3shd' : null}
        shadow-1shd max-w-[80px] max-h-[50px] text-center flex justify-center items-center h-full w-full m-auto rounded text-[32px]`}>{i}</button>
      )
    }
    return digits
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
    setHistory(prevState => [...history, `${calc} = ${result}`])
  }

  const reset = () => {
    setCalc('')
    setResult('')
  }

  const delLast = () => {
    if (calc === '') {
      return
    }

    const value = calc.slice(0, -1);

    setCalc(value)
  }

  const openHistory = () => {
    setHistoryModal(prevState => !prevState)
  }

  const clearHistory = () => {
    setHistory([])
  }

  const changeTheme = (themeNum) => {
    if (themeNum === 1) {
      setTheme(themeNum)
    } else if (themeNum === 2) {
      setTheme(themeNum)
    } else {
      setTheme(themeNum)
    }
  }

  return (
    <div
      className={`${theme === 1 ? 'bg-1blue' : null} ${theme === 2 ? 'bg-2back' : null} ${theme === 3 ? 'bg-3back' : null} 
    w-full h-screen flex justify-center items-center`}>

      <div
        onClick={openHistory}
        className={`
        ${theme === 1 ? 'bg-1screen' : null} ${theme === 2 ? 'bg-2delbtn' : null} ${theme === 3 ? 'bg-3delbtn' : null}
        absolute top-8 right-0  rounded-full shadow-2xl shadow-black sh mr-5 z-50 cursor-pointer`}>
        <img
          src={historyBtn}
          className="w-[2.5rem]" />

      </div>

      <div
        className="container max-w-[450px] h-[550px] flex flex-col items-center p-[15px]">
        <header
          className="header flex justify-between h-[10%] w-full">
          <h1
            className={`text-[24px]
            ${theme === 1 ? 'text-white' : null} ${theme === 2 ? 'text-2text' : null} ${theme === 3 ? 'text-3text' : null}`}>
            calc
          </h1>

          <div
            className={`theme grid grid-rows-[20px_minmax(20px,_1fr)] grid-cols-[60px_minmax(60px,_1fr)] 
          ${theme === 1 ? 'text-white' : null} ${theme === 2 ? 'text-2text' : null} ${theme === 3 ? 'text-3text' : null}`}>

            <span
              className="flex text-[12px] col-start-1 col-end-2 row-start-2 row-end-2 justify-center items-center font-light">
              THEME
            </span>

            <div
              className="theme_number text-[11px] col-start-2 col-end-2 row-start-1 row-end-2 flex items-center justify-center tracking-[0.3rem] font-light">
              1 2 3
            </div>

            <div
              className={`
              ${theme === 1 ? 'bg-1screen' : null} ${theme === 2 ? 'bg-2btns' : null} ${theme === 3 ? 'bg-3btns' : null}
              check_theme flex justify-center items-center rounded-[20px] bg-1screen col-start-2 col-end-2 row-start-2 row-end-2`}>

              <div
                className={`ball  w-[15px] h-[15px] absolute rounded-full z-0 transition-all 
              ${theme === 1 ? 'translate-x-[-1rem] bg-1ball' : null} ${theme === 2 ? 'translate-x-0 bg-1ball' : null} ${theme === 3 ? 'translate-x-[1rem] bg-3eql' : null}`}>
              </div>

              <div onClick={() => changeTheme(1)} className="theme-1 w-full h-full z-0"></div>
              <div onClick={() => changeTheme(2)} className="theme-2 w-full h-full z-0"></div>
              <div onClick={() => changeTheme(3)} className="theme-3 w-full h-full z-0"></div>
            </div>

          </div>
        </header>

        <div
          className={`screen h-[20%] w-full mt-4 rounded flex justify-end items-center px-[10px] text-[32px] 
        ${theme === 1 ? 'text-white bg-1screen' : null} ${theme === 2 ? 'text-2text bg-2screen' : null} ${theme === 3 ? 'text-3text bg-3screen' : null}`}>
          {result ? <span className="text-neutral-700 text-xl mr-2">({result})</span> : ''} {calc || '0'}
        </div>

        <div
          className={`buttons mt-4  h-[80%] w-full rounded grid p-[12px] grid-cols-4 grid-rows-5 text-1tcolor text-[36px] 
        ${theme === 1 ? 'bg-1btns' : null} ${theme === 2 ? 'bg-2btns' : null} ${theme === 3 ? 'text-3text bg-3btns' : null}`}>

          <div
            className="numbers grid grid-cols-3 grid-rows-3 col-start-1 col-end-4 row-start-1 row-end-4 p-[5px] gap-[10px]">
            {createDigits()}
          </div>

          <div
            className={`
            ${theme === 1  ? '' : null} ${theme === 2  ? 'text-2text' : null} ${theme === 3  ? 'text-3text' : null}
            symbols1 flex justify-center items-center flex-col col-start-4 col-end-5 row-start-1 row-end-5 p-[5px] gap-[15px] mt-[-3.5px]`}>

            <button onClick={delLast}
              className={`max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full text-[22px] rounded text-white 
            ${theme === 1 ? 'bg-1delbtn shadow-1dshd' : null} ${theme === 2 ? 'bg-2delbtn shadow-2delshd' : null} ${theme === 3 ? 'bg-3delbtn shadow-3shd' : null}`}>
              DEL
            </button>

            <button onClick={() => updateCalc('+')}
              className={`
              ${theme === 1  ? 'bg-1btnsbg' : null} ${theme === 2  ? ' bg-1btnsbg' : null} ${theme === 3  ? ' bg-3btnsbg shadow-3shd' : null}
              shadow-1shd max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]`}>
              +
            </button>
            <button onClick={() => updateCalc('-')}
              className={`
              ${theme === 1  ? 'bg-1btnsbg' : null} ${theme === 2  ? ' bg-1btnsbg' : null} ${theme === 3  ? ' bg-3btnsbg shadow-3shd' : null}
              shadow-1shd max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]`}>
              -
            </button>
            <button onClick={() => updateCalc('*')}
              className={`
              ${theme === 1  ? 'bg-1btnsbg' : null} ${theme === 2  ? ' bg-1btnsbg' : null} ${theme === 3  ? ' bg-3btnsbg shadow-3shd'  : null}
              shadow-1shd max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]`}>
              x
            </button>
          </div>

          <div
            className={`
            ${theme === 1  ? '' : null} ${theme === 2  ? 'text-2text' : null} ${theme === 3  ? 'text-3text' : null}
            ml-1 symbols2 flex col-start-1 col-end-4 row-start-4 row-end-5 gap-[19px] p-[5px]`}>
            <button onClick={() => updateCalc('.')}
              className={`
              ${theme === 1  ? 'bg-1btnsbg' : null} ${theme === 2  ? 'bg-1btnsbg' : null} ${theme === 3  ? ' bg-3btnsbg shadow-3shd' : null} 
              shadow-1shd max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]`}>
              .
            </button>
            <button onClick={() => updateCalc('0')}
              className={`${theme === 1  ? 'bg-1btnsbg' : null} ${theme === 2  ? ' bg-1btnsbg' : null} ${theme === 3  ? ' bg-3btnsbg shadow-3shd' : null} 
              shadow-1shd max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]`}>
              0
            </button>
            <button onClick={() => updateCalc('/')}
              className={`${theme === 1  ? 'bg-1btnsbg' : null} ${theme === 2  ? ' bg-1btnsbg' : null} ${theme === 3  ? ' bg-3btnsbg shadow-3shd' : null} 
              shadow-1shd max-w-[80px] max-h-[50px] text-center flex justify-center items-center w-full h-full bg-1btnsbg rounded text-[32px]`}>
              /
            </button>
          </div>

          <div
            className="functions flex col-start-1 col-end-5 row-start-5 row-end-6 gap-[10px] 5-[5px] justify-between items-center mx-2">
            <button onClick={reset}
              className={` max-w-[180px] w-full h-full max-h-[50px] rounded m-auto text-center flex justify-center items-center text-white text-[22px] 
            ${theme === 1 ? 'bg-1delbtn shadow-1dshd' : null} ${theme === 2 ? 'bg-2delbtn shadow-2delshd' : null} ${theme === 3 ? 'bg-3delbtn shadow-3shd' : null}`}>
              RESET
            </button>
            <button onClick={calculate}
              className={`
              ${theme === 1 ? 'bg-1eql' : null} ${theme === 2 ? 'bg-2eql' : null} ${theme === 3 ? 'text-white bg-3eql shadow-3eqlshd' : null} 
              shadow-2eshd max-w-[180px] w-full h-full max-h-[50px] rounded m-auto text-center flex justify-center items-center text-white text-[22px]`}>
              =
            </button>
          </div>

        </div>
      </div>
      {historyModal && (<History history={history} clearHistory={clearHistory} theme={theme} />)}
    </div>
  )
}

export default App
