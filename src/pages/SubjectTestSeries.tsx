import { SEO } from '../components/SEO';
import { Book, Microscope, Baby, HeartPulse, Brain, Users, Utensils, FileText } from 'lucide-react';

const subjects = [
  { 
    id: 'fon', 
    name: 'Fundamentals of Nursing', 
    icon: Book, 
    desc: 'Basic nursing procedures, ethics, and patient care.',
    link: 'https://links.nprep.in/uiXjRG1TPXb'
  },
  { 
    id: 'msn', 
    name: 'Medical Surgical Nursing', 
    icon: Microscope, 
    desc: 'Disease conditions, pathophysiology, and management.',
    link: 'https://links.nprep.in/hm3aQhddIZb'
  },
  { 
    id: 'obg', 
    name: 'Obstetrics & Gynecology', 
    icon: Baby, 
    desc: 'Maternal health, labor, and midwifery nursing.',
    link: 'https://links.nprep.in/cpRfJAdQPYb'
  },
  { 
    id: 'chn', 
    name: 'Community Health Nursing', 
    icon: Users, 
    desc: 'Public health, epidemiology, and health programs.',
    link: 'https://links.nprep.in/vGYx4MAtWZb'
  },
  { 
    id: 'pedia', 
    name: 'Pediatric Nursing', 
    icon: HeartPulse, 
    desc: 'Child health nursing, growth, and development.',
    link: 'https://links.nprep.in/NbTlCc02ZZb'
  },
  { 
    id: 'psychiatry', 
    name: 'Psychiatry', 
    icon: Brain, 
    desc: 'Mental health nursing and behavioral sciences.',
    link: 'https://links.nprep.in/mEhGXn27ZZb'
  },
  { 
    id: 'nutrition', 
    name: 'Nutrition', 
    icon: Utensils, 
    desc: 'Dietary requirements, nutrients, and therapeutic diets.',
    link: 'https://links.nprep.in/xqzNDqLI1Zb'
  },
  { 
    id: 'research', 
    name: 'Research', 
    icon: FileText, 
    desc: 'Nursing research methodology and statistics.',
    link: 'https://links.nprep.in/IuYQSDcC6Zb'
  }
];

const SubjectTestSeries = () => {
  return (
    <>
      <SEO 
        title="Subject Wise Nursing Test Series - Topic Specific Practice"
        description="Master individual nursing subjects with our focused test series. Practice Fundamentals, MSN, OBG, Pediatrics, and more for NORCET and RRB exams."
        canonical="/subject-wise-nursing-test-series"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Subject Wise Nursing Test Series</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Strengthen your weak areas by practicing subject-specific tests. Ideal for building conceptual clarity before attempting full-length mocks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((sub) => (
            <div key={sub.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 rounded-lg mr-4">
                  <sub.icon className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{sub.name}</h2>
              </div>
              <p className="text-gray-600 mb-6 min-h-[48px]">{sub.desc}</p>
              
              <div className="pt-4">
                <a 
                  href={sub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-50 hover:bg-gray-100 text-black font-medium py-2 rounded border border-gray-200 transition-colors"
                >
                  Start Practice
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubjectTestSeries;
