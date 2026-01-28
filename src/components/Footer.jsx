import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white/60 py-16 border-t border-white/10 w-full">
      <div className="max-w-6xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <span className="tracking-widest text-sm">
          © {new Date().getFullYear()} Pietra Caracco Ruiz
        </span>

        <div className="flex gap-6 text-xl">
          <a href="https://github.com/PietraCaraccoRuiz" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pietra-caracco-ruiz" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="mailto:caraccoruizpietra@gmail.com" className="hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
