import Astronaut from '../components/Astronaut';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex flex-col justify-center items-center pt-20">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Build Your Brand
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
            Launch your brand into the stratosphere with JV Studio's comprehensive solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-[#F45B69] hover:bg-[#d14050] rounded-md font-medium transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-white hover:border-[#F45B69] hover:text-[#F45B69] rounded-md font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-8 w-full max-w-4xl mx-auto">
          <Astronaut />
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-[#0A1128]/95 to-[#0A1128]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Strategy',
                description: 'Develop a unique and compelling brand identity that resonates with your target audience.',
                icon: '🚀'
              },
              {
                title: 'Web Development',
                description: 'Create stunning, responsive websites designed to convert visitors into customers.',
                icon: '💻'
              },
              {
                title: 'Digital Marketing',
                description: 'Expand your reach with targeted campaigns across multiple platforms.',
                icon: '📊'
              },
              {
                title: 'Content Creation',
                description: 'Produce high-quality content that engages and informs your audience.',
                icon: '✏️'
              },
              {
                title: 'Social Media Management',
                description: 'Build a strong social media presence with consistent, strategic posting.',
                icon: '📱'
              },
              {
                title: 'Analytics & Reporting',
                description: 'Track your performance with detailed reports and actionable insights.',
                icon: '📈'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-[#1C1C54]/60 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-purple-900/30 hover:border-purple-500/30 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#F45B69] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#0A1128]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((client) => (
              <div 
                key={client}
                className="bg-white/10 backdrop-blur-sm rounded-md w-40 h-20 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="text-xl font-semibold text-gray-300">Client {client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-[#0A1128] to-[#1C1C54]/95">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Take the first step towards building a powerful brand presence
            </p>
            <button className="px-8 py-3 bg-[#F45B69] hover:bg-[#d14050] rounded-md font-medium transition-colors text-lg">
              Request A Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;