import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  CheckCircle, 
  Clock, 
  BarChart2, 
  Target, 
  BookOpen, 
  Award, 
  ArrowRight, 
  Zap,
  Shield,
  Smartphone
} from 'lucide-react';

// Enhanced Data Structure
const examData: Record<string, any> = {
  'norcet': {
    title: 'NORCET Test Series',
    fullName: 'AIIMS Nursing Officer Recruitment Common Eligibility Test',
    description: 'The gold standard for nursing aspirants. Master the 80:20 pattern with the most accurate test ecosystem in India.',
    stats: {
      tests: '200+',
      questions: '30,000+',
      users: '50k+',
      accuracy: '99%'
    },
    relatedLinks: [
      { text: 'RRB Staff Nurse', url: '/rrb-staff-nurse-test-series' },
      { text: 'ESIC Nursing Officer', url: '/esic-nursing-officer-test-series' }
    ],
    pattern: [
      { section: 'Nursing Subjects', questions: 180, marks: 180, time: '160 min' },
      { section: 'General Knowledge & Aptitude', questions: 20, marks: 20, time: '20 min' },
      { section: 'Total', questions: 200, marks: 200, time: '180 min' },
    ]
  },
  'rrb': {
    title: 'RRB Staff Nurse Test Series',
    fullName: 'Railway Recruitment Board Staff Nurse Exam',
    description: 'Crack the Railway Nursing exam with a balanced focus on Nursing (70%) and Non-Tech (30%) subjects.',
    stats: {
      tests: '150+',
      questions: '15,000+',
      users: '25k+',
      accuracy: '98%'
    },
    relatedLinks: [
      { text: 'AIIMS NORCET', url: '/norcet-test-series' },
      { text: 'State Staff Nurse', url: '/state-staff-nurse-test-series' }
    ],
    pattern: [
      { section: 'Professional Ability', questions: 70, marks: 70, time: '60 min' },
      { section: 'General Science', questions: 10, marks: 10, time: '10 min' },
      { section: 'Arithmetic & Reasoning', questions: 20, marks: 20, time: '20 min' },
      { section: 'Total', questions: 100, marks: 100, time: '90 min' },
    ]
  },
  'esic': {
    title: 'ESIC Nursing Officer Test Series',
    fullName: 'Employees State Insurance Corporation Nursing Officer',
    description: 'Specialized test series designed to cover the unique technical and aptitude requirements of ESIC hospitals.',
    stats: {
      tests: '100+',
      questions: '12,000+',
      users: '15k+',
      accuracy: '98%'
    },
    relatedLinks: [
      { text: 'RRB Staff Nurse', url: '/rrb-staff-nurse-test-series' },
      { text: 'NORCET', url: '/norcet-test-series' }
    ],
    pattern: [
      { section: 'Technical Subjects', questions: 100, marks: 100, time: '90 min' },
      { section: 'General Aptitude', questions: 25, marks: 25, time: '30 min' },
      { section: 'Total', questions: 125, marks: 125, time: '120 min' },
    ]
  },
  'state': {
    title: 'State Staff Nurse Test Series',
    fullName: 'State Public Service Commission Staff Nurse Exams',
    description: 'One subscription for all state exams: UPPSC, DSSSB, MP Vyapam, and CHO exams.',
    stats: {
      tests: '300+',
      questions: '25,000+',
      users: '40k+',
      accuracy: '95%'
    },
    relatedLinks: [
      { text: 'NORCET', url: '/norcet-test-series' },
      { text: 'Subject Wise Tests', url: '/subject-wise-nursing-test-series' }
    ],
    pattern: [
      { section: 'Nursing Core', questions: 'Varies', marks: 'Varies', time: '--' },
      { section: 'State GK / Language', questions: 'Varies', marks: 'Varies', time: '--' },
      { section: 'Total', questions: '100-200', marks: '100-200', time: '120-180 min' },
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
        title={`${data.title} - Premium Mock Tests & Analytics`}
        description={data.description}
        canonical={`/${type}-test-series`}
      />
      
      {/* 1. Hero Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <Link to="/" className="hover:text-black">Home</Link>
                <span>/</span>
                <span className="font-medium text-black">Test Series</span>
                <span>/</span>
                <span className="font-medium text-black">{data.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">{data.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">{data.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#packages" className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                  Start Practicing
                </a>
                <a href="#pattern" className="bg-white text-black border border-gray-300 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                  View Pattern
                </a>
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="hidden md:block bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-xs">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <div className="font-bold text-black">Exam Assured</div>
                  <div className="text-xs text-gray-500">Updated for 2025-26</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Content verified by top rankers and nursing faculties.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 2. Value Visualization (Stats) */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-black transition-colors">
            <div className="text-3xl font-bold text-black mb-1">{data.stats.questions}</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Questions</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-black transition-colors">
            <div className="text-3xl font-bold text-black mb-1">{data.stats.tests}</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Total Tests</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-black transition-colors">
            <div className="text-3xl font-bold text-black mb-1">{data.stats.accuracy}</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Pattern Accuracy</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-black transition-colors">
            <div className="text-3xl font-bold text-black mb-1">AI</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Performance Analytics</div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content Column */}
          <div className="lg:col-span-2">
            
            {/* 3. NASHTA Section */}
            <section className="mb-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-400 mr-2" />
                  <h2 className="text-2xl font-bold tracking-wide">NASHTA Series</h2>
                  <span className="ml-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded uppercase">Exclusive Series</span>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  <strong>NASHTA</strong> is your consistent dose of practice. 
                  Attempt fresh questions to keep your concepts sharp.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <li className="flex items-center text-sm text-gray-300"><CheckCircle className="h-4 w-4 mr-2 text-green-400" /> Topic-wise Targets</li>
                  <li className="flex items-center text-sm text-gray-300"><CheckCircle className="h-4 w-4 mr-2 text-green-400" /> Instant Rank Generation</li>
                  <li className="flex items-center text-sm text-gray-300"><CheckCircle className="h-4 w-4 mr-2 text-green-400" /> Detailed Explanations</li>
                  <li className="flex items-center text-sm text-gray-300"><CheckCircle className="h-4 w-4 mr-2 text-green-400" /> Mobile & Laptop Access</li>
                </ul>
                <div className="flex flex-wrap items-center gap-4">
                  <a href="https://qtestseries.nprep.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-bold py-3 px-6 rounded hover:bg-gray-100 transition-colors">
                    Start NASHTA Series
                  </a>
                  <div className="flex items-center text-gray-300 text-sm font-medium">
                    <Smartphone className="h-5 w-5 mr-2 text-yellow-500" />
                    Available on NPrep App
                  </div>
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white opacity-5 rounded-full"></div>
            </section>

            {/* 4. Exam Pattern Table */}
            <section id="pattern" className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Target className="h-6 w-6 mr-3" /> Exam Pattern Breakdown
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Section</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Questions</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Marks</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.pattern.map((row: any, idx: number) => (
                      <tr key={idx} className={idx === data.pattern.length - 1 ? "bg-gray-50 font-bold" : ""}>
                        <td className="px-6 py-4 text-sm text-gray-900">{row.section}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.questions}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.marks}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                * This pattern is strictly followed in all our full-length mock tests to ensure you build the right stamina.
              </p>
            </section>

            {/* 5. Features List */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6">Why Toppers Choose This Series</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><BarChart2 className="h-6 w-6 text-blue-600" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-black">Granular Analytics</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Don't just see your score. See time-per-question, weak topics, and comparison with top 10% students.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><BookOpen className="h-6 w-6 text-blue-600" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-black">Detailed Solutions</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Every question comes with a rationale. Our explanations act as mini-revision notes for the topic.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><Award className="h-6 w-6 text-blue-600" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-black">All India Rank</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Compete with thousands of serious aspirants. Know exactly where you stand before the actual exam.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><Clock className="h-6 w-6 text-blue-600" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-black">Real-Time Simulation</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Our interface mimics the actual TCS-iON exam screen used in AIIMS and RRB exams.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. FAQ Accordion */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-black text-sm mb-2">Can I re-attempt the tests?</h3>
                  <p className="text-sm text-gray-600">Yes, you can re-attempt tests to practice incorrect questions. However, the All India Rank is generated based on your first attempt only.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-black text-sm mb-2">Is the content updated for 2025?</h3>
                  <p className="text-sm text-gray-600">Absolutely. We update our question bank weekly based on the latest notifications from {data.fullName}.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-black text-sm mb-2">Does it cover non-nursing subjects?</h3>
                  <p className="text-sm text-gray-600">Yes, specifically for exams like <Link to="/rrb-staff-nurse-test-series" className="text-blue-700 underline">RRB Staff Nurse</Link> and DSSSB, we include dedicated sections for Math, Reasoning, and GK.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Right Sidebar - Packages */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Package Card 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Most Popular</div>
                <h3 className="text-xl font-bold text-black mb-2">Premium Test Series</h3>
                <p className="text-sm text-gray-600 mb-6">Full access to all mock tests, subject tests, and PYQs.</p>
                <a href="https://qtestseries.nprep.in" target="_blank" rel="noopener noreferrer" className="block w-full bg-black text-white text-center font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Unlock Now
                </a>
              </div>

              {/* Package Card 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-2">Subject Wise Pack</h3>
                <p className="text-sm text-gray-600 mb-4">Focus on specific weak areas like MSN or OBG.</p>
                <Link to="/subject-wise-nursing-test-series" className="block w-full bg-white text-black border border-gray-300 text-center font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  View Subjects
                </Link>
              </div>

              {/* Related Exams Widget */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-black text-sm uppercase mb-4">Also Prepare For</h4>
                <ul className="space-y-3">
                  {data.relatedLinks.map((link: any, idx: number) => (
                    <li key={idx}>
                      <Link to={link.url} className="flex items-center justify-between text-sm text-gray-600 hover:text-blue-700 group">
                        {link.text}
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-700" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamTestSeries;
