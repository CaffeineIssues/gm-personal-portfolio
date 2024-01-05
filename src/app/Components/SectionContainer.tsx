'use client';
import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const SectionContainer: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <div className={`${className} h-screen w-screen`}>{children}</div>;
};

export default SectionContainer;
