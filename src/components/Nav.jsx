import { useState } from "react";
import NikeLogo from '../../public/assets/nike-logo.svg?react'
import { RxHamburgerMenu } from "react-icons/rx";


const ROUTES = ['Home','Products','Pricing' ,'Services']
function Nav() {
  const [isMobileMenuShown, setisMobileMenuShown] = useState(false)
  
  return (
    <>
      <nav className='nav'>
        <a href='#'>
          <NikeLogo className='nikeLogo' />
        </a>

        <button
        onClick={() => setisMobileMenuShown(!isMobileMenuShown)} 
        className='mobileButton'>
          <RxHamburgerMenu size={25} />
        </button>
        
        <div className={`${
            !isMobileMenuShown && 'hidden'
            } w-full lg:w-auto lg:block`}
        >
          <ul className='menuUl'>
            {ROUTES.map((route, i) => {
              return<li className={`menuLi ${
                i===0 
                  ? 'homeMobile'
                  : 'homeDesk'
              } `} 
              // ${(i==3 || i==4) && 'lg:text-white'}
              key={route}>{route}
              </li>
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
