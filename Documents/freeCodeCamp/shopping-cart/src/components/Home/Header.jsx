import React from 'react'
import Logo from './Logo'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = ({counter}) => {

    return(
        <header className='bg-gray-900 border-b w-full border-black h-14 mx-auto z-10 flex justify-between'>
            <Logo></Logo>
            <nav className='flex p-4 gap-10 list-none items-center text-2xl'>
                <li className='cursor-pointer text-white hover:tracking-widest transition-all duration-300'>Home</li>
                <li className='cursor-pointer text-white hover:tracking-widest transition-all duration-300'>Shop</li>
                <li className='cursor-pointer text-white hover:tracking-widest transition-all duration-300 -mr-9'><AiOutlineShoppingCart /></li>
                <li className='text-white'>{counter}</li>
            </nav>
        </header>
    )
}

export default Header