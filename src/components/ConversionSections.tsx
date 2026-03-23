import { Link } from 'react-router-dom';

export const ConversionCTA = () => (
  <section className="py-12 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mt-0 mb-3 text-black">Start NORCET Test Series on NPrep</h2>
        <ul className="space-y-2 text-gray-600">
          <li>• AIIMS-level mock tests</li>
          <li>• real exam pattern questions</li>
          <li>• detailed performance analysis</li>
          <li>• All India ranking</li>
        </ul>
        <a
          href="https://nprep.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Start Now
        </a>
      </div>
    </div>
  </section>
);

export const TrustSection = () => (
  <section className="py-12 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mt-0 mb-3 text-black">Why Choose Online Test Series?</h2>
        <p className="text-gray-600 leading-relaxed">
          Regular test practice helps candidates improve accuracy and confidence before exam.
          Online analytics also make it easier to track consistency and improve weak areas quickly.
        </p>
      </div>
    </div>
  </section>
);

export const InternalLinks = () => (
  <section className="py-12 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mt-0 mb-3 text-black">Explore Test Series Pages</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/norcet-test-series" className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-200 hover:border-blue-300">
          <h3 className="text-xl font-semibold mb-2 text-black">NORCET Test Series</h3>
          <p className="text-gray-600">View full-length tests, chapter-wise tests, and analytics details.</p>
        </Link>
        <Link to="/norcet-mock-test" className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-200 hover:border-blue-300">
          <h3 className="text-xl font-semibold mb-2 text-black">NORCET Mock Test</h3>
          <p className="text-gray-600">Practice exam-like mock tests to improve real exam readiness.</p>
        </Link>
        <Link to="/benefits-of-test-series" className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-200 hover:border-blue-300">
          <h3 className="text-xl font-semibold mb-2 text-black">Benefits of Test Series</h3>
          <p className="text-gray-600">Understand how regular test practice improves score and confidence.</p>
        </Link>
        <Link to="/norcet-test-series-faq" className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-200 hover:border-blue-300">
          <h3 className="text-xl font-semibold mb-2 text-black">NORCET Test Series FAQ</h3>
          <p className="text-gray-600">Get quick answers before selecting your test series platform.</p>
        </Link>
      </div>
    </div>
  </section>
);
