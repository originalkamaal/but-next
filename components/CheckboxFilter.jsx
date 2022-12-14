import React, { useState } from 'react'

const CheckboxFilter = ({ handleChange, state, title }) => {

    const handleCheckChange = (item, isChecked) => {

        let arr = [...state];
        arr.forEach(el => {
            if (el.value == item.value) {
                el.checked = isChecked;
            }
        })
        handleChange(arr);
    }
    const resetFilter = () => {
        let arr = [...state];
        arr.forEach(el => {
            el.checked = false;
        })
        handleChange(arr);

    }

    return (
        <div className="p-4 w-full">
            <div className='flex justify-between items-center w-full'>

                <div className="pb-2 font-bold text-md">{title}</div>
                {state.length > 0 &&
                    <div className='text-xs text-blue-500 cursor-pointer hover:underline' onClick={resetFilter}>Reset</div>
                }
            </div>
            {state.map((k, i) => {
                return <div className="space-x-3 form-check" key={i}>
                    <input
                        checked={k.checked}
                        className="form-check-input appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        type="checkbox"
                        onChange={(e) => handleCheckChange(k, e.target.checked)}
                        value={k.value}
                    />
                    <label className="">{k.label}</label>
                </div>
            })}

        </div>
    );
}

export default CheckboxFilter