'use client';
import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggle = () => {
    if (resolvedTheme === 'dark') setTheme('light');
    else if (resolvedTheme === 'light') setTheme('dark');
  };
  useEffect(() => {
    // themeChange(false);
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <label htmlFor='theme-toggle' className='btn btn-ghost'>
      {/* <button
        data-toggle-theme='dark,light'
        data-act-class='ACTIVECLASS'
        className='btn btn-ghost'
      >
        Theme
      </button> */}
      <label className='swap swap-rotate'>
        {/* this hidden checkbox controls the state */}
        <input id='theme-toggle' type='checkbox' onClick={toggle} />

        <div className='swap-on fill-current text-base-content md:text-2xl text-xl'>
          {resolvedTheme === 'light' ? (
            <BsFillSunFill />
          ) : (
            <BsFillMoonStarsFill />
          )}
        </div>

        {/* moon icon */}
        <div className='swap-off fill-current text-base-content md:text-2xl text-xl'>
          {resolvedTheme === 'dark' ? (
            <BsFillMoonStarsFill />
          ) : (
            <BsFillSunFill />
          )}
        </div>
      </label>
    </label>
  );
};

export default ThemeToggle;
