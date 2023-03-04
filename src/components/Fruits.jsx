import React from 'react'
import Fruit from './Fruit'

const Fruits = () => {
  return (
    <div className='w-full mt-2'>
        <div className='text-center'>
            <h4 className='font-bold text-4xl'>Fresh Fruits</h4>
            <p className='mt-2'>There are many variations of passages of Lorem Ipsum available, but the majority have</p>   
        </div>
        <div className='px-4 max-w-[1145px] mx-auto '>
            <Fruit
            title="Orange"
            alt="Orange img"
            src="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page279/tropiko/images/orange.png"
            />
            <Fruit
            title="Graves"
            alt="Graves img"
            src="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page279/tropiko/images/grapes.png"
            />
            <Fruit
            title="Gauve"
            alt="Gauve img"
            src="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page279/tropiko/images/gauva.png"
            />
        </div>
    </div>
  )
}

export default Fruits