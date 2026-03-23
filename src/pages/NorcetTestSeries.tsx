import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const NorcetTestSeries = () => {
  const offerings = [
    { title: 'Full length tests', description: 'Complete exam simulation with timed attempts.' },
    { title: 'Chapter-wise tests', description: 'Focused test practice for specific areas.' },
    { title: 'Detailed analysis', description: 'See strengths, weak spots, and attempt patterns.' }
  ];

  return (
    <>
      <SEO
        title="NORCET Test Series Online"
        description="Online NORCET test series with full length tests, chapter-wise practice, and detailed analysis."
        canonical="/norcet-test-series"
      />

      <section className="py-16 text-center bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">NORCET Test Series Online</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Online test series helps candidates practice questions similar to the real exam.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-0 mb-3">What You Get</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {offerings.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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

export default NorcetTestSeries;
