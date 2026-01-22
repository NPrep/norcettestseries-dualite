import { SEO } from '../components/SEO';
import { ExternalLink, Award, Train, Activity, Building2, Stethoscope, GraduationCap } from 'lucide-react';

const MockTests = () => {
  const mockSeries = [
    { 
      title: 'NORCET Test Series', 
      icon: Award,
      desc: 'Comprehensive AIIMS NORCET mock tests with 200 MCQs pattern.',
      link: 'https://links.nprep.in/XMYlOC6F5Zb' 
    },
    { 
      title: 'RRB Nursing Officer', 
      icon: Train,
      desc: 'Railway Recruitment Board specific technical and non-tech mocks.',
      link: 'https://links.nprep.in/pC4gYL3eSZb' 
    },
    { 
      title: 'AIIMS Nursing Officer', 
      icon: Stethoscope,
      desc: 'General AIIMS Nursing Officer recruitment exam practice.',
      link: 'https://links.nprep.in/u34K12Mq6Zb' 
    },
    { 
      title: 'KGMU Nursing Officer', 
      icon: Building2,
      desc: 'King George Medical University exam pattern mock tests.',
      link: 'https://links.nprep.in/NOfgXlxg6Zb' 
    },
    { 
      title: 'SGPGI Nursing Officer', 
      icon: Activity,
      desc: 'Sanjay Gandhi Postgraduate Institute exam series.',
      link: 'https://links.nprep.in/C0hk9CHg6Zb' 
    },
    { 
      title: 'PGIMER', 
      icon: GraduationCap,
      desc: 'Postgraduate Institute of Medical Education and Research mocks.',
      link: 'https://links.nprep.in/X6m4Q62F6Zb' 
    },
    { 
      title: 'AIIMS CRE', 
      icon: Award,
      desc: 'Common Recruitment Examination for AIIMS institutes.',
      link: 'https://links.nprep.in/VpwyAGbG6Zb' 
    },
  ];

  return (
    <>
      <SEO 
        title="Nursing Mock Tests - NORCET, RRB, KGMU & More"
        description="Attempt premium mock tests for AIIMS NORCET, RRB Staff Nurse, KGMU, SGPGI, and PGIMER. Real-time analysis and all-India rank."
        canonical="/nursing-mock-tests"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">Nursing Exam Mock Tests</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Select your target exam to access our analytics-driven test series. 
          Each series is designed to mirror the exact difficulty level and pattern of the respective examination.
        </p>

        {/* Exam Series Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSeries.map((series, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-black group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                    <series.icon className="h-6 w-6" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-black" />
                </div>
                
                <h3 className="font-bold text-xl text-black mb-2">{series.title}</h3>
                <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                  {series.desc}
                </p>
                
                <a 
                  href={series.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-black font-medium py-2.5 rounded border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  Attempt Test Series
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default MockTests;
