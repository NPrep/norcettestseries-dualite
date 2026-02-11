import { SEO } from '../components/SEO';
import { CheckCircle } from 'lucide-react';

const Courses = () => {
  return (
    <>
      <SEO 
        title="Nursing Officer Courses - NORCET & State Exams"
        description="Comprehensive video courses and study material for AIIMS NORCET, RRB Staff Nurse, and State Nursing Officer exams."
        canonical="/courses"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Nursing Officer Courses</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Structured learning programs designed by top faculties. Combine video lectures with our premium test series for guaranteed results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course 1: Test Series - Blue Theme */}
          <div className="bg-white border-t-4 border-blue-600 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col">
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Test Series</h2>
              <p className="text-blue-600 font-medium text-sm mb-6 uppercase tracking-wide">Practice Focused</p>
              
              <ul className="space-y-4 mb-6 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" /> 30,000+ Questions - QBank (Topic Wise)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" /> Each Question with Explanation</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" /> Subject Wise Tests</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" /> Regular Test Series</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" /> Previous Year Question Papers</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-blue-500 flex-shrink-0" /> IBQs, Clinical Scenario Questions</li>
              </ul>
            </div>
            <div className="p-6 pt-0 mt-auto bg-gray-50 border-t border-gray-100">
              <a 
                href="https://qtestseries.nprep.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition-colors mt-4"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Course 2: Rapid Revision 2.0 - Red Theme */}
          <div className="bg-white border-t-4 border-red-600 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col">
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Rapid Revision 2.0</h2>
              <p className="text-red-600 font-medium text-sm mb-6 uppercase tracking-wide">Crash Course</p>
              
              <ul className="space-y-4 mb-6 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" /> NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" /> Complete Nursing Syllabus in 100 Hours</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" /> Previous Year Papers - with Explanations</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" /> Regular Test Series</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" /> 30,000+ Questions - QBank (Topic Wise)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" /> Subject Wise Tests</li>
              </ul>
            </div>
            <div className="p-6 pt-0 mt-auto bg-gray-50 border-t border-gray-100">
              <a 
                href="https://rapid.nprep.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition-colors mt-4"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Course 3: GOLD Batch - Gold/Yellow Theme */}
          <div className="bg-white border-t-4 border-yellow-500 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col">
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">GOLD Batch</h2>
              <p className="text-yellow-600 font-medium text-sm mb-6 uppercase tracking-wide">Premium Comprehensive</p>
              
              <ul className="space-y-4 mb-6 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" /> NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" /> 900 Hours - Basic to Advanced Theory (with Clinicals)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" /> 100 Hrs - Rapid Revision 2.0</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" /> 30,000 Questions - QBank (Topic Wise)</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" /> Regular Test Series</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" /> Previous Year Papers</li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" /> Subject Wise Papers</li>
              </ul>
            </div>
            <div className="p-6 pt-0 mt-auto bg-gray-50 border-t border-gray-100">
              <a 
                href="https://gold.nprep.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-yellow-600 text-white font-bold py-3 rounded hover:bg-yellow-700 transition-colors mt-4"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
