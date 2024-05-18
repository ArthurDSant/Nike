import React from 'react'
import { Card } from './Cards'

const NewArrivalsSection = ({item, onClickCard}) => {
  return (
    <div className='cardSection'>
      <div className='flex-center'>
        <div className='newArrivels'>
          NEW ARRIVELS
        </div>
      </div>
      <div className='cardGrid'>
        {item.map((item) => (<Card key={item.id} item={item} onClick={onClickCard} />))}
      </div>
    </div>
  )
}

export default NewArrivalsSection
