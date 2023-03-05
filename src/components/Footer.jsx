import React from 'react'
import {AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

const Footer = () => (
    <div className='w-full mx-auto pb-9'>
        <div className='max-w-[1145px] mx-auto grid gap-5 items-center justify-center grid-cols-2 px-7 md:grid-cols-4'>
            <div>
                <h3 className='text-2xl my-3'>Fruits</h3>
                <p className='max-w-[130px]'>randomised
                    words which
                    don't look even
                    slightly
                    believable. If you
                    are going to use
                    a passage of
                    Lorem Ipsum,
                </p>
            </div>
            <div>
                <h3 className='text-2xl my-3'>Services</h3>
                <p className='max-w-[130px]'>randomised
                    words which
                    don't look even
                    slightly
                    believable. If you
                    are going to use
                    a passage of
                    Lorem Ipsum,
                </p>
            </div>
            <div>
                <h3 className='text-2xl my-3'>List</h3>
                <p className='max-w-[130px]'>randomised
                    words which
                    don't look even
                    slightly
                    believable. If you
                    are going to use
                    a passage of
                    Lorem Ipsum,
                </p>
            </div>
            <div>
                <div>
                    <h3 className='text-2xl my-3'>Follow Us</h3>
                    <div className='flex'>
                    <AiFillFacebook size={27}></AiFillFacebook>
                    <AiFillTwitterCircle size={27}></AiFillTwitterCircle>
                    <AiFillLinkedin size={27}></AiFillLinkedin>
                    <AiFillInstagram size={27}></AiFillInstagram>
                    </div>
                </div>
                <div className='py-3'>
                    <input type="text" className='w-full border-b-2 p-2 mb-5 outline-none' placeholder='Subscribe Now'/>
                    <button className='bg-[#FC5D35] py-2 px-7 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
)
export default Footer