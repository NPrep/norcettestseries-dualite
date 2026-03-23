import { Link } from 'react-router-dom';

export const ConversionCTA = () => (
  <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
    <h2 className="text-2xl font-bold text-black mb-4">Start NORCET Test Series on NPrep</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
      <li>AIIMS-level mock tests</li>
      <li>real exam pattern questions</li>
      <li>detailed performance analysis</li>
      <li>All India ranking</li>
    </ul>
    <a
      href="https://nprep.in"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
    >
      Start Test Series
    </a>
  </section>
);

export const TrustSection = () => (
  <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
    <h2 className="text-2xl font-bold text-black mb-4">Why Choose Online Test Series?</h2>
    <p className="text-gray-700 leading-relaxed">
      Regular test practice helps candidates improve accuracy and confidence before exam.
    </p>
  </section>
);

export const InternalLinks = () => (
  <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
    <h2 className="text-xl font-bold text-black mb-4">Explore More</h2>
    <div className="grid gap-3 sm:grid-cols-2">
      <Link className="text-blue-700 hover:underline" to="/norcet-test-series">Test Series</Link>
      <Link className="text-blue-700 hover:underline" to="/norcet-mock-test">Mock Test</Link>
      <Link className="text-blue-700 hover:underline" to="/benefits-of-test-series">Benefits</Link>
      <Link className="text-blue-700 hover:underline" to="/norcet-test-series-faq">FAQ</Link>
    </div>
  </section>
);
