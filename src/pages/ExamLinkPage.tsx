import { Link, useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';

type ExamEntry = {
  name: string;
  group: string;
  region: string;
  parentLink: string;
};

const examMap: Record<string, ExamEntry> = {
  'uppsc-staff-nurse': { name: 'UPPSC Staff Nurse', group: 'State Govt (North)', region: 'Uttar Pradesh', parentLink: '/state-staff-nurse-test-series' },
  'rajasthan-cho': { name: 'Rajasthan CHO', group: 'State Govt (North)', region: 'Rajasthan', parentLink: '/state-staff-nurse-test-series' },
  'mp-vyapam-nurse': { name: 'MP Vyapam Nurse', group: 'State Govt (North)', region: 'Madhya Pradesh', parentLink: '/state-staff-nurse-test-series' },
  'hssc-staff-nurse': { name: 'HSSC Staff Nurse', group: 'State Govt (North)', region: 'Haryana', parentLink: '/state-staff-nurse-test-series' },
  'kerala-psc-nurse': { name: 'Kerala PSC Nurse', group: 'State Govt (South)', region: 'Kerala', parentLink: '/state-staff-nurse-test-series' },
  'tn-mrb-nurse': { name: 'TN MRB Nurse', group: 'State Govt (South)', region: 'Tamil Nadu', parentLink: '/state-staff-nurse-test-series' },
  'kpsc-staff-nurse': { name: 'KPSC Staff Nurse', group: 'State Govt (South)', region: 'Karnataka', parentLink: '/state-staff-nurse-test-series' },
  'ap-mhsrb': { name: 'AP MHSRB', group: 'State Govt (South)', region: 'Andhra Pradesh', parentLink: '/state-staff-nurse-test-series' },
  'mns-military-nursing': { name: 'MNS (Military Nursing)', group: 'Specialized', region: 'National', parentLink: '/subject-wise-nursing-test-series' },
  'jipmer-nursing': { name: 'JIPMER Nursing', group: 'Specialized', region: 'Puducherry', parentLink: '/subject-wise-nursing-test-series' },
  'pgimer-nursing': { name: 'PGIMER Nursing', group: 'Specialized', region: 'Chandigarh', parentLink: '/subject-wise-nursing-test-series' },
  'cho-exams': { name: 'CHO Exams', group: 'Specialized', region: 'Multiple States', parentLink: '/subject-wise-nursing-test-series' }
};

const ExamLinkPage = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const exam = examMap[slug];

  if (!exam) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Exam page not found</h1>
        <Link to="/" className="text-blue-700 hover:underline">Back to Home</Link>
      </section>
    );
  }

  return (
    <>
      <SEO title={`${exam.name} Test Series`} description={`Explore ${exam.name} test series with region-specific prep support.`} canonical={`/${slug}`} />
      <section className="max-w-5xl mx-auto px-4 py-14">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span>{exam.group}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{exam.region}</span>
        </nav>
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-blue-700 font-semibold mb-2">{exam.group}</p>
          <h1 className="text-3xl font-bold text-black mb-3">{exam.name}</h1>
          <p className="text-gray-700 mb-6">
            This exam page is organized with regional context for better navigation and SEO. Continue to the full test series hub to start practice sets, mock tests, and PYQ sessions.
          </p>
          <Link to={exam.parentLink} className="inline-flex items-center rounded-lg bg-black text-white px-5 py-2.5 font-semibold hover:bg-gray-800 transition-colors">
            Explore related test series
          </Link>
        </div>
      </section>
    </>
  );
};

export default ExamLinkPage;
