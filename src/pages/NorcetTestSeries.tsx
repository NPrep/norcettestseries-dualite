import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const NorcetTestSeries = () => {
  return (
    <>
      <SEO
        title="NORCET Test Series Online"
        description="Online NORCET test series with full length tests, chapter-wise practice, and detailed analysis."
        canonical="/norcet-test-series"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h1 className="text-3xl font-bold text-black mb-4">NORCET Test Series Online</h1>
          <p className="text-gray-700 leading-relaxed">
            Online test series helps candidates practice questions similar to the real exam.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold text-black mb-4">What You Get</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Full length tests</li>
            <li>Chapter-wise tests</li>
            <li>Detailed analysis</li>
          </ul>
        </section>

        <TrustSection />
        <InternalLinks />
        <ConversionCTA />
      </div>
    </>
  );
};

export default NorcetTestSeries;
