import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="bg-black h-screen w-screen">{children}</div>;
};

export default Container;
