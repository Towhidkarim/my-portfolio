'use client';
import { AnimatePresence } from 'framer-motion';

const AnimPresence = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default AnimPresence;
