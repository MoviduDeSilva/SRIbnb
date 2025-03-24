
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/ui/PropertyCard';
import { properties } from '@/lib/data';
import { Calendar, MapPin, Bed, Users, Filter, X } from 'lucide-react';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const { toast } = useToast();

  const location = searchParams.get('location') || '';
  const guests = searchParams.get('guests') || '';
  
  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      let results = [...properties];
      
      // Filter by location if provided
      if (location) {
        results = results.filter(property => 
          property.location.city.toLowerCase().includes(location.toLowerCase()) || 
          property.location.country.toLowerCase().includes(location.toLowerCase())
        );
      }
      
      // Filter by number of guests if provided
      if (guests) {
        const guestCount = parseInt(guests);
        if (!isNaN(guestCount)) {
          results = results.filter(property => property.capacity.guests >= guestCount);
        }
      }
      
      // Filter by price range
      results = results.filter(
        property => property.price >= priceRange[0] && property.price <= priceRange[1]
      );
      
      setFilteredProperties(results);
      setLoading(false);
    }, 500);
  }, [location, guests, priceRange]);
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };
  
  const clearFilters = () => {
    setSearchParams({});
    setPriceRange([0, 500]);
    toast({
      title: "Filters cleared",
      description: "All search filters have been reset.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-10">
        <div className="container-custom">
          {/* Search header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h1 className="text-2xl font-semibold">
                {location ? `Places to stay in ${location}` : "All places to stay in Sri Lanka"}
              </h1>
              
              <div className="flex mt-2 sm:mt-0">
                <Button 
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={18} />
                  Filters
                </Button>
                
                {(location || guests || priceRange[0] > 0 || priceRange[1] < 500) && (
                  <Button 
                    variant="ghost"
                    className="ml-2 flex items-center gap-2"
                    onClick={clearFilters}
                  >
                    <X size={18} />
                    Clear
                  </Button>
                )}
              </div>
            </div>
            
            {/* Active filters */}
            {(location || guests || priceRange[0] > 0 || priceRange[1] < 500) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {location && (
                  <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {location}
                  </div>
                )}
                
                {guests && (
                  <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                    <Users size={14} className="mr-1" />
                    {guests} guest{parseInt(guests) !== 1 ? 's' : ''}
                  </div>
                )}
                
                {(priceRange[0] > 0 || priceRange[1] < 500) && (
                  <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                    ${priceRange[0]} - ${priceRange[1]}
                  </div>
                )}
              </div>
            )}
            
            {/* Filters panel */}
            {showFilters && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 animate-fade-in">
                <h2 className="text-lg font-medium mb-4">Filters</h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Price range</h3>
                  <Slider
                    defaultValue={priceRange}
                    min={0}
                    max={500}
                    step={10}
                    onValueChange={handlePriceChange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Property type</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">Villas</Button>
                      <Button variant="outline" size="sm" className="rounded-full">Apartments</Button>
                      <Button variant="outline" size="sm" className="rounded-full">Houses</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Rooms and beds</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                        <Bed size={14} />
                        2+ beds
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full">2+ bedrooms</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Booking options</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                        <Calendar size={14} />
                        Available now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Results */}
          <div className={`transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
            {filteredProperties.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <h2 className="text-2xl font-medium mb-4">No matches found</h2>
                <p className="text-gray-500 text-center max-w-md mb-8">
                  We couldn't find any properties matching your search criteria. Try adjusting your filters or exploring other options.
                </p>
                <Button 
                  onClick={clearFilters}
                  className="bg-airbnb-primary hover:bg-airbnb-primary/90"
                >
                  Clear all filters
                </Button>
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

export default Search;
