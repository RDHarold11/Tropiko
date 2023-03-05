import React from 'react'
import Service from './Service'

const Services = () => (
    <div className='w-full py-40'>
        <div className='text-center'>
            <h4 className='font-bold text-4xl'>Our Services</h4>
            <p className='mt-2'>There are many variations of passages of Lorem Ipsum available, but the majority have</p>   
        <div className='grid md:grid-cols-3 max-w-[1145px] mx-auto mt-20 gap-7 px-4'>
            <Service
            src="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page279/tropiko/images/card-item-1.png"
            alt="Orange img"
            title="Orange"
            />
            <Service
            src="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page279/tropiko/images/card-item-2.png"
            alt="Grapes img"
            title="Grapes"
            />
            <Service
            src="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page279/tropiko/images/card-item-3.png"
            alt="Gauva img"
            title="Gauva"
            />
        </div>
        <button className='mt-10 bg-black text-white py-3 px-7' >Read More</button>
        </div>
    </div>
)

export default Services