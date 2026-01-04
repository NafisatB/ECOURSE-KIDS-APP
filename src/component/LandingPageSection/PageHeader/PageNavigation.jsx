
import { useState } from 'react';
import EdunityLogo from '../../../assets/icons/edunity-logo.svg?react'
import ArrowDownIcon from '../../../assets/icons/arrow-down.svg?react'
import SearchIcon from '../../../assets/icons/search.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import { Button } from '../../Button/Button';
import { NavDropdown } from "./NavDropdown";
import { NavItem } from "./NavItem";

export function PageNavigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className='relative max-w-[1320px] mx-auto py-2 font-sora text-sm px-2 md:px-0 z-50'>
            <div className="flex items-center justify-between">
                <EdunityLogo className="h-10 lg:h-auto" />

                {/* desktop menu */}
                <ul className="hidden lg:flex text-text-primary gap-10 text-[17px]  font-sora leading-8 font-normal">
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

                {/* desktop icons */}
                <ul className='hidden lg:flex items-center gap-5'>
                    <li>
                        <SearchIcon className='cursor-pointer' />
                    </li>
                    <li>
                        <UserIcon className='cursor-pointer' />
                    </li>
                    <li>
                        <Button
                            text="Contact"
                            variant="secondary" />
                    </li>
                </ul>

                {/* mobile menu button */}
                <button
                    className='lg:hidden text-text-primary'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
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
                                <UserIcon width={20} className='cursor-pointer' />
                            </li>
                        </ul>

                        <div className="mt-4 flex justify-center">
                            <Button
                                text="Contact"
                                variant="secondary" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}