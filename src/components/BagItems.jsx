import { CiTrash } from "react-icons/ci"; 
import Select from "./Select";
import { QTY, SIZES } from '../services/constant';

const BagItem = ({item : {product, qty, size}, onClickRemove}) => {
  return (
    <div className="bagItem">

      <div className='flex'>
        <div className='flex items-center'>
          <img 
            src={product.src} 
            className='h-24 mr-4'
          />
          <div className='space-y-2'>
            <div className='font-bold'>{product.title}</div>
            <div className='text-sm text-gray-400'>{product.description}</div>
          </div>
        </div>
        <div className='text-lg font-bold'>{product.price}$</div>
      </div>

      <div className="flex justify-around items-center">
        <div className="flex">
          <div className="mx-3">
            <div>SIZE</div>
            <Select 
              Value={size}
              options={SIZES}
              title={size}
              QTYSIZE={'py-1 px-4'}
            />
          </div>
          <div>
            <div>QTY</div>
            <Select 
              Value={qty}
              options={QTY} 
              title={qty} 
              QTYSIZE={'py-1 px-4'}
            />
          </div>
        </div>
        <div>
        <button 
          onClick={() => onClickRemove(product.id)} 
          className="mt-6">
          <CiTrash size={25}/>
        </button>
        </div>
      </div>

    </div>
  )
}

export default BagItem
