import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
      isActive 
        ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
        : 'text-neutral-400 hover:text-white hover:bg-white/5'
    }`;

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-2xl ${scrolled ? 'top-4' : 'top-6'}`}>
      <nav className="glass-panel rounded-full px-4 py-2 flex items-center justify-between">
        <Link className="flex items-center gap-2 pl-2" to="/">
          <span className="font-bold tracking-tighter text-white text-lg">fauzanrm</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-full border border-white/5">
          <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={getLinkClass}>About</NavLink></li>
          <li><NavLink to="/projects" className={getLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/certificates" className={getLinkClass}>Certificates</NavLink></li>
        </ul>

        <div className="hidden md:flex">
          <NavLink 
            to="/contact" 
            className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-white/10 transition" 
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-16 left-0 right-0 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
        <div className="glass-panel rounded-3xl p-4 flex flex-col gap-2 mx-auto w-full mt-2">
          <NavLink to="/" className="px-4 py-3 text-sm font-medium text-white rounded-xl hover:bg-white/5" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="px-4 py-3 text-sm font-medium text-white rounded-xl hover:bg-white/5" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/projects" className="px-4 py-3 text-sm font-medium text-white rounded-xl hover:bg-white/5" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/certificates" className="px-4 py-3 text-sm font-medium text-white rounded-xl hover:bg-white/5" onClick={() => setIsOpen(false)}>Certificates</NavLink>
          <NavLink to="/contact" className="px-4 py-3 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-xl mt-2" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
}
