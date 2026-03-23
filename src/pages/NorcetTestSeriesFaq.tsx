import { SEO } from '../components/SEO';
import { ConversionCTA, InternalLinks, TrustSection } from '../components/ConversionSections';

const faqItems = [
  {
    question: 'Why should I attempt mock tests?',
    answer: 'Mock tests help improve exam performance by building consistency and speed.'
  },
  {
    question: 'Are online test series useful?',
    answer: 'Yes, they simulate real exam conditions and help improve time management.'
  },
  {
    question: 'How often should I attempt tests?',
    answer: 'Candidates can attempt tests weekly and gradually increase frequency before exam.'
  }
];

const NorcetTestSeriesFaq = () => {
  return (
    <>
      <SEO
        title="NORCET Test Series FAQ"
        description="Frequently asked questions about AIIMS NORCET test series and mock test practice."
        canonical="/norcet-test-series-faq"
      />

      <section className="py-16 text-center bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">NORCET Test Series FAQ</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Answers to common questions about online mock tests and NORCET practice strategy.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid gap-6">
          {faqItems.map((item) => (
            <div key={item.question} className="p-6 rounded-2xl shadow-md bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold mt-0 mb-3">{item.question}</h2>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
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

export default NorcetTestSeriesFaq;
