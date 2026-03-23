import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const BenefitsOfTestSeries = () => {
  const benefits = [
    { title: 'Identify weak areas', description: 'Recognize topics needing more revision and test exposure.' },
    { title: 'Improve speed and accuracy', description: 'Practice repeated attempts under time limits.' },
    { title: 'Understand question trends', description: 'Get familiar with likely exam-style question patterns.' }
  ];

  return (
    <>
      <SEO
        title="Benefits of Practicing Test Series"
        description="Learn the key benefits of practicing NORCET test series including speed, accuracy, and trend understanding."
        canonical="/benefits-of-test-series"
      />

      <section className="py-16 text-center bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Benefits of Practicing Test Series</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Consistent mock test practice supports better performance in competitive exams.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustSection />
      <InternalLinks />
      <ConversionCTA />
    </>
  );
};

export default BenefitsOfTestSeries;
