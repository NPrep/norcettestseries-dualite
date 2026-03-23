import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const NorcetMockTest = () => {
  return (
    <>
      <SEO
        title="AIIMS NORCET Mock Test"
        description="Practice AIIMS NORCET mock tests that simulate the real exam environment and improve performance."
        canonical="/norcet-mock-test"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h1 className="text-3xl font-bold text-black mb-4">AIIMS NORCET Mock Test</h1>
          <p className="text-gray-700 leading-relaxed">
            Mock tests simulate the real exam environment and help candidates improve performance.
          </p>
        </section>

        <TrustSection />
        <InternalLinks />
        <ConversionCTA />
      </div>
    </>
  );
};

export default NorcetMockTest;
