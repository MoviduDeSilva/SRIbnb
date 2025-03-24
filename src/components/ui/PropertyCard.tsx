
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { PropertyListing } from '@/lib/data';

interface PropertyCardProps {
  property: PropertyListing;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentImageIndex < property.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link 
      to={`/property/${property.id}`} 
      className="group block transition-all duration-300"
    >
      <div 
        className="relative mb-3 overflow-hidden rounded-xl aspect-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Gallery */}
        <div className="relative w-full h-full">
          <img 
            src={property.images[currentImageIndex]} 
            alt={property.title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Navigation buttons */}
          {isHovered && property.images.length > 1 && (
            <>
              <button
                className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm 
                transition-opacity duration-300 ${currentImageIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
                onClick={prevImage}
                disabled={currentImageIndex === 0}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm 
                transition-opacity duration-300 ${currentImageIndex === property.images.length - 1 ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
                onClick={nextImage}
                disabled={currentImageIndex === property.images.length - 1}
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
          
          {/* Favorite button */}
          <button
            className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-all duration-300"
            onClick={toggleFavorite}
          >
            <Heart 
              size={18} 
              className={isFavorite ? "fill-airbnb-primary text-airbnb-primary" : "text-gray-700"} 
            />
          </button>
          
          {/* Image indicator dots */}
          {property.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {property.images.map((_, index) => (
                <span 
                  key={index} 
                  className={`block w-1.5 h-1.5 rounded-full ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Property details */}
        <div className="mt-3 space-y-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-base text-airbnb-secondary truncate pr-2">
              {property.location.city}, {property.location.country}
            </h3>
            <div className="flex items-center">
              <Star size={14} className="text-airbnb-secondary" />
              <span className="ml-1 text-sm font-medium">{property.ratings.average.toFixed(2)}</span>
            </div>
          </div>
          
          <p className="text-airbnb-light text-sm truncate">
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </p>
          
          <p className="text-airbnb-light text-sm">
            {property.host.isSuperhost && <span className="font-medium">Superhost · </span>}
            <span>Available now</span>
          </p>
          
          <p className="pt-1 font-medium text-airbnb-secondary">
            <span>${property.price}</span>
            <span className="text-airbnb-light font-normal"> night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
