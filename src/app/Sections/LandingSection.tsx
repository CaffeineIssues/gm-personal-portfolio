'use client';
import React from 'react';
import SectionContainer from '@components/SectionContainer';

type TopHalfProps = {
  children?: React.ReactNode;
};

type BottomHalfProps = {
  children?: React.ReactNode;
};

const TopHalf = ({ children }: TopHalfProps) => {
  return (
    <div className="w-screen pl-[5em] pr-[5em] flex-1 flex justify-center items-center h-3/5 pt-80 z-0">
      {children}
    </div>
  );
};
const BottomHalf = ({ children }: BottomHalfProps) => {
  return <div className="h-2/5 bg-black">{children}</div>;
};

const ProfilePicture = () => {
  return <div className="h-[35em] w-2/6 bg-[#b76939] "></div>;
};

const Introduction = () => {
  return <div></div>;
};

function LandingSection() {
  return (
    <SectionContainer className={'bg-[#334b35] h-screen flex flex-col'}>
      <TopHalf>
        <ProfilePicture />
      </TopHalf>
      <BottomHalf></BottomHalf>
    </SectionContainer>
  );
}

export default LandingSection;
