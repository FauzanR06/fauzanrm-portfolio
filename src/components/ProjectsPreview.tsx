import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  stack: string[];
  status: string;
  year: string;
};

export default function ProjectsPreview({ isFullPage = false }: { isFullPage?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [  
  ];

  const displayedProjects = isFullPage ? projects : projects.slice(0, 3);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="projects" className={`py-24 relative z-10 ${isFullPage ? 'min-h-screen pt-32' : ''}`}>
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 items-center text-center mb-16"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Portofolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Karya & Proyek</h2>
          <p className="text-base text-neutral-400 leading-relaxed max-w-xl mt-2">Kumpulan proyek terbaik di bidang infrastruktur dan pengembangan aplikasi.</p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {displayedProjects.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <div className={`w-full md:w-5/12 overflow-hidden relative ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <div className="absolute inset-0 bg-neutral-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={project.image} alt={project.title} className="w-full h-full min-h-[250px] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    project.status === 'Shipped' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {project.status}
                  </span>
                  <span className="font-mono text-xs text-neutral-500">{project.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-mono text-neutral-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isFullPage && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <Link 
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 bg-white/10 text-white hover:bg-white/20 border border-white/10 px-8 py-3.5 text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Lihat Semua Proyek →
            </Link>
          </motion.div>
        )}
      </div>

      {/* Premium Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md" 
            onClick={() => setSelectedProject(null)}
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel bg-neutral-900/80 border border-white/10 rounded-3xl shadow-2xl z-10 flex flex-col"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 text-white rounded-full transition-colors z-20 backdrop-blur-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="w-full aspect-[21/9] sm:aspect-video relative overflow-hidden bg-neutral-950">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 sm:p-12 flex flex-col gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${selectedProject.status === 'Shipped' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'}`}>{selectedProject.status}</span>
                  <span className="font-mono text-xs text-neutral-400">{selectedProject.year}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tighter">{selectedProject.title}</h3>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest">Deskripsi</h4>
                <p className="text-neutral-300 leading-relaxed text-base">{selectedProject.longDescription}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest">Fitur Utama</h4>
                <ul className="flex flex-col gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-300">
                      <span className="text-cyan-400 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest">Teknologi</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map(tech => (
                    <span key={tech} className="text-sm font-mono text-neutral-200 bg-white/5 border border-white/10 px-4 py-2 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
