import React from 'react';
import { Montserrat } from 'next/font/google';

type ContainerProps = {
  children?: React.ReactNode;
};

const montSerrat = Montserrat({ subsets: ['latin'] });
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={`${montSerrat.className} bg-black h-screen w-screen`}>
      {children}
    </div>
  );
};

export default Container;
