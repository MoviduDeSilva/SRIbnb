
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Share, Heart } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  altText: string;
  onClose?: () => void;
  isFullScreen?: boolean;
}

const PropertyGallery = ({ 
  images, 
  altText, 
  onClose, 
  isFullScreen = false 
}: PropertyGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean[]>(Array(images.length).fill(true));
  const [isFavorite, setIsFavorite] = useState(false);

  const handleImageLoad = (index: number) => {
    setIsLoading(prev => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (isFullScreen) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <button 
            className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </button>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:bg-white/10 p-2 rounded-full transition-colors">
              <Share size={20} />
            </button>
            <button 
              className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart 
                size={20} 
                className={isFavorite ? "fill-airbnb-primary text-airbnb-primary" : ""} 
              />
            </button>
          </div>
        </div>
        
        {/* Main gallery */}
        <div className="flex-1 flex items-center justify-center relative">
          {images.map((src, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {isLoading[index] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              <img 
                src={src} 
                alt={`${altText} - image ${index + 1}`}
                className="max-h-[85vh] max-w-[85vw] object-contain"
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
          
          {/* Navigation buttons */}
          <button
            className={`absolute left-4 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition-opacity ${
              currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100'
            }`}
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={`absolute right-4 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition-opacity ${
              currentIndex === images.length - 1 ? 'opacity-40 cursor-not-allowed' : 'opacity-100'
            }`}
            onClick={goToNext}
            disabled={currentIndex === images.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="p-4 bg-black/50 overflow-x-auto">
          <div className="flex space-x-2 justify-center">
            {images.map((src, index) => (
              <button
                key={index}
                className={`relative h-16 w-24 rounded-md overflow-hidden transition-all ${
                  index === currentIndex ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img 
                  src={src} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 overflow-hidden rounded-xl">
      {images.slice(0, 5).map((src, index) => {
        // First image is larger
        const isMainImage = index === 0;
        const showOverlay = images.length > 5 && index === 4;
        
        return (
          <div 
            key={index}
            className={`relative overflow-hidden ${
              isMainImage 
                ? 'col-span-2 row-span-2'
                : 'col-span-1 row-span-1'
            } ${isLoading[index] ? 'img-loading' : ''}`}
          >
            <img 
              src={src} 
              alt={`${altText} - image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              onClick={() => onClose && onClose()}
              onLoad={() => handleImageLoad(index)}
            />
            
            {showOverlay && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                onClick={() => onClose && onClose()}>
                <button className="bg-white rounded-md px-4 py-2 text-sm font-medium">
                  + {images.length - 5} more photos
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PropertyGallery;
