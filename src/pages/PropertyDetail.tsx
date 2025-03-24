
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Award, Share, Heart, User, Users, Calendar, Home, ShowerHead, Bed, Utensils, Wifi, Maximize } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyGallery from '@/components/PropertyGallery';
import { properties } from '@/lib/data';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Find the property based on id param
  const property = properties.find(p => p.id === id);
  
  // Handle if property not found
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-8">We couldn't find the property you're looking for.</p>
            <Link 
              to="/" 
              className="bg-airbnb-primary text-white px-6 py-3 rounded-lg hover:bg-airbnb-primary/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format amenities for display
  const displayAmenities = () => {
    const amenityLabels: Record<string, { label: string, icon: React.ReactNode }> = {
      'wifi': { label: 'Wifi', icon: <Wifi size={20} /> },
      'kitchen': { label: 'Kitchen', icon: <Utensils size={20} /> },
      'pool': { label: 'Pool', icon: <div className="i-pool w-5 h-5" /> },
      'tv': { label: 'TV', icon: <div className="i-tv w-5 h-5" /> },
      'washer': { label: 'Washer', icon: <div className="i-washer w-5 h-5" /> },
      'air-conditioning': { label: 'Air conditioning', icon: <div className="i-ac w-5 h-5" /> },
      'dedicated-workspace': { label: 'Workspace', icon: <div className="i-workspace w-5 h-5" /> },
    };
    
    return property.amenities.slice(0, 8).map(amenity => (
      <div key={amenity} className="flex items-center space-x-3">
        {amenityLabels[amenity]?.icon || <Home size={20} />}
        <span>{amenityLabels[amenity]?.label || amenity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
      </div>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-10">
        <div className="container-custom animate-fade-in">
          {/* Property header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">{property.title}</h1>
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center">
                  <Star size={18} className="text-airbnb-secondary" />
                  <span className="ml-1 font-medium">{property.ratings.average.toFixed(2)}</span>
                </div>
                <span className="mx-1">·</span>
                <span className="text-airbnb-secondary underline font-medium">
                  {property.ratings.count} reviews
                </span>
                
                {property.host.isSuperhost && (
                  <>
                    <span className="mx-1">·</span>
                    <div className="flex items-center">
                      <Award size={16} className="text-airbnb-primary mr-1" />
                      <span className="font-medium">Superhost</span>
                    </div>
                  </>
                )}
                
                <span className="mx-1">·</span>
                <span className="font-medium underline">
                  {property.location.city}, {property.location.country}
                </span>
              </div>
              
              <div className="flex mt-2 sm:mt-0">
                <button className="flex items-center mr-4 hover:text-airbnb-primary transition-colors">
                  <Share size={18} className="mr-1" />
                  <span className="text-sm font-medium underline">Share</span>
                </button>
                <button 
                  className="flex items-center hover:text-airbnb-primary transition-colors"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart 
                    size={18} 
                    className={`mr-1 ${isFavorite ? "fill-airbnb-primary text-airbnb-primary" : ""}`} 
                  />
                  <span className="text-sm font-medium underline">Save</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Property gallery */}
          <div className="mb-8 relative">
            <PropertyGallery 
              images={property.images}
              altText={property.title}
              onClose={() => setIsGalleryOpen(true)}
            />
            
            <button 
              className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setIsGalleryOpen(true)}
            >
              <Maximize size={16} className="mr-2" />
              Show all photos
            </button>
          </div>
          
          {/* Property details */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left column - Details */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start pb-6 border-b">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    {property.type.charAt(0).toUpperCase() + property.type.slice(1)} hosted by {property.host.name}
                  </h2>
                  <p className="text-airbnb-light">
                    {property.capacity.guests} guests · {property.capacity.bedrooms} bedrooms · {property.capacity.beds} beds · {property.capacity.baths} baths
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={property.host.image} 
                      alt={property.host.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="py-8 border-b">
                {property.host.isSuperhost && (
                  <div className="flex items-start mb-6">
                    <Award size={24} className="text-airbnb-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{property.host.name} is a Superhost</h3>
                      <p className="text-airbnb-light text-sm">
                        Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start mb-6">
                  <Calendar size={24} className="mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Free cancellation before check-in</h3>
                    <p className="text-airbnb-light text-sm">
                      Cancel before check-in for a partial refund.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User size={24} className="mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Self check-in</h3>
                    <p className="text-airbnb-light text-sm">
                      Check yourself in with the lockbox.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="py-8 border-b">
                <p className="leading-relaxed text-airbnb-secondary">{property.description}</p>
              </div>
              
              {/* Sleeping arrangements */}
              <div className="py-8 border-b">
                <h2 className="text-xl font-semibold mb-6">Where you'll sleep</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: property.capacity.bedrooms }).map((_, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <Bed size={24} className="mb-3" />
                      <h3 className="font-medium mb-1">Bedroom {index + 1}</h3>
                      <p className="text-airbnb-light text-sm">
                        {index === 0 ? '1 king bed' : '1 queen bed'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Amenities */}
              <div className="py-8 border-b">
                <h2 className="text-xl font-semibold mb-6">What this place offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {displayAmenities()}
                </div>
                
                {property.amenities.length > 8 && (
                  <button className="border border-airbnb-secondary rounded-lg px-6 py-3 font-medium hover:bg-gray-50 transition-colors">
                    Show all {property.amenities.length} amenities
                  </button>
                )}
              </div>
              
              {/* Calendar */}
              <div className="py-8 border-b">
                <h2 className="text-xl font-semibold mb-2">Select check-in date</h2>
                <p className="text-airbnb-light mb-6">Add your travel dates for exact pricing</p>
                
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Calendar size={48} className="mx-auto mb-4 text-airbnb-light" />
                  <p className="text-airbnb-light">
                    Calendar feature coming soon. Please use the booking form to check availability.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right column - Booking */}
            <div className="lg:w-5/12 xl:w-4/12">
              <div className="sticky top-32 bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xl font-semibold">${property.price}</span>
                    <span className="text-airbnb-light"> night</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} />
                    <span className="ml-1 font-medium">{property.ratings.average.toFixed(2)}</span>
                    <span className="mx-1 text-airbnb-light">·</span>
                    <span className="text-airbnb-light underline">{property.ratings.count} reviews</span>
                  </div>
                </div>
                
                <div className="border border-gray-300 rounded-t-lg rounded-b-lg overflow-hidden mb-4">
                  <div className="grid grid-cols-2 divide-x divide-gray-300">
                    <div className="p-3">
                      <p className="text-xs font-bold mb-1">CHECK-IN</p>
                      <p className="text-sm">Add date</p>
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-bold mb-1">CHECKOUT</p>
                      <p className="text-sm">Add date</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 p-3">
                    <p className="text-xs font-bold mb-1">GUESTS</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">1 guest</p>
                      <svg 
                        viewBox="0 0 32 32" 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" 
                        role="presentation" 
                        focusable="false"
                        className="w-4 h-4 fill-current text-gray-600"
                      >
                        <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#E61E4D] to-[#BD1E59] text-white text-center py-3 rounded-lg font-medium mb-4 hover:from-[#D31C46] hover:to-[#A91C54] transition-all">
                  Reserve
                </button>
                
                <p className="text-center text-sm mb-6">You won't be charged yet</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="underline">${property.price} x 5 nights</span>
                    <span>${property.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Cleaning fee</span>
                    <span>$150</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Service fee</span>
                    <span>$120</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total before taxes</span>
                    <span>${property.price * 5 + 150 + 120}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reviews */}
          <div className="mt-12 mb-12">
            <div className="flex items-center mb-8">
              <Star size={24} />
              <span className="ml-2 text-xl font-semibold">{property.ratings.average.toFixed(2)} · {property.ratings.count} reviews</span>
            </div>
            
            {/* Ratings breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center justify-between">
                <span>Cleanliness</span>
                <div className="flex items-center">
                  <div className="w-32 h-1 bg-gray-300 rounded overflow-hidden mr-3">
                    <div 
                      className="h-full bg-airbnb-secondary rounded" 
                      style={{ width: `${(property.ratings.cleanliness / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span>{property.ratings.cleanliness.toFixed(1)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Accuracy</span>
                <div className="flex items-center">
                  <div className="w-32 h-1 bg-gray-300 rounded overflow-hidden mr-3">
                    <div 
                      className="h-full bg-airbnb-secondary rounded" 
                      style={{ width: `${(property.ratings.accuracy / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span>{property.ratings.accuracy.toFixed(1)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Communication</span>
                <div className="flex items-center">
                  <div className="w-32 h-1 bg-gray-300 rounded overflow-hidden mr-3">
                    <div 
                      className="h-full bg-airbnb-secondary rounded" 
                      style={{ width: `${(property.ratings.communication / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span>{property.ratings.communication.toFixed(1)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Location</span>
                <div className="flex items-center">
                  <div className="w-32 h-1 bg-gray-300 rounded overflow-hidden mr-3">
                    <div 
                      className="h-full bg-airbnb-secondary rounded" 
                      style={{ width: `${(property.ratings.location / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span>{property.ratings.location.toFixed(1)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Check-in</span>
                <div className="flex items-center">
                  <div className="w-32 h-1 bg-gray-300 rounded overflow-hidden mr-3">
                    <div 
                      className="h-full bg-airbnb-secondary rounded" 
                      style={{ width: `${(property.ratings.checkIn / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span>{property.ratings.checkIn.toFixed(1)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Value</span>
                <div className="flex items-center">
                  <div className="w-32 h-1 bg-gray-300 rounded overflow-hidden mr-3">
                    <div 
                      className="h-full bg-airbnb-secondary rounded" 
                      style={{ width: `${(property.ratings.value / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span>{property.ratings.value.toFixed(1)}</span>
                </div>
              </div>
            </div>
            
            {/* Reviews grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {property.reviews.map(review => (
                <div key={review.id} className="mb-6">
                  <div className="flex items-center mb-3">
                    <img 
                      src={review.userImage} 
                      alt={review.userName}
                      className="w-12 h-12 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{review.userName}</h3>
                      <p className="text-airbnb-light text-sm">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-airbnb-secondary leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
            
            <button className="mt-6 border border-airbnb-secondary rounded-lg px-6 py-3 font-medium hover:bg-gray-50 transition-colors">
              Show all {property.ratings.count} reviews
            </button>
          </div>
          
          {/* Map section */}
          <div className="py-8 border-t">
            <h2 className="text-xl font-semibold mb-6">Where you'll be</h2>
            <div className="rounded-xl overflow-hidden h-80 bg-gray-200 flex items-center justify-center mb-4">
              <div className="text-center">
                <p className="text-lg font-medium mb-2">{property.location.city}, {property.location.country}</p>
                <p className="text-airbnb-light">Map view coming soon</p>
              </div>
            </div>
            <p className="text-airbnb-secondary leading-relaxed mb-3">
              The neighborhood is known for its {property.location.city === 'Malibu' ? 'beautiful beaches and celebrity homes' : 'charming atmosphere and local attractions'}.
            </p>
            <button className="underline font-medium">Show more</button>
          </div>
          
          {/* Host section */}
          <div className="py-8 border-t">
            <div className="flex items-start">
              <div className="mr-6">
                <img 
                  src={property.host.image} 
                  alt={property.host.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-1">Hosted by {property.host.name}</h2>
                <p className="text-airbnb-light mb-4">Joined in {property.host.joinDate.split('-')[0]}</p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star size={16} className="mr-1" />
                    <span>{property.ratings.count} Reviews</span>
                  </div>
                  {property.host.isSuperhost && (
                    <div className="flex items-center">
                      <Award size={16} className="mr-1 text-airbnb-primary" />
                      <span>Superhost</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>Identity verified</span>
                  </div>
                </div>
                
                <p className="text-airbnb-secondary leading-relaxed mb-4">
                  {property.host.isSuperhost 
                    ? `Hi, I'm ${property.host.name}! As a Superhost, I'm committed to providing exceptional stays for all my guests. I love sharing my beautiful ${property.type} and helping visitors discover the best of ${property.location.city}.`
                    : `Hi, I'm ${property.host.name}! I love sharing my beautiful ${property.type} and helping visitors discover the best of ${property.location.city}.`
                  }
                </p>
                
                <h3 className="font-medium mb-1">During your stay</h3>
                <p className="text-airbnb-secondary leading-relaxed mb-4">
                  I'm available to assist with any questions or needs you may have during your stay.
                </p>
                
                <button className="border border-airbnb-secondary rounded-lg px-6 py-3 font-medium hover:bg-gray-50 transition-colors">
                  Contact Host
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Full-screen gallery */}
      {isGalleryOpen && (
        <PropertyGallery 
          images={property.images}
          altText={property.title}
          onClose={() => setIsGalleryOpen(false)}
          isFullScreen={true}
        />
      )}
    </div>
  );
};

export default PropertyDetail;
