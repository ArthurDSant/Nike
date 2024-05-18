import React from 'react'
import BagItem from './BagItems'

const BagForSidebar = ({ bagItems, onClickRemove }) => {
  
  return (
    <div>
      <h2 className='bagTitle'>
        Bag
      </h2>
      <ul className='space-y-5'>
        {bagItems.map((bagItem) => (
          <li key={bagItem.product.id}>
            <BagItem 
              item={bagItem}
              onClickRemove={onClickRemove}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BagForSidebar
