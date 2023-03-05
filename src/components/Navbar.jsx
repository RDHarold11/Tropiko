import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const handleNavbar = () =>{
    setNavbar(!navbar)
  }

  return (
    <div className=" bg-[#F7F7F7] navbar w-full h-10">
        <nav className='max-w-[1145px]  mx-auto flex justify-between px-5 py-5'>
            <div className='flex items-center justify-between'>
                <img className='pr-2' src="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page279/tropiko/images/logo.png" alt="" />
                <span className='font-extrabold text-xl'>TROPIKO</span>
            </div>
            <ul className='justify-center hidden items-center md:flex'>
                <li className='px-8 cursor-pointer'>Home</li>
                <li className='px-8 cursor-pointer'>Fruits</li>
                <li className='px-8 cursor-pointer'>Services</li>
                <li className='px-8 cursor-pointer'>Contact Us</li>
                <button className='text-white uppercase bg-[#FC5D35] px-3 py-2 rounded'>Get a quote</button>
            
            </ul>
            <div onClick={handleNavbar} className='flex items-center md:hidden justify-center '>
                {
                    !navbar ? <AiOutlineMenu className='cursor-pointer ' size={25}></AiOutlineMenu> : <AiOutlineClose className='cursor-pointer ' size={25}></AiOutlineClose> 
                }
               
            </div>

            <div className={navbar ? 'fixed top-0 left-0 w-[67%] border-r h-full bg-black ease-in-out duration-700 text-white px-5 py-3 flex flex-col gap-4' : 'fixed left-[-100%]'}>
            <div className='py-5 px-3'>
                <img className='pr-2' src="https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page279/tropiko/images/logo.png" alt="" />
                <span className='font-extrabold text-xl'>TROPIKO</span>
            </div>
            <ul className=''>
                <li className='p-5 border-b hover:bg-[#FC5D35] border-gray-600 cursor-pointer'>Home</li>
                <li className='p-5 border-b hover:bg-[#FC5D35] border-gray-600 cursor-pointer'>Fruits</li>
                <li className='p-5 border-b hover:bg-[#FC5D35] border-gray-600 cursor-pointer'>Services</li>
                <li className='mb-5 p-5 border-b hover:bg-[#FC5D35] border-gray-600 cursor-pointer'>Contact Us</li>
                <button className='text-white w-[200px] bg-[#FC5D35] px-3 py-2 rounded'>Get a quote</button>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar