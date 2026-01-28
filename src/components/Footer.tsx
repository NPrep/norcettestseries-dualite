import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/nursing-mock-tests" className="text-sm text-gray-600 hover:text-black hover:underline">Mock Tests</Link></li>
              <li><Link to="/nursing-pyq-and-tests" className="text-sm text-gray-600 hover:text-black hover:underline">Previous Year Papers</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-black hover:underline">Preparation Blog</Link></li>
              <li><Link to="/nursing-officer-exams-in-india" className="text-sm text-gray-600 hover:text-black hover:underline">All Nursing Exams</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 6377 6391 69</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} NORCET Test Series. All rights reserved.
              </div>
              <div className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                In association with NPrep
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
