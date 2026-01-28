import { motion } from "framer-motion";
import { SiCanva } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

export default function CanvaSection() {
  return (
    <section className="relative py-40 bg-black text-white overflow-hidden mb-50">
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
        >
          <SiCanva className="text-6xl mx-auto mb-6 text-white/80" />

          <h2 className="text-5xl font-bold mb-4">
            Apresentação Pessoal
          </h2>

          <p className="text-white/60 max-w-xl mx-auto mb-10">
            Veja mais sobre mim e meus projetos nesta apresentação interativa que criei no Canva.
          </p>

          <a
            href="https://www.canva.com/design/DAG_cT9awYg/Q_uVzk1wYhs9_KC1bSUyOg/edit?utm_content=DAG_cT9awYg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            className="inline-flex items-center gap-4 px-10 py-4 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Acessar apresentação
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
