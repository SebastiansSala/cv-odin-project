import React from 'react'
import Logo from '../Logo'

const Header = () => {

    return(
        <header className='h-14 w-full flex justify-between bg-black'>
            <Logo></Logo>
            <nav className='flex p-4 gap-10 list-none items-center text-2xl'>
                <li className='cursor-pointer text-white hover:tracking-widest transition-all duration-300'>Home</li>
                <li className='cursor-pointer text-white hover:tracking-widest transition-all duration-300'>Home</li>
                <li className='cursor-pointer text-white hover:tracking-widest transition-all duration-300'>Home</li>
            </nav>
        </header>
    )
}

export default Header