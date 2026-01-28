import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <motion.main
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.6,
        duration: 1.3,
        ease: [0.77, 0, 0.175, 1],
      }}
      className="relative h-screen w-screen bg-gradient-to-br from-[#0A0A0A] via-[#0E0E0E] to-black text-white overflow-hidden"
    >
      {/* Glow orgânico */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-white/5 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[160px]" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col justify-center px-28">
        {/* Nome */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
            ease: [0.77, 0, 0.175, 1],
          }}
          className="text-[7vw] font-extrabold leading-[0.9] tracking-tight"
        >
          PIETRA
          <br />
          <span className="text-white/80">RUIZ</span>
        </motion.h1>

        {/* Linha decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.3, duration: 0.8, ease: "easeOut" }}
          className="origin-left w-24 h-[1px] bg-white/30 mt-8"
        />

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.5,
            duration: 0.9,
            ease: "easeOut",
          }}
          className="mt-6 text-white/60 tracking-[0.35em] uppercase text-xs"
        >
          Creative Developer · Frontend · Backend
        </motion.p>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="mt-16 flex gap-8 text-4xl"
        >
          {[ 
            { icon: <FaGithub />, link: "https://github.com/PietraCaraccoRuiz" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/pietra-caracco-ruiz",
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:caraccoruizpietra@gmail.com",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white/50
                hover:text-white
                transition
                duration-300
                hover:-translate-y-1
              "
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest"
      >
        SCROLL
      </motion.div>
    </motion.main>
  );
}
