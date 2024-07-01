import React from 'react';

export function Card({ item, onClick }) {
  const handleClick = (item) => {
    onClick(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={() => handleClick(item)}
      className={`${item.className} card`}
    >
      <div className='p-8'>
        <div className='cardTitle'>{item.title}</div>
        <div className='cardShop'>SHOP NOW +</div>
      </div>
      <div>
        <img src={item.src} className='cardImg' />
      </div>
    </div>
  );
}

