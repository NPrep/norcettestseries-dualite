import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const NorcetMockTest = () => {
  const mockBenefits = [
    'Simulates real exam environment',
    'Builds time management under pressure',
    'Improves consistency before exam day'
  ];

  return (
    <>
      <SEO
        title="AIIMS NORCET Mock Test"
        description="Practice AIIMS NORCET mock tests that simulate the real exam environment and improve performance."
        canonical="/norcet-mock-test"
      />

      <section className="py-16 text-center bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">AIIMS NORCET Mock Test</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Mock tests simulate the real exam environment and help candidates improve performance.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-0 mb-3">Why Attempt Mock Tests Regularly?</h2>
          <div className="rounded-2xl shadow-md bg-white border border-gray-200 p-6">
            <ul className="space-y-2 text-gray-600">
              {mockBenefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustSection />
      <InternalLinks />
      <ConversionCTA />
    </>
  );
};

export default NorcetMockTest;
