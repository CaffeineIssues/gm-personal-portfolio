import Image from 'next/image';
import Container from '@components/Container';
import LandingSection from '@/app/Sections/LandingSection';
import Navbar from '@components/NavBar';

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <LandingSection />
      </Container>
    </>
    //<main className="flex min-h-screen flex-col items-center justify-between p-24">
  );
}
