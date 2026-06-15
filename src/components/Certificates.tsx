import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Certificates({ isFullPage = false }: { isFullPage?: boolean }) {
  const certificates = [
    {
      id: 1,
      title: 'Sertifikat Kompetensi Keahlian RPL',
      issuer: 'BNSP / SMKN 1 Subang',
      date: '2021',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Dicoding: Belajar Dasar Pemrograman Web',
      issuer: 'Dicoding Indonesia',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Sertifikat Magang IT Support',
      issuer: 'Politeknik Pos Indonesia',
      date: '2020',
      image: 'https://images.unsplash.com/photo-1568227451052-167bb309e34d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      title: 'Cisco Certified Network Associate (CCNA) Course',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      title: 'Belajar Jaringan Komputer untuk Pemula',
      issuer: 'Dicoding Indonesia',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure Foundations',
      issuer: 'Google Cloud Training',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const displayedCertificates = isFullPage ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className={`py-24 relative z-10 ${isFullPage ? 'min-h-screen pt-32' : ''}`}>
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 items-center text-center mb-16"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">Pencapaian</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Lisensi & Sertifikat</h2>
          <p className="text-base text-neutral-400 leading-relaxed max-w-xl mt-2">Dokumentasi kompetensi dan pelatihan yang telah saya selesaikan.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertificates.map((cert, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={cert.id} 
              className="group flex flex-col glass-panel rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative p-4 pb-0">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0 shadow-lg"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-white leading-snug mb-2 group-hover:text-purple-400 transition-colors tracking-tight">{cert.title}</h3>
                <p className="text-sm text-neutral-400 mb-6">{cert.issuer}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{cert.date}</span>
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
              to="/certificates"
              className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 bg-white/10 text-white hover:bg-white/20 border border-white/10 px-8 py-3.5 text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Lihat Semua Sertifikat →
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
