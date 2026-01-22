import { SEO } from '../components/SEO';
import { FileText, MapPin, Award, Train } from 'lucide-react';

const PYQ = () => {
  const choPapers = [
    { name: "MP CHO", link: "https://links.nprep.in/OT7EWR5r3Zb" },
    { name: "MP CHO Paper - 2022", link: "https://links.nprep.in/EKC5ZE7r3Zb" },
    { name: "Rajasthan CHO - 2024", link: "https://links.nprep.in/rocuf2uwYXb" },
    { name: "Rajasthan CHO-2023", link: "https://links.nprep.in/J4rAoKv3ZZb" },
    { name: "UK CHO - 2021", link: "https://links.nprep.in/3MAAJScs3Zb" },
    { name: "UP CHO", link: "https://links.nprep.in/7eNfOtC51Zb" },
    { name: "NHM Haryana CHO Official Paper (29 Jan 2023)", link: "https://links.nprep.in/SBr7raqs3Zb" },
  ];

  const norcetPapers = [
    { name: "NORCET - 3 (2022) Shift - 1", link: "https://links.nprep.in/f2X7pvwHMZb" },
    { name: "NORCET 3 - 2022 ; Shift-II", link: "https://links.nprep.in/K7VH496yQZb" },
    { name: "NORCET 7 prelims - (Sep) 2024", link: "https://links.nprep.in/aXOX5oZXPZb" },
    { name: "NORCET 3 - June 2023", link: "https://links.nprep.in/weaumiphIZb" },
    { name: "NORCET 20 Nov, Shift 2", link: "https://links.nprep.in/xkOMXfpAhZb" },
  ];

  const rrbPapers = [
    { name: "RRB Nursing Officer Official Papers", link: "https://links.nprep.in/pC4gYL3eSZb" },
  ];

  return (
    <>
      <SEO 
        title="Nursing Previous Year Question Papers & Tests"
        description="Download and attempt previous year question papers for AIIMS NORCET, RRB, CHO, and State Staff Nurse exams as mock tests."
        canonical="/nursing-pyq-and-tests"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">Nursing PYQ + Test Integration Hub</h1>
        <p className="text-lg text-gray-700 mb-8">
          Practicing Previous Year Questions (PYQs) in a test environment is the single most effective strategy for nursing exams. 
          We have converted actual exam papers into timed mock tests.
        </p>

        <div className="space-y-8">
          {/* NORCET Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4 flex items-center">
              <Award className="mr-2 h-5 w-5" /> AIIMS NORCET Papers
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Paper Name</th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {norcetPapers.map((paper, idx) => (
                    <tr key={idx} className="bg-white hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{paper.name}</td>
                      <td className="px-6 py-4 text-right">
                        <a 
                          href={paper.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium hover:underline"
                        >
                          Attempt Test
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RRB Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4 flex items-center">
              <Train className="mr-2 h-5 w-5" /> RRB Staff Nurse Papers
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Paper Name</th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {rrbPapers.map((paper, idx) => (
                    <tr key={idx} className="bg-white hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{paper.name}</td>
                      <td className="px-6 py-4 text-right">
                        <a 
                          href={paper.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium hover:underline"
                        >
                          Attempt Test
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CHO Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5" /> State CHO Official Papers
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Paper Name</th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {choPapers.map((paper, idx) => (
                    <tr key={idx} className="bg-white hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{paper.name}</td>
                      <td className="px-6 py-4 text-right">
                        <a 
                          href={paper.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium hover:underline"
                        >
                          Attempt Test
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PYQ;
