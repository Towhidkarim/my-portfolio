'use client';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

const PageFade = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </motion.div>
  );
};

export default PageFade;
