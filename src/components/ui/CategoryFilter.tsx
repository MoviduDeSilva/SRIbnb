
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CategoryItem } from '@/lib/data';

interface CategoryFilterProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle horizontal scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { current: container } = containerRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      
      container.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };
  
  // Update scroll button visibility based on scroll position
  const handleScroll = () => {
    if (containerRef.current) {
      const { current: container } = containerRef;
      
      const isAtStart = container.scrollLeft < 10;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
      
      setShowLeftButton(!isAtStart);
      setShowRightButton(!isAtEnd);
    }
  };
  
  // Add scroll event listener
  useEffect(() => {
    const { current: container } = containerRef;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  return (
    <div className="relative">
      {/* Left scroll button */}
      {showLeftButton && (
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md border border-gray-100"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>
      )}
      
      {/* Categories container */}
      <div 
        ref={containerRef}
        className="flex space-x-8 overflow-x-auto pb-6 pt-2 px-2 scrollbar-none"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex flex-col items-center min-w-[56px] transition-opacity duration-300 ${
              selectedCategory === category.id 
                ? 'opacity-100 border-b-2 border-airbnb-secondary pb-2' 
                : 'opacity-70 hover:opacity-100 pb-4'
            }`}
            onClick={() => onSelectCategory(
              selectedCategory === category.id ? null : category.id
            )}
          >
            <span className="text-2xl mb-1">{category.icon}</span>
            <span className="text-xs whitespace-nowrap">{category.label}</span>
          </button>
        ))}
      </div>
      
      {/* Right scroll button */}
      {showRightButton && (
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md border border-gray-100"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;
