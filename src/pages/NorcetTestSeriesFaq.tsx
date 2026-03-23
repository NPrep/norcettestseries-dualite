import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const NorcetTestSeriesFaq = () => {
  return (
    <>
      <SEO
        title="NORCET Test Series FAQ"
        description="Frequently asked questions about AIIMS NORCET test series and mock test practice."
        canonical="/norcet-test-series-faq"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h1 className="text-3xl font-bold text-black mb-6">NORCET Test Series FAQ</h1>

          <div className="space-y-5 text-gray-700">
            <div>
              <p className="font-semibold text-black">Why should I attempt mock tests?</p>
              <p>Mock tests help improve exam performance.</p>
            </div>
            <div>
              <p className="font-semibold text-black">Are online test series useful?</p>
              <p>Yes, they simulate real exam conditions.</p>
            </div>
          </div>
        </section>

        <TrustSection />
        <InternalLinks />
        <ConversionCTA />
      </div>
    </>
  );
};

export default NorcetTestSeriesFaq;
