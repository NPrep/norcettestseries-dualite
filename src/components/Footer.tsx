import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nprep-disclaimer-banner">
          Disclaimer: This is an independent educational portal and not an official government website. In association with NPrep.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              NORCET Test Series is focused on online test series awareness, mock test practice, and performance improvement for NORCET aspirants.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Test Series Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/norcet-test-series" className="text-sm text-gray-600 hover:text-black hover:underline">NORCET Test Series</Link></li>
              <li><Link to="/norcet-mock-test" className="text-sm text-gray-600 hover:text-black hover:underline">NORCET Mock Test</Link></li>
              <li><Link to="/benefits-of-test-series" className="text-sm text-gray-600 hover:text-black hover:underline">Benefits of Test Series</Link></li>
              <li><Link to="/norcet-test-series-faq" className="text-sm text-gray-600 hover:text-black hover:underline">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">NPrep</h3>
            <ul className="space-y-2">
              <li><a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black hover:underline">Start Test Series</a></li>
              <li><a href="https://nprep.in/login" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-black hover:underline">NPrep login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+916377639169" className="hover:underline">+91 6377 6391 69</a>
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
