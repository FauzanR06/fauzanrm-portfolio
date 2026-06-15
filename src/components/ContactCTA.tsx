import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="mx-auto w-full max-w-4xl px-6 md:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel rounded-[3rem] p-10 md:p-20 text-center flex flex-col items-center justify-center border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Mari membangun sesuatu <br className="hidden md:block"/> yang luar biasa.
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed">
              Tertarik untuk bekerja sama atau sekadar menyapa? Jangan ragu untuk menghubungi saya melalui email atau LinkedIn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:fauzanm157@gmail.com" 
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 bg-white text-neutral-950 hover:bg-neutral-200 px-8 py-4 text-base shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
              >
                Kirim Email
              </a>
              <a 
                href="https://linkedin.com/in/fauzan-ramdhani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white glass-panel text-white hover:bg-white/10 border border-white/10 px-8 py-4 text-base hover:-translate-y-0.5"
              >
                Koneksi LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
