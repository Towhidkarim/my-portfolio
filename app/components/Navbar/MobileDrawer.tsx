import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import NavLinks from '@/constants/Navlinks';
import Link from 'next/link';
import ThemeToggle from '../ThemeChanger/ThemeToggle';

export const MobileDrawer = () => {
  return (
    <div className='drawer-end md:hidden'>
      <ThemeToggle />
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='my-drawer' className='btn btn-ghost drawer-button'>
          <span className='text-2xl'>
            <HiMenuAlt3 />
          </span>
        </label>
      </div>
      <nav className='drawer-side z-50'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 w-[60%] min-w-80 h-full bg-base-200 flex justify-center items-center relative'>
          <label
            htmlFor='my-drawer'
            className='btn btn-square absolute top-0 right-0 m-3 text-2xl'
          >
            <AiOutlineClose />
          </label>
          {NavLinks.map((value) => {
            return (
              <li className='w-full'>
                <Link href={value.url} className='btn btn-ghost p-4 w-full'>
                  {value.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
