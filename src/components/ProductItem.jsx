import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({id,image,name,price}) => {

    const { currency } = useContext(ShopContext);

    console.log(name);

  return (
    // Here we can replace div by a Link react tag
    <div className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=''/>
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </div>
  )
}

export default ProductItem;
