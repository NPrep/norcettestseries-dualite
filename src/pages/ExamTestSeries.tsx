import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CheckCircle, AlertCircle } from 'lucide-react';

// This component handles /norcet-test-series, /rrb-staff-nurse-test-series, etc.
// In a real app, data would be fetched based on the route or ID.
// Here we simulate content based on the URL parameter or prop.

const examData: Record<string, any> = {
  'norcet': {
    title: 'NORCET Test Series',
    fullName: 'AIIMS Nursing Officer Recruitment Common Eligibility Test',
    description: 'The most comprehensive NORCET test series covering 200 MCQs pattern, negative marking analysis, and subject-wise breakdown.',
    pattern: [
      { section: 'Nursing Subjects', questions: 180, marks: 180 },
      { section: 'General Knowledge & Aptitude', questions: 20, marks: 20 },
      { section: 'Total', questions: 200, marks: 200 },
    ]
  },
  'rrb': {
    title: 'RRB Staff Nurse Test Series',
    fullName: 'Railway Recruitment Board Staff Nurse Exam',
    description: 'Specialized RRB Staff Nurse mock tests focusing on Professional Ability, General Science, Arithmetic, and General Awareness.',
    pattern: [
      { section: 'Professional Ability', questions: 70, marks: 70 },
      { section: 'General Science', questions: 10, marks: 10 },
      { section: 'General Arithmetic', questions: 10, marks: 10 },
      { section: 'General Awareness', questions: 10, marks: 10 },
      { section: 'Total', questions: 100, marks: 100 },
    ]
  },
  'esic': {
    title: 'ESIC Nursing Officer Test Series',
    fullName: 'Employees State Insurance Corporation Nursing Officer',
    description: 'High-yield ESIC Nursing Officer test series designed to cover technical nursing subjects and general aptitude.',
    pattern: [
      { section: 'Technical Subjects', questions: 100, marks: 100 },
      { section: 'General Aptitude', questions: 25, marks: 25 },
      { section: 'Total', questions: 125, marks: 125 },
    ]
  },
  'state': {
    title: 'State Staff Nurse Test Series',
    fullName: 'State Public Service Commission Staff Nurse Exams',
    description: 'Versatile test series for UPPSC, DSSSB, MP Vyapam, and other state-level nursing officer examinations.',
    pattern: [
      { section: 'Nursing Core', questions: 'Varies', marks: 'Varies' },
      { section: 'State GK / Language', questions: 'Varies', marks: 'Varies' },
      { section: 'Total', questions: '100-200', marks: '100-200' },
    ]
  }
};

interface Props {
  type: 'norcet' | 'rrb' | 'esic' | 'state';
}

const ExamTestSeries = ({ type }: Props) => {
  const data = examData[type];

  return (
    <>
      <SEO 
        title={`${data.title} - Mock Tests & Exam Pattern Practice`}
        description={data.description}
        canonical={`/${type}-test-series`}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Exam Authority Series</span>
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-4">{data.title}</h1>
          <p className="text-xl text-gray-700 leading-relaxed">{data.description}</p>
        </div>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Overview: {data.fullName}</h2>
          <p className="text-gray-700 mb-4">
            Preparing for the {data.fullName} requires a strategic approach. Our <strong>{data.title}</strong> is designed to bridge the gap between theoretical knowledge and exam-day performance. 
            Unlike generic question banks, NPrep's test ecosystem focuses on the specific difficulty level and question distribution of the actual exam.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-3">Why this Test Series matters:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span className="text-gray-700"><strong>Pattern Accuracy:</strong> Questions aligned with the latest syllabus.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span className="text-gray-700"><strong>Difficulty Mapping:</strong> Includes easy, moderate, and high-difficulty questions.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span className="text-gray-700"><strong>Detailed Solutions:</strong> Explanations that act as revision notes.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Exam Pattern Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Exam Pattern Alignment</h2>
          <p className="text-gray-700 mb-4">
            Our mock tests strictly follow the official marking scheme and section distribution.
          </p>
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Section</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Questions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marks</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.pattern.map((row: any, idx: number) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.section}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.questions}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Available Tests */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Available Tests in Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Full-Length Mocks</h3>
              <p className="text-sm text-gray-600 mb-4">Complete exam simulation with time limits.</p>
              <button className="text-blue-700 font-medium hover:underline">View Mocks &rarr;</button>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Subject-Wise Tests</h3>
              <p className="text-sm text-gray-600 mb-4">Focused practice on specific nursing topics.</p>
              <Link to="/subject-wise-nursing-test-series" className="text-blue-700 font-medium hover:underline">View Subjects &rarr;</Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Is this test series free?</h3>
              <p className="text-gray-700 text-sm">We offer free mini-mock tests for every exam category. Full-length premium series are available for intensive preparation.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How current are the questions?</h3>
              <p className="text-gray-700 text-sm">All questions are updated based on the latest {data.fullName} notifications and previous year trends.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Can I attempt tests on mobile?</h3>
              <p className="text-gray-700 text-sm">Yes, our platform is fully responsive and optimized for mobile devices.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExamTestSeries;
