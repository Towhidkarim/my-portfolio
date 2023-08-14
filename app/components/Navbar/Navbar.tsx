import React from 'react';
import { MobileDrawer } from './MobileDrawer';
import NavLinks from '@/constants/Navlinks';
import Link from 'next/link';
import ThemeToggle from '../ThemeChanger/ThemeToggle';

const Navbar = () => {
  return (
    <div id='nav-container' className='w-full m-auto sticky top-0 z-10'>
      <nav
        className='navbar container m-auto flex justify-between items-center
                     bg-base-100  bg-opacity-75 backdrop-blur-lg
                     
                     '
      >
        <Link
          className='btn btn-ghost text-2xl font-bold normal-case pb-1'
          href='/'
        >
          {'<Towhid/Karim>'}
        </Link>
        <ul className='hidden md:flex'>
          {NavLinks.map((value) => {
            return (
              <li>
                <Link href={value.url} className='btn btn-ghost'>
                  {value.title}
                </Link>
              </li>
            );
          })}
          {/* <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost m-1 '>
            Theme
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content shadow-lg z-10 menu p2 bg-base-100 rounded-lg'
          >
            <li>
              <button>Dark</button>
            </li>
            <li>
              <button>Light</button>
            </li>
          </ul>
        </div> */}
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <MobileDrawer />
      </nav>
    </div>
  );
};

export default Navbar;
