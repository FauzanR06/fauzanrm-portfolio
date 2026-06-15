import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 w-full h-full bg-neutral-950 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-emerald-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 px-6 md:px-10 max-w-6xl mx-auto w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel w-fit border-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-neutral-300">Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              Crafting robust <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">
                infrastructure
              </span> & <br/>
              digital experiences.
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light max-w-lg mt-2">
              Halo, saya <strong className="text-white font-medium">Fauzan Ramdhani</strong>. Lulusan Teknik Informatika yang ahli dalam membangun fondasi IT solid dan aplikasi Full-stack yang scalable.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Link 
                to="/projects" 
                className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 bg-white text-neutral-950 hover:bg-neutral-200 px-8 py-4 text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-0.5"
              >
                Lihat Karya Saya
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-3xl rotate-6 blur-xl scale-105"></div>
              <div className="glass-panel w-full h-full rounded-3xl relative overflow-hidden border border-white/20 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-[2px]">
                    <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center text-white font-bold">FR</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 w-1/3 bg-white/20 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                </div>
                
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/70">Backend</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/70">Network</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/70">React</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
