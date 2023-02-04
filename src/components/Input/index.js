import React from 'react'

function Input(props) {
    const {placeholder, id, type, onChangeInput,label} = props
    return (
        <div className="mb-4">
            <span className="ml-1 block text-[12px] text-[#858D96]">
                {label}
            </span>
            <input
                className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChangeInput(e)}/>
        </div>
    )
}

export default Input