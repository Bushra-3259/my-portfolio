import { FaGraduationCap, FaCode, FaBrain } from 'react-icons/fa';

export default function About() {
  const skills = [
    'Python', 'C++', 'React', 'Tailwind CSS',
    'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Git'
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Heading */}
      <div data-aos="fade-up" className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Story */}
        <div data-aos="fade-right" className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            I am a Computer Science & Engineering student with a strong passion for solving real-world problems through data-driven intelligent systems and modern web architecture.
          </p>
          <p>
            My recent focus centers around Machine Learning, Natural Language Processing, and Explainable AI (XAI), alongside building responsive frontend interfaces using React and Tailwind CSS.
          </p>
        </div>

        {/* Right Column: Key Cards & Tech Stack */}
        <div data-aos="fade-left" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition">
              <FaGraduationCap className="text-3xl text-blue-400 mb-3" />
              <h3 className="font-semibold text-white text-lg">Education</h3>
              <p className="text-sm text-slate-400">B.Sc. in Computer Science & Engineering</p>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition">
              <FaBrain className="text-3xl text-blue-400 mb-3" />
              <h3 className="font-semibold text-white text-lg">Focus Areas</h3>
              <p className="text-sm text-slate-400">Machine Learning, NLP & XAI</p>
            </div>
          </div>

          {/* Technical Skills Badges */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <h3 className="font-semibold text-white text-lg mb-4 flex items-center gap-2">
              <FaCode className="text-blue-400" /> Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-slate-800 text-blue-300 text-sm font-medium rounded-md border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
