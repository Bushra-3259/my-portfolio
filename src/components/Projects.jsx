import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projectsList = [
    {
      title: 'Multi-Modal Financial Fraud Detection',
      description: 'A hybrid fraud detection pipeline combining Random Forest classification with zero-shot transformer models and feature importance metrics.',
      tags: ['Python', 'Scikit-Learn', 'Transformers', 'LightGBM'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'Brain MRI Scan Classification',
      description: 'End-to-end computer vision pipeline using transfer learning with VGG16 to classify brain MRI scans into four distinct categories.',
      tags: ['Python', 'PyTorch', 'VGG16', 'OpenCV'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'AI Image Classifier Web App',
      description: 'A real-time image classification application using MobileNetV2 and Streamlit for instant visual predictions.',
      tags: ['Python', 'Streamlit', 'MobileNetV2', 'TensorFlow'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'California Housing Price Predictor',
      description: 'Modular machine learning pipeline utilizing LightGBM and spatial feature engineering to model housing prices.',
      tags: ['Python', 'LightGBM', 'Pandas', 'Scikit-Learn'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'LangChain Conversational Data Agent',
      description: 'Interactive Streamlit application integrating LangChain pandas agents to query uploaded structured datasets via natural language.',
      tags: ['Python', 'LangChain', 'Streamlit', 'Pandas'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'Deadlock Simulator Tool',
      description: 'Interactive web-based visualization tool simulating operating system resource allocation and Banker\'s Algorithm.',
      tags: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div data-aos="fade-up" className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2.5 py-1 bg-slate-800 text-blue-300 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 text-slate-300 text-lg">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition"
                  aria-label="GitHub Repository"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt className="text-base" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
