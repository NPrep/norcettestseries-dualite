import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const BenefitsOfTestSeries = () => {
  return (
    <>
      <SEO
        title="Benefits of Practicing Test Series"
        description="Learn the key benefits of practicing NORCET test series including speed, accuracy, and trend understanding."
        canonical="/benefits-of-test-series"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h1 className="text-3xl font-bold text-black mb-4">Benefits of Practicing Test Series</h1>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Identify weak areas</li>
            <li>Improve speed and accuracy</li>
            <li>Understand question trends</li>
          </ul>
        </section>

        <TrustSection />
        <InternalLinks />
        <ConversionCTA />
      </div>
    </>
  );
};

export default BenefitsOfTestSeries;
