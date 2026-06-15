import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-neutral-950 mt-auto overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="py-16 flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          <div className="flex flex-col gap-4 max-w-sm">
            <Link className="flex items-center gap-2 w-fit" to="/">
              <span className="font-bold tracking-tighter text-white text-xl">fauzanrm</span>
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Informatics Engineering Graduate. Merancang solusi infrastruktur dan pengalaman web premium yang handal dan estetik.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-2">Navigasi</span>
              <Link to="/" className="text-sm text-neutral-400 hover:text-white transition-colors w-fit">Home</Link>
              <Link to="/about" className="text-sm text-neutral-400 hover:text-white transition-colors w-fit">About</Link>
              <Link to="/projects" className="text-sm text-neutral-400 hover:text-white transition-colors w-fit">Projects</Link>
              <Link to="/certificates" className="text-sm text-neutral-400 hover:text-white transition-colors w-fit">Certificates</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-2">Sosial</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors w-fit">GitHub</a>
              <a href="https://linkedin.com/in/fauzan-ramdhani/" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors w-fit">LinkedIn</a>
              <a href="mailto:fauzanm157@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors w-fit">Email</a>
            </div>
          </div>
        </div>
        
        <div className="py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-neutral-500 font-mono">© {new Date().getFullYear()} Fauzan Ramdhani. All rights reserved.</span>
          <span className="text-xs text-neutral-500 font-mono flex items-center gap-1">Dibuat dengan React <span className="text-purple-500">♥</span> Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
