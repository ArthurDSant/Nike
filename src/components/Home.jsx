 import React, { useState } from 'react'
import  Select  from './Select';
import { RxDoubleArrowDown } from "react-icons/rx";

import { QTY, SIZES } from '../services/constant';

const Home = ({shoe, onClickToAdd}) => {
  const [form,setform] = useState({qty: null, size: null});

  return (
    <div className="homeContainer">
      <div className='textsAndImg'>
        <div className='imgSize'>
          <div className='imgBg'>
              <img src={shoe.src} className='animate-float' />
          </div>
        </div>
        
        <div className='homeTexts'>
          <div class='homeTitle'>
              <h1>
                {shoe.title}
              </h1>
          </div>
          <div className='homeDescription'>
              {shoe.description}
          </div>

          <div className='flex space-x-6 items-center'>
            <div className='homePrice'>
            {shoe.price} $
            </div>
            <Select 
              value={form.size}
              onChange={(size) => setform({...form, size})} 
              title={'SIZE'} 
              options={SIZES}
            />
            <Select 
              value={form.qty}
              onChange={(qty) => setform({...form, qty})} 
              title={'QTY'} 
              options={QTY}
            />
          </div>

          <div className='lg:space-x-10 lg:flex items-center'>
              <button 
                onClick={() => 
                onClickToAdd(shoe, form.qty, form.size)} 
                className='AddToBag'>
                  Add to bag
              </button>
              <a href="https://www.nike.com.br/sc/sportswear-tenis-nike-airmax" className='viewDetails  wrap-nowrap' target='_blank'>
                  View details
              </a>
              <p className="invisible lg:visible md:flex-center font-bold md:p-4 lg:text-4xl lg:mt-0 animate-float">
                <RxDoubleArrowDown />
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
