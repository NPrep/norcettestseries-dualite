import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const Home = () => {
  return (
    <>
      <SEO
        title="AIIMS NORCET Test Series | Online Mock Tests"
        description="Practice with online mock tests designed for AIIMS NORCET nursing officer exam. Improve speed, accuracy, and exam confidence."
        canonical="/"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">AIIMS NORCET Test Series</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Practice with online mock tests designed for AIIMS NORCET nursing officer exam.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold text-black mb-4">Why Practice Test Series?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Understand exam pattern</li>
            <li>Improve time management</li>
            <li>Analyze performance</li>
            <li>Boost accuracy</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold text-black mb-4">Features of NORCET Test Series</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Full length mock tests</li>
            <li>Topic-wise tests</li>
            <li>Performance analysis</li>
            <li>All India ranking</li>
          </ul>
        </section>

        <TrustSection />
        <InternalLinks />
        <ConversionCTA />
      </div>
    </>
  );
};

export default Home;
