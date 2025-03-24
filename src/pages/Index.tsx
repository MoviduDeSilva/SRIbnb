
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CategoryFilter from '@/components/ui/CategoryFilter';
import PropertyCard from '@/components/ui/PropertyCard';
import { properties, categories } from '@/lib/data';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-10">
        <div className="container-custom">
          {/* Category filters */}
          <div className="mb-8 border-b border-gray-200 pb-4">
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleFilterChange}
            />
          </div>
          
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
