import React from 'react'

const History = ({history, clearHistory, theme}) => {
    return (
        <div className={`
        ${theme === 1 ? 'bg-1hstry' : null} ${theme === 2 ? 'bg-2delbtn' : null} ${theme === 3 ? 'bg-3delbtn' : null}
        w-[300px] h-full absolute bg-1hstry top-0 right-0 flex flex-col pt-28 px-[10px] text-[20px] text-white pb-2`}>

            <div className={`
            ${theme === 1 ? 'bg-btns ' : null} ${theme === 2 ? 'bg-2btns text-2text' : null} ${theme === 3 ? 'bg-3screen text-3text' : null}
            bg-1screen mb-2 rounded p-2 flex justify-center`} onClick={clearHistory}>Clear History</div>
            <div className={`
            ${theme === 1 ? 'bg-btns text-1tcolor' : null} ${theme === 2 ? 'bg-2btns text-2text' : null} ${theme === 3 ? 'bg-3screen text-3text' : null}
            bg-1screen rounded p-2 flex justify-start flex-col h-full overflow-y-auto`}>
                {history.map((el, indx) => (
                     <span className={`
                     ${theme === 1 ? 'text-1btns' : null} ${theme === 2 ? 'text-2text' : null} ${theme === 3 ? 'text-3text bg-3btnsbg' : null}
                     bg-1btnsbg text-1btns rounded px-3 py-1 text-xl my-1 flex justify-end" key={indx}`}>
                        {el}
                     </span>
                ))}
               
            </div>
        </div>
    )
}

export default History