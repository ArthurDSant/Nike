import { IoIosArrowDown } from "react-icons/io"; 
import React from 'react'

const Select = ({title, options, QTYSIZE, onChange, value}) => {
  return (
    <div className="relative text-black">
      <select
        onChange = {(e) => onChange(e.target.value)}
        value={value || ''}
        className={`qtySize ${QTYSIZE}`}>
        <option value='' disable hidden>
          {title}
        </option>
        {options.map(option => 
          <option value={option} key={option}>{option}</option>
        )}
      </select>
      <div className="arrowDown">
        <IoIosArrowDown />
      </div>
    </div>
  )
}

export default Select
