import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  ChevronRight, 
  FileText, 
  BookOpen, 
  Clock, 
  BarChart2, 
  Monitor, 
  Award, 
  CheckCircle, 
  Brain,
  Zap,
  Smartphone
} from 'lucide-react';

const Home = () => {
  return (
    <>
      <SEO 
        title="Nursing Officer Test Series – NORCET, RRB, ESIC & State Exam Mock Tests"
        description="India's leading authority for Nursing Officer Test Series. Practice exam-pattern accurate mock tests for NORCET, RRB, ESIC, and State Staff Nurse exams."
        canonical="/"
      />
      
      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
            Nursing Officer Test Series – NORCET, RRB, ESIC & State Exam Mock Tests
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Comprehensive, data-driven test ecosystem for nursing aspirants. 
            Access full-length mocks, subject-wise practice, and sectional tests designed to mirror real exam patterns.
          </p>
        </div>
      </section>

      {/* Featured Test Categories */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black mb-8 border-l-4 border-black pl-4">Featured Test Series</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "NORCET Test Series", 
              desc: "AIIMS Nursing Officer Recruitment Common Eligibility Test mocks.",
              link: "/norcet-test-series"
            },
            { 
              title: "RRB Staff Nurse", 
              desc: "Railway Recruitment Board specific technical and non-tech mocks.",
              link: "/rrb-staff-nurse-test-series"
            },
            { 
              title: "ESIC Nursing Officer", 
              desc: "Employees' State Insurance Corporation exam pattern tests.",
              link: "/esic-nursing-officer-test-series"
            },
            { 
              title: "Subject-Wise Tests", 
              desc: "Master specific subjects like Anatomy, MSN, and Pediatrics.",
              link: "/subject-wise-nursing-test-series"
            },
            { 
              title: "State Staff Nurse", 
              desc: "Dedicated series for UP, Bihar, Rajasthan, and MP exams.",
              link: "/state-staff-nurse-test-series"
            },
            { 
              title: "Previous Year Papers", 
              desc: "Practice with actual questions from past 10 years.",
              link: "/nursing-pyq-and-tests"
            }
          ].map((item) => (
            <Link key={item.title} to={item.link} className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-black transition-colors">
              <h3 className="text-lg font-bold text-black group-hover:text-blue-900 mb-2 flex items-center justify-between">
                {item.title}
                <ChevronRight size={16} className="text-gray-400 group-hover:text-black" />
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section: Why Test Series */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Why Test Series are Critical for Nursing Exams</h2>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  Success in nursing officer exams like NORCET and RRB is not just about knowledge; it is about speed, accuracy, and temperament. A structured test series bridges the gap between studying and performing.
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start">
                    <Clock className="flex-shrink-0 h-5 w-5 text-gray-500 mt-1 mr-3" />
                    <span><strong>Time Management:</strong> Real-time simulation helps you manage the 90-120 minute pressure effectively.</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="flex-shrink-0 h-5 w-5 text-gray-500 mt-1 mr-3" />
                    <span><strong>Pattern Familiarity:</strong> Our mocks replicate the exact question distribution of AIIMS and other boards.</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="flex-shrink-0 h-5 w-5 text-gray-500 mt-1 mr-3" />
                    <span><strong>Negative Marking Control:</strong> Regular practice reduces guesswork and improves your precision score.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Types of Tests Available</h2>
              <div className="overflow-hidden border border-gray-200 rounded-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Focus Area</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ideal For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Full-Length Mocks</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Complete Syllabus</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Exam Readiness</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Subject-Wise</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Specific Subjects</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Concept Building</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Sectional Tests</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Topic Blocks</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Weak Area Improvement</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">PYQ Tests</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Past Papers</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Pattern Analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NPrep Test Series Features */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">The NPrep Advantage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powered by NPrep, our platform offers the most comprehensive testing ecosystem for nursing aspirants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">30,000+ Questions</h3>
              <p className="text-gray-600">Largest QBank covering every topic from FON to MSN with detailed rationales.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Monitor className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Real Exam Interface</h3>
              <p className="text-gray-600">Practice on the exact TCS-iON interface used in AIIMS NORCET exams.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <BarChart2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">AI Performance Analytics</h3>
              <p className="text-gray-600">Granular analysis of your strong & weak areas, time management, and accuracy.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">All India Ranking</h3>
              <p className="text-gray-600">Compete with 50,000+ aspirants and know your standing before the real exam.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <Brain className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Clinical Scenarios</h3>
              <p className="text-gray-600">Special focus on new pattern clinical vignette questions asked in recent NORCETs.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Regular Practice</h3>
              <p className="text-gray-600">Consistent targets and tests to keep your preparation disciplined and on track.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NASHTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center bg-yellow-500 text-black font-bold px-3 py-1 rounded mb-4 uppercase tracking-wide text-sm">
                <Zap className="h-4 w-4 mr-2" /> Exclusive Feature
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                NASHTA Series
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                NASHTA is a specialized, high-stakes mock test series designed by NPrep specifically for NORCET and nursing officer exam candidates. 
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                It simulates real exam conditions, providing AI-based performance analytics to help candidates assess their ranking, accuracy, and readiness for AIIMS-level questions.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="https://qtestseries.nprep.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start NASHTA Series
                </a>
                <div className="flex items-center text-gray-300 text-sm font-medium">
                  <Smartphone className="h-5 w-5 mr-2 text-yellow-500" />
                  Available on NPrep App
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-700 p-3 rounded-lg mr-4">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Topic-wise Targets</h4>
                      <p className="text-gray-400 text-sm">Fresh set of questions to keep you sharp and exam-ready.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-700 p-3 rounded-lg mr-4">
                      <BarChart2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Live Analytics</h4>
                      <p className="text-gray-400 text-sm">Instant results with subject-wise breakdown and negative marking analysis.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-700 p-3 rounded-lg mr-4">
                      <Award className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Leaderboard</h4>
                      <p className="text-gray-400 text-sm">See where you stand among thousands of serious aspirants.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="nprep-testimonial-cta">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Hear from real students</h2>
            <a className="cta" href="https://nprep.in/blogs?filter=NORCET+Success+Story" target="_blank" rel="noopener noreferrer">
              Read verified success stories on NPrep
            </a>
          </div>
        </div>
      </section>

      {/* Quick Exam Links Table */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black mb-6">Quick Access: Nursing Officer Exams</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="p-6 hover:bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Central Govt</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/norcet-test-series" className="text-blue-700 hover:underline">AIIMS NORCET</Link></li>
                <li><Link to="/rrb-staff-nurse-test-series" className="text-blue-700 hover:underline">RRB Staff Nurse</Link></li>
                <li><Link to="/esic-nursing-officer-test-series" className="text-blue-700 hover:underline">ESIC Nursing Officer</Link></li>
                <li><Link to="/nursing-officer-exams-in-india" className="text-blue-700 hover:underline">DSSSB Nursing Officer</Link></li>
              </ul>
            </div>
            <div className="p-6 hover:bg-gray-50">
              <h3 className="font-bold text-lg mb-2">State Govt (North)</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/state-staff-nurse-test-series" className="text-blue-700 hover:underline">UPPSC Staff Nurse</Link></li>
                <li><Link to="/state-staff-nurse-test-series" className="text-blue-700 hover:underline">Rajasthan CHO</Link></li>
                <li><Link to="/state-staff-nurse-test-series" className="text-blue-700 hover:underline">MP Vyapam Nurse</Link></li>
                <li><Link to="/state-staff-nurse-test-series" className="text-blue-700 hover:underline">HSSC Staff Nurse</Link></li>
              </ul>
            </div>
            <div className="p-6 hover:bg-gray-50">
              <h3 className="font-bold text-lg mb-2">State Govt (South)</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/state-staff-nurse-test-series" className="text-blue-700 hover:underline">Kerala PSC Nurse</Link></li>
                <li><Link to="/state-staff-nurse-test-series" className="text-blue-700 hover:underline">TN MRB Nurse</Link></li>
                <li><Link to="/state-staff-nurse-test-series" className="text-blue-700 hover:underline">KPSC Staff Nurse</Link></li>
                <li><Link to="/state-staff-nurse-test-series" className="text-blue-700 hover:underline">AP MHSRB</Link></li>
              </ul>
            </div>
            <div className="p-6 hover:bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Specialized</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/subject-wise-nursing-test-series" className="text-blue-700 hover:underline">MNS (Military Nursing)</Link></li>
                <li><Link to="/subject-wise-nursing-test-series" className="text-blue-700 hover:underline">JIPMER Nursing</Link></li>
                <li><Link to="/subject-wise-nursing-test-series" className="text-blue-700 hover:underline">PGIMER Nursing</Link></li>
                <li><Link to="/subject-wise-nursing-test-series" className="text-blue-700 hover:underline">CHO Exams</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
