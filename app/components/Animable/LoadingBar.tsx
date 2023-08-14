'use client';
import { AppProgressBar } from 'next-nprogress-bar';

const LoadingBar = () => {
  return (
    <AppProgressBar
      height='4px'
      color='#b3b3ff'
      options={{ showSpinner: false }}
    />
  );
};

export default LoadingBar;
