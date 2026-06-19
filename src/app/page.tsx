import Container from '@components/Container';
import LandingSection from '@/app/Sections/LandingSection';
import Navbar from '@components/NavBar';
import ResumeSection from './Sections/ResumeSection';
import PersonalSection from './Sections/PersonalSection';
import ContactSection from './Sections/ContactSection';

export default function Home() {
  return (
    <Container>
      <Navbar />

      <div id="home">
        <LandingSection />
      </div>

      <div id="resume">
        <ResumeSection />
      </div>

      <div id="projects">
        <PersonalSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </Container>
  );
}
