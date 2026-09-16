import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <div data-aos="fade-up" className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-slate-400 text-base max-w-lg mx-auto">
          I am always open to discussing research collaborations, software projects, or mentorship opportunities.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="150" className="flex justify-center items-center space-x-6 mb-16">
        <a
          href="https://www.linkedin.com/in/bushra-harun-126718344/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/25 transition duration-300"
        >
          <FaLinkedin /> Connect on LinkedIn
        </a>
      </div>

      <footer className="border-t border-slate-800 pt-8 text-slate-500 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Bushra. Built with React & Tailwind CSS.</p>
        <div className="flex space-x-4 text-lg text-slate-400">
          <a href="https://github.com/Bushra-3259" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/bushra-harun-126718344/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </section>
  );
}
