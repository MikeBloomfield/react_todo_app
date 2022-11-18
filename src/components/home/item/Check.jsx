import React from 'react'
import { GiCheckMark } from 'react-icons/gi'


const Check = ({ isCompleted }) => {
    return (
        <button className={`border-2 rounded border-indigo-500 ${isCompleted ? 'bg-indigo-500' : ''} w-7 h-7 mr-4 flex items-center justify-center`}>
            {isCompleted &&
                <GiCheckMark className="text-white" size={20} />
            }
        </button>
    )
}

export default Check