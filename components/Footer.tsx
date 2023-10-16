import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from "@/constants";

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className="flex max-md:flex-col flex-wrap justify-content gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src='/logo.svg' width={118} height={18} alt='logo' className='object-contain' />
                    <p className='text-base text-gray-700'>
                        CarHub 2023 <br /> All rights reserved &copy;
                    </p>
                </div>
                {/* Footer Links */}
                <div className="footer__links">
                    {footerLinks.map((items) => (
                        <div key={items.title} className='footer__link'>
                            <h3 className='font-bold'>{items.title}</h3>
                            {items.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className='text-gra-500'
                                >{link.title}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            {/* Copyright sections */}
            <div className="flex justify-between items-center flex-wrap mt-19 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p>@2023 CarHub. All Rights Reserved</p>
                <div className="footer__copyrights-link">
                    <Link
                        className='text-gray-500'
                        href='/'
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        className='text-gray-500'
                        href='/'
                    >
                        Terms of Use
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer
