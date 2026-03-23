import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const BestNorcetTestSeries = () => {
  const comparePoints = [
    {
      title: 'Question quality',
      description: 'Prefer platforms with exam-level questions and balanced difficulty.'
    },
    {
      title: 'Analysis depth',
      description: 'Detailed performance analytics should clearly show weak areas.'
    },
    {
      title: 'Test variety',
      description: 'Choose platforms offering full, chapter-wise, and topic tests.'
    }
  ];

  return (
    <>
      <SEO
        title="Best NORCET Test Series"
        description="Compare NORCET test series platforms by features, analysis quality, and question quality before choosing."
        canonical="/best-norcet-test-series"
      />

      <section className="py-16 text-center bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Best NORCET Test Series</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Various platforms provide test series for NORCET. Students should choose based on features,
            analysis and question quality.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {comparePoints.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold mt-0 mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
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

export default BestNorcetTestSeries;
