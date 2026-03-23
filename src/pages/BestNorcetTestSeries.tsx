import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const BestNorcetTestSeries = () => {
  return (
    <>
      <SEO
        title="Best NORCET Test Series"
        description="Compare NORCET test series platforms by features, analysis quality, and question quality before choosing."
        canonical="/best-norcet-test-series"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h1 className="text-3xl font-bold text-black mb-4">Best NORCET Test Series</h1>
          <p className="text-gray-700 leading-relaxed">
            Various platforms provide test series for NORCET. Students should choose based on features,
            analysis and question quality.
          </p>
        </section>

        <TrustSection />
        <InternalLinks />
        <ConversionCTA />
      </div>
    </>
  );
};

export default BestNorcetTestSeries;
