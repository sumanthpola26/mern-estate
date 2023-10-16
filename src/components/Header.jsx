
import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
        <header className=' bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-8xl mx-auto p-8'>
                <Link to='/' >
                <h1 className='font-bold text-sm sm:text-xl'>
                    <span className='text-slate-500'>Nest</span>
                    <span className='text-slate-700'>Rest</span>
                </h1>
                </Link>
                <form className='bg-slate-100 shadow-md p-3 rounded-lg flex items-center'>
                    <input 
                        type="text" 
                        placeholder='Search' 
                        className='bg-transparent focus:outline-none w-30 sm:w-80'/>
                    <FaSearch className='text-slate-500'/>
                </form>
                <ul className='flex space-x-6 items-center'>
                    <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hover:bg-slate-100 p-2 rounded-lg'>Home</li>
                    </Link>
                    <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 hover:bg-slate-100 p-2 rounded-lg'>About</li>
                    </Link>
                    <Link to='/sign-in'>
                    <li className=' text-slate-700 hover:bg-slate-100 p-2 rounded-lg'>Sign-in</li>
                    </Link>                
                </ul>
            </div>
        </header>
  )
}
