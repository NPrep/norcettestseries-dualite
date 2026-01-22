import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ChevronRight, FileText, BookOpen, Clock } from 'lucide-react';
import NursingInfo from '../components/NursingInfo';

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

      {/* Detailed Nursing Info Block (Homepage Only) */}
      <NursingInfo />
    </>
  );
};

export default Home;
