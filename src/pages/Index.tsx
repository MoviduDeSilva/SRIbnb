
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CategoryFilter from '@/components/ui/CategoryFilter';
import PropertyCard from '@/components/ui/PropertyCard';
import { properties, categories } from '@/lib/data';
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  
  // Filter properties based on selected category
  const filteredProperties = selectedCategory
    ? properties.filter(
        property => property.type === selectedCategory || 
                   (selectedCategory === 'amazing-views' && property.featured)
      )
    : properties;

  const handleFilterChange = (categoryId: string | null) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    // Simulate loading state for smoother transitions
    setTimeout(() => setIsLoading(false), 400);
  };
  
  useEffect(() => {
    // Hide welcome banner after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSearch = (location: string) => {
    navigate({
      pathname: '/search',
      search: `?location=${encodeURIComponent(location)}`
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-10">
        <div className="container-custom">
          {/* Welcome banner */}
          {showWelcome && (
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl mb-8 animate-fade-in relative">
              <button 
                className="absolute top-2 right-2 text-white/80 hover:text-white"
                onClick={() => setShowWelcome(false)}
              >
                ✕
              </button>
              <h1 className="text-2xl font-bold mb-2">Welcome to SriBnB</h1>
              <p className="mb-4">Discover the beauty of Sri Lanka - from pristine beaches to misty mountains and ancient cities.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button 
                  onClick={() => handleSearch('Colombo')}
                  className="bg-white text-blue-700 hover:bg-white/90"
                >
                  Explore Colombo
                </Button>
                <Button 
                  onClick={() => handleSearch('Galle')}
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  Visit Galle Fort
                </Button>
              </div>
            </div>
          )}
          
          {/* Category filters */}
          <div className="mb-8 border-b border-gray-200 pb-4">
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleFilterChange}
            />
          </div>
          
          {/* Featured destinations */}
          {!selectedCategory && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">Featured destinations in Sri Lanka</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  className="relative h-60 rounded-xl overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => handleSearch('Colombo')}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1580674684089-3f35144ea861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Colombo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold">Colombo</h3>
                    <p className="text-white/90 text-sm">Sri Lanka's vibrant capital</p>
                  </div>
                </div>
                
                <div 
                  className="relative h-60 rounded-xl overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => handleSearch('Galle')}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1578019227736-3e5942b7af2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Galle" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold">Galle</h3>
                    <p className="text-white/90 text-sm">Historic colonial fort town</p>
                  </div>
                </div>
                
                <div 
                  className="relative h-60 rounded-xl overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => handleSearch('Ella')}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1603862018325-95cb1ea9f919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Ella" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold">Ella</h3>
                    <p className="text-white/90 text-sm">Scenic mountain village</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Property grid */}
          <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            {filteredProperties.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20">
                <h2 className="text-2xl font-medium mb-4">No matches found</h2>
                <p className="text-airbnb-light text-center max-w-md">
                  Try adjusting your search by removing filters, or check out our other amazing properties.
                </p>
                <button 
                  className="mt-6 px-6 py-3 bg-airbnb-primary text-white rounded-lg hover:bg-airbnb-primary/90 transition-colors"
                  onClick={() => setSelectedCategory(null)}
                >
                  Remove all filters
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  {selectedCategory 
                    ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} in Sri Lanka` 
                    : 'All properties in Sri Lanka'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
