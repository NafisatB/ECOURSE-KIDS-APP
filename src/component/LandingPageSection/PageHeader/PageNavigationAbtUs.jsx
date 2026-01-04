import { Link } from "react-router-dom";
import { useState } from 'react';
import EdunityLogo from '../../../assets/icons/edunity-logo-2.svg?react'
import NavLine from '../../../assets/icons/nav-line.svg?react'
import ArrowDownIcon from '../../../assets/icons/arrow-down.svg?react'
import SearchIcon from '../../../assets/icons/search.svg?react';
import { NavDropdown } from "./NavDropdown";
import { NavItem } from "./NavItem";
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


                    <ul className="hidden lg:flex text-text-primary gap-10 font-sora leading-8 text-[17px] font-normal">
                    <NavDropdown
                        label="Home"
                        items={[
                            { label: "Landing 1", to: "/" },
                            { label: "Landing 2", to: "/home-2" },
                        ]}
                    />

                    <NavItem to="/about">About Us</NavItem>

                    <NavDropdown
                        label="Courses"
                        items={[
                            { label: "Courses Details", to: "/courses/Details" },
                            { label: "Courses Style 1", to: "/courses/Style1" },
                            { label: "Courses Style 2", to: "/courses/Style2" },
                        ]}
                    />

                    <NavDropdown
                        label="Pages"
                        items={[
                            { label: "Testimonial", to: "/testimonial" },
                            { label: "FAQ", to: "/faq" },
                            { label: "Pricing Tables", to: "/pricing" },
                            { label: "Shop", to: "/shop" },
                            { label: "Cart", to: "/cart" },
                            { label: "Checkout", to: "/checkout" },
                            { label: "SIGN UP", to: "/signup" },
                            { label: "SIGN IN", to: "/signin" }
                        ]}
                    />

                    <NavDropdown
                        label="Blog"
                        items={[
                            { label: "All Posts", to: "/blog" },
                            { label: "Categories", to: "/blog/categories" },
                        ]}
                    />

                    <NavItem to="/contact">Contact</NavItem>
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