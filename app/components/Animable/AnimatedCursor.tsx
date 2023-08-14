'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const updateMousePos = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener('mousemove', updateMousePos);

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 24,
      y: mousePos.y - 24,
    },
  };

  return (
    <>
      <motion.div
        className='w-12 h-12 rounded-full border border-base-content z-[50] fixed pointer-events-none'
        variants={variants}
        animate='default'
      ></motion.div>
      <div
        className={`fixed w-6 h-6 rounded-full bg-base-content border border-base-100 z-[50] pointer-events-none`}
        style={{ top: mousePos.y - 12, left: mousePos.x - 12 }}
      ></div>
    </>
  );
};

export default AnimatedCursor;
