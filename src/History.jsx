import React from 'react'

const History = ({history, clearHistory}) => {
    return (
        <div className="w-2/3 h-full absolute bg-1hstry top-0 right-0 flex flex-col pt-28 px-[10px] text-[20px] text-white pb-2">

            <div className="bg-1screen mb-2 rounded p-2 flex justify-center" onClick={clearHistory}>Clear History</div>
            <div className="bg-1screen rounded p-2 flex justify-start flex-col h-full ">
                {history.map((el, indx) => (
                     <span className="bg-1btnsbg text-1btns rounded px-3 py-1 text-xl my-1 flex justify-end" key={indx}>
                        {el}
                     </span>
                ))}
               
            </div>
        </div>
    )
}

export default History