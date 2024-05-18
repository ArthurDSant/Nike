import React from 'react'
import { BsBag } from "react-icons/bs"; 

const BagButton = ({onCLickBagButton}) => {

  return (
    <div>
      <div onClick={onCLickBagButton} className="bagPosition">
        <div className="bagDiv">
          <BsBag size={22}/>
        </div>
      </div>
    </div>
  )
}

export default BagButton
