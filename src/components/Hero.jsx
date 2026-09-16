import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <h1 
        data-aos="fade-down"
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
      >
        Hi, I'm <span className="text-blue-400">Bushra</span>
      </h1>

      <h2 
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-xl md:text-2xl font-semibold text-slate-300 mb-6"
      >
        Computer Science & Engineering Student | AI & ML Developer
      </h2>

      <p 
        data-aos="fade-up"
        data-aos-delay="200"
        className="max-w-2xl text-slate-400 text-base md:text-lg mb-8 leading-relaxed"
      >
        Passionate about building intelligent applications, explainable machine learning models, and full-stack web solutions.
      </p>

      <div 
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
      >
        <a 
          href="#projects" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/25 transition duration-300"
        >
          View My Work
        </a>

        <div className="flex space-x-5 text-2xl text-slate-300">
          <a href="https://github.com/Bushra-3259" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/bushra-harun-126718344/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="500" className="animate-bounce text-slate-500 text-xl pt-6">
        <a href="#about" aria-label="Scroll Down">
          <FaArrowDown />
        </a>
      </div>
    </section>
  );
}
