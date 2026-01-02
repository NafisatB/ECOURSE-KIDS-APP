import { Link } from "react-router-dom";
import { useState } from 'react';
import EdunityLogo from '../../../assets/icons/edunity-logo-2.svg?react'
import NavLine from '../../../assets/icons/nav-line.svg?react'
import ArrowDownIcon from '../../../assets/icons/arrow-down.svg?react'
import SearchIcon from '../../../assets/icons/search.svg?react';
import { Button } from '../../Button/Button';

export function PageNavigationAbtUs() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className='relative max-w-[1720px] mx-auto py-2 px-2 md:px-0 z-50'>
            <div className="flex items-center justify-between">
                <div>
                    <EdunityLogo className="h-10 lg:h-auto" />
                </div>
                <div>
                    {/* desktop menu/Icons */}
                    <ul className='hidden lg:flex text-text-primary gap-10 font-sora leading-8 text-[17px] font-normal'>
                        <li className='flex items-center gap-1'>
                            Home
                            <ArrowDownIcon />
                        </li>
                        <li className="border border-transparent rounded-xl p-1 transition-colors duration-300 hover:border-primary overflow-hidden">
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li className='flex items-center gap-1'>
                            Courses
                            <ArrowDownIcon />
                        </li>
                        <li className='flex items-center gap-1'>
                            Pages
                            <ArrowDownIcon />
                        </li>
                        <li className='flex items-center gap-1'>
                            Blog
                            <ArrowDownIcon />
                        </li>
                        <li className="border border-transparent rounded-xl p-1 transition-colors duration-300 hover:border-primary overflow-hidden">
                            <a href="#contact" className="cursor-pointer">Contact</a>
                        </li>

                        <li className='flex items-center gap-1'>
                            <SearchIcon className='cursor-pointer' />
                        </li>
                        <li className='flex items-center gap-1'>
                            <NavLine className='cursor-pointer' />
                        </li>
                    </ul>
                </div>

            </div>


            {/* mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute right-0 top-full w-80 px-5 py-5 bg-white shadow-lg border-t border-gray-200">
                    <ul className='flex flex-col text-text-primary gap-8'>
                        <li className='flex items-center justify-between'>
                            Home
                            <ArrowDownIcon />
                        </li>
                        <li>
                            About Us
                        </li>
                        <li className='flex items-center justify-between'>
                            Courses
                            <ArrowDownIcon />
                        </li>
                        <li className='flex items-center justify-between'>
                            Pages
                            <ArrowDownIcon />
                        </li>
                        <li className='flex items-center justify-between'>
                            Blog
                            <ArrowDownIcon />
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>

                    <div className='flex justify-between items-center'>
                        <ul className='flex items-center justify-center gap-5 mt-6 pt-4 border-t border-gray-200'>
                            <li>
                                <SearchIcon width={20} className='cursor-pointer' />
                            </li>
                            <li>
                                <NavLine width={20} className='cursor-pointer' />
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}