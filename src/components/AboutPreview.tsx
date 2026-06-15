import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cvPdfBase64 } from '../assets/cvBase64';

export default function AboutPreview({ isFullPage = false }: { isFullPage?: boolean }) {
  const techStack = [
    'PHP', 'Laravel', 'SQL', 'React', 'Node.js', 'TailwindCSS', 'Git', 'Networking', 'Hardware'
  ];

  const experiences = [
    {
      role: 'Backend Developer (Internship)',
      company: 'WIT Indonesia',
      date: 'Agu 2024 – Nov 2024',
      description: 'Mengembangkan dan mengelola API menggunakan Laravel dan PHP. Mendesain dan mengoptimalkan database SQL. Mengimplementasikan autentikasi menggunakan JWT dan Laravel Sanctum.'
    },
    {
      role: 'Lab Hardware Assistant',
      company: 'University Computer Indonesia',
      date: 'Jan 2023 – Okt 2025',
      description: 'Membantu instruktur lab dalam administrasi, merawat perangkat keras lab, dan menginstal/mengkonfigurasi perangkat baru.'
    },
    {
      role: 'IT Support (Internship)',
      company: 'Politeknik Pos Indonesia',
      date: 'Jul 2020 – Des 2020',
      description: 'Mendiagnosis masalah jaringan dan perangkat lunak, melakukan perbaikan hardware, serta menjaga keamanan jaringan.'
    }
  ];

  const education = [
    {
      school: 'University Computer Indonesia',
      degree: 'S1 Teknik Informatika (IPK: 3.56/4.00)',
      date: 'Sep 2021 – Okt 2025'
    },
    {
      school: 'SMKN 1 Subang',
      degree: 'Rekayasa Perangkat Lunak (RPL)',
      date: 'Jun 2018 – Mei 2021'
    }
  ];

  return (
    <section id="about" className={`py-24 relative z-10 ${isFullPage ? 'min-h-screen pt-32' : ''}`}>
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`glass-panel rounded-3xl p-8 md:p-12 ${isFullPage ? 'mb-16' : ''}`}
        >
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 flex flex-col gap-6">
              <div className="flex flex-col gap-2 items-start">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">Tentang Saya</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-tight">Cepat beradaptasi. <br/> Selalu berkembang.</h2>
                <p className="text-base text-neutral-400 leading-relaxed max-w-xl mt-4 mb-4">
                  Saya adalah lulusan baru Teknik Informatika dari Universitas Komputer Indonesia. Saya senang bekerja secara mandiri maupun dalam tim, serta memiliki inisiatif tinggi untuk mengelola infrastruktur IT dan membangun aplikasi.
                </p>
                <a 
                  href={cvPdfBase64} 
                  download="CV_Fauzan_Ramdhani.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 bg-white/10 text-white hover:bg-white/20 border border-white/10 px-6 py-3 text-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download CV
                </a>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col gap-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Keahlian & Teknologi</span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    key={tech} 
                    className="px-4 py-2 text-sm font-mono text-neutral-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {isFullPage ? (
          <div className="grid lg:grid-cols-2 gap-8 items-start mt-8">
            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel rounded-3xl p-8 md:p-10 flex flex-col gap-8"
            >
              <h3 className="text-2xl font-bold text-white tracking-tighter flex items-center gap-3">
                <span className="w-8 h-px bg-purple-500 inline-block"></span> Pengalaman
              </h3>
              <div className="flex flex-col gap-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative group pl-6 border-l border-white/10">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neutral-900 border-2 border-purple-500 rounded-full group-hover:bg-purple-500 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all"></span>
                    <h4 className="font-semibold text-white text-lg tracking-tight">{exp.role}</h4>
                    <p className="text-sm text-purple-400 font-medium mb-3 mt-1">{exp.company} <span className="text-neutral-500 font-normal">| {exp.date}</span></p>
                    <p className="text-sm text-neutral-400 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel rounded-3xl p-8 md:p-10 flex flex-col gap-8"
            >
              <h3 className="text-2xl font-bold text-white tracking-tighter flex items-center gap-3">
                <span className="w-8 h-px bg-cyan-500 inline-block"></span> Pendidikan
              </h3>
              <div className="flex flex-col gap-8">
                {education.map((edu, i) => (
                  <div key={i} className="relative group pl-6 border-l border-white/10">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neutral-900 border-2 border-cyan-500 rounded-full group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all"></span>
                    <h4 className="font-semibold text-white text-lg tracking-tight">{edu.school}</h4>
                    <p className="text-sm text-neutral-300 font-medium mb-1 mt-1">{edu.degree}</p>
                    <p className="text-xs font-mono text-neutral-500">{edu.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <Link 
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 bg-white/10 text-white hover:bg-white/20 border border-white/10 px-8 py-3.5 text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Lihat Riwayat Lengkap →
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
