
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white pt-8 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">AirCover</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Safety information</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Supporting people with disabilities</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Cancellation options</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Airbnb.org: disaster relief housing</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Combating discrimination</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Sustainability</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Airbnb your home</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">AirCover for Hosts</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Hosting resources</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Community forum</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Hosting responsibly</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Airbnb</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Newsroom</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">New features</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Investors</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Gift cards</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-500">© {currentYear} Airbnb, Inc.</p>
            <div className="flex space-x-4">
              <Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Privacy</Link>
              <span className="text-gray-500">·</span>
              <Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Terms</Link>
              <span className="text-gray-500">·</span>
              <Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors">Sitemap</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <Link to="#" className="text-sm font-medium hover:text-airbnb-primary transition-colors">English (US)</Link>
              <Link to="#" className="text-sm font-medium hover:text-airbnb-primary transition-colors">$ USD</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="#" className="text-sm text-gray-500 hover:text-airbnb-primary transition-colors flex items-center">
                <Heart size={16} className="mr-1" /> Lovable Clone
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
