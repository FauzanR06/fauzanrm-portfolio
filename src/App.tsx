import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import ProjectsPreview from './components/ProjectsPreview';
import Certificates from './components/Certificates';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

function Layout() {
  return (
    <div className="font-sans min-h-screen bg-neutral-950 text-neutral-300 flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectsPreview isFullPage={false} />
      <Certificates isFullPage={false} />
      <ContactCTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPreview isFullPage={true} />} />
          <Route path="projects" element={<ProjectsPreview isFullPage={true} />} />
          <Route path="certificates" element={<Certificates isFullPage={true} />} />
          <Route path="contact" element={<ContactCTA />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
