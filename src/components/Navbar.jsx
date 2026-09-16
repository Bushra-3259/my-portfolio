import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      <a href="#" className="text-xl font-bold tracking-wide text-blue-400 hover:text-blue-300 transition">
        Bushra<span className="text-white">.dev</span>
      </a>

      <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
        <li>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </li>
      </ul>

      <div className="flex items-center space-x-4 text-xl text-slate-300">
        <a 
          href="https://github.com/Bushra-3259" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-blue-400 transition"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/bushra-harun-126718344/" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-blue-400 transition"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
