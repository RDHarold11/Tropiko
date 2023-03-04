import React from 'react'

const Banner = () => (
    <div className=' bg-[#F7F7F7] w-full py-40'>
        <div className='grid items-center justify-between gap-3 md:grid-cols-2 max-w-[1145px] mx-auto px-2 '>
            <div className='max-w-[500px]'>
                <h2 className=' text-6xl font-bold'>Welcome to Our Fuits Shop</h2>
                <p className='my-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <div className='mt-5'>
                    <button className='uppercase bg-[#FC5D35] text-white py-3 px-5 mr-4' >shop now</button>
                    <button className='uppercase bg-black text-white py-3 px-5 ' >contact us</button>
                </div>
            </div>
            <div>
                <img className=' w-[480px]' src="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page279/tropiko/images/slide-img.png" alt="" />
            </div>
        </div>
    </div>
)

export default Banner