
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Search, MapPin, User, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import useMobile from '@/hooks/use-mobile';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMobile();
  const { toast } = useToast();
  
  const [scrolled, setScrolled] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [guests, setGuests] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  
  // Check if on homepage
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create search params
    const searchParams = new URLSearchParams();
    if (searchLocation) searchParams.set('location', searchLocation);
    if (guests) searchParams.set('guests', guests);
    
    // Redirect to search page with params
    navigate({
      pathname: '/search',
      search: searchParams.toString()
    });
    
    // Close search bar if on mobile
    if (isMobile) {
      setSearchBarOpen(false);
    }
  };
  
  const handleUserMenuClick = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg 
                className="w-8 h-8 text-airbnb-primary"
                viewBox="0 0 32 32" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                role="presentation" 
                focusable="false"
                fill="currentColor"
              >
                <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206c0 2.329 1.607 3.9 3.543 3.9 1.512 0 3.443-.92 5.438-3.153l.667-.702.667.701c2.075 2.153 4.02 3.156 5.445 3.156 1.936 0 3.543-1.571 3.543-3.9v-.209c-.015-.958-.196-1.64-.792-3.068l-.291-.71c-.994-2.3-5.094-10.891-7.039-14.703l-.516-.997C18.053 3.539 17.24 3 16 3zm-4.938 16.975c0 2.314 1.901 4.207 4.237 4.207 2.337 0 4.238-1.894 4.238-4.207 0-2.314-1.901-4.208-4.238-4.208-2.336 0-4.237 1.894-4.237 4.208z"></path>
              </svg>
              <span className="text-xl font-bold ml-2 hidden md:inline text-airbnb-primary">
                sribnb
              </span>
            </Link>
          </div>
          
          {/* Search bar - Desktop */}
          <div className={`hidden md:block relative z-10 ${isHomePage ? 'flex-1 max-w-2xl mx-8' : 'ml-4'}`}>
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <div className="relative flex-1 px-6 py-2">
                  <input
                    type="text"
                    placeholder="Search destinations in Sri Lanka"
                    className="w-full bg-transparent border-none focus:outline-none text-sm"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                  {searchLocation && (
                    <button 
                      type="button" 
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setSearchLocation('')}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
                
                <div className="border-l border-gray-200 px-6 py-2">
                  <input
                    type="number"
                    placeholder="Guests"
                    className="w-full bg-transparent border-none focus:outline-none text-sm"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                </div>
                
                <button 
                  type="submit"
                  className="bg-airbnb-primary text-white p-3 rounded-full mr-2 hover:bg-airbnb-primary/90 transition-colors"
                >
                  <Search size={16} />
                </button>
              </div>
            </form>
          </div>
          
          {/* Mobile search button */}
          <div className="md:hidden flex-1 flex justify-center">
            <button 
              onClick={() => setSearchBarOpen(!searchBarOpen)}
              className="border border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <Search size={16} className="mr-2 text-airbnb-primary" />
              <span className="text-sm">Where to?</span>
            </button>
          </div>
          
          {/* User menu */}
          <div className="relative flex items-center">
            <Button 
              variant="outline"
              className="rounded-full p-3 border-gray-200"
              onClick={() => toast({
                title: "Coming soon",
                description: "The wishlist feature will be available soon!",
              })}
            >
              <svg 
                className="w-5 h-5"
                viewBox="0 0 32 32" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                role="presentation" 
                focusable="false"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
              </svg>
            </Button>
            
            <div className="ml-2">
              <button 
                onClick={handleUserMenuClick}
                className="flex items-center border border-gray-200 rounded-full p-1 hover:shadow-md transition-shadow"
              >
                <Menu size={16} className="mr-2 ml-2" />
                <div className="bg-gray-500 text-white rounded-full p-1 mr-1">
                  <User size={16} />
                </div>
              </button>
              
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="py-2">
                    <Link 
                      to="#" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => {
                        setMenuOpen(false);
                        toast({
                          title: "Sign up coming soon",
                          description: "User registration will be available soon!",
                        });
                      }}
                    >
                      Sign up
                    </Link>
                    <Link 
                      to="#" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => {
                        setMenuOpen(false);
                        toast({
                          title: "Login coming soon",
                          description: "User login will be available soon!",
                        });
                      }}
                    >
                      Log in
                    </Link>
                  </div>
                  <div className="border-t border-gray-200 py-2">
                    <Link 
                      to="#" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => {
                        setMenuOpen(false);
                        toast({
                          title: "Coming soon",
                          description: "Host your home feature will be available soon!",
                        });
                      }}
                    >
                      Host your home
                    </Link>
                    <Link 
                      to="#" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => {
                        setMenuOpen(false);
                        toast({
                          title: "Help Center",
                          description: "Help Center will be available soon!",
                        });
                      }}
                    >
                      Help Center
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile search bar */}
      {isMobile && searchBarOpen && (
        <div className="bg-white p-4 shadow-md animate-fade-in">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airbnb-primary"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
              {searchLocation && (
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setSearchLocation('')}
                >
                  <X size={16} className="text-gray-400" />
                </button>
              )}
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users size={16} className="text-gray-400" />
              </div>
              <input
                type="number"
                placeholder="How many guests?"
                className="w-full pl-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-airbnb-primary"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <button 
                type="button" 
                className="text-airbnb-secondary font-medium"
                onClick={() => setSearchBarOpen(false)}
              >
                Cancel
              </button>
              
              <Button 
                type="submit"
                className="bg-airbnb-primary hover:bg-airbnb-primary/90"
              >
                <Search size={16} className="mr-2" />
                Search
              </Button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
