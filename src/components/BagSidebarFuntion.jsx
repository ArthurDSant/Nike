import React from 'react'

const BagSidebar = ({children, isOpen, onClickClose}) => {
  return (
    <div className='dark:text-white'>
      <div className={`bagSideBar ${isOpen ? 'translate-x-0': 'translate-x-full'}`}
      >
        <button onClick={onClickClose} className='bagButton'>
          X
        </button>
        {children} 
      </div>
      {isOpen && <div className='bagSidebarShadow -z-1'/>}
    </div>
  )
}

export default BagSidebar
