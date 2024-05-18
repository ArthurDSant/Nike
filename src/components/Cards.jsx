import React from 'react'

export function Card ({item, onClick}) {
  return (
    <div
      onClick={() => onClick(item)} 
      className={`${item.className} card`}>
      <div className='p-8'>
        <div className='cardTitle'>{item.title}</div>
        <div className='cardShop'>SHOP NOW +</div>
      </div>
      <div>
        <img src={item.src} className='cardImg'/>
      </div>
    </div>
  )
}

