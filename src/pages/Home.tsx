import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const Home = () => {
  const benefits = [
    {
      title: 'Understand exam pattern',
      description: 'Practice with question flow aligned to competitive NORCET-style tests.'
    },
    {
      title: 'Improve time management',
      description: 'Build speed under timed conditions and reduce last-minute pressure.'
    },
    {
      title: 'Analyze performance',
      description: 'Track score trends and identify areas that need more practice.'
    },
    {
      title: 'Boost accuracy',
      description: 'Improve attempt quality through repeated mock exposure.'
    }
  ];

  const features = [
    'Full length mock tests',
    'Topic-wise tests',
    'Performance analysis',
    'All India ranking'
  ];

  return (
    <>
      <SEO
        title="AIIMS NORCET Test Series | Online Mock Tests"
        description="Practice with online mock tests designed for AIIMS NORCET nursing officer exam. Improve speed, accuracy, and exam confidence."
        canonical="/"
      />

      <section className="py-16 text-center bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">AIIMS NORCET Test Series</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Practice with online mock tests designed for AIIMS NORCET nursing officer exam.
            Build speed, confidence, and exam-day readiness with structured test practice.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-0 mb-3">Why Practice Test Series?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-0 mb-3">Features of NORCET Test Series</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200">
                <p className="text-gray-600 leading-relaxed">• {feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <InternalLinks />
      <ConversionCTA />
    </>
  );
};

export default Home;
