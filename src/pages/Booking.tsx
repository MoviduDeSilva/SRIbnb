
import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { format, addDays } from 'date-fns';
import { Calendar as CalendarIcon, CreditCard, Users, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { properties } from '@/lib/data';

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(new Date(), 5));
  const [guests, setGuests] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
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
  
  const calculateDays = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  const days = calculateDays();
  const subtotal = property.price * days;
  const cleaningFee = 40;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + cleaningFee + serviceFee;
  
  const handleBooking = () => {
    setIsLoading(true);
    
    // Simulate API call for booking
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Booking confirmed!",
        description: `Your stay at ${property.title} is booked from ${format(checkIn!, 'PP')} to ${format(checkOut!, 'PP')}`,
      });
      
      navigate(`/booking-confirmation/${id}`);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-10">
        <div className="container-custom max-w-4xl">
          <Link to={`/property/${id}`} className="inline-flex items-center text-airbnb-secondary mb-6 hover:underline">
            <ChevronLeft size={18} className="mr-1" />
            Back to property
          </Link>
          
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-xl font-semibold mb-2">Complete your booking</h1>
              <p className="text-gray-600">You're booking a stay at {property.title}</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left column - Booking details */}
                <div>
                  <h2 className="text-lg font-medium mb-4">Your trip</h2>
                  
                  {/* Dates */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Dates</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label className="text-xs text-gray-500 mb-1 block">Check-in</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkIn ? format(checkIn, 'PP') : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={checkIn}
                              onSelect={setCheckIn}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div className="flex-1">
                        <label className="text-xs text-gray-500 mb-1 block">Check-out</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkOut ? format(checkOut, 'PP') : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={checkOut}
                              onSelect={setCheckOut}
                              initialFocus
                              disabled={(date) => date < (checkIn || new Date())}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                  
                  {/* Guests */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Guests</h3>
                    <div className="flex items-center">
                      <Users size={18} className="text-gray-400 mr-2" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        {Array.from({ length: property.capacity.guests }, (_, i) => i + 1).map(num => (
                          <option key={num} value={num}>
                            {num} guest{num !== 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Payment */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Payment details</h3>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center mb-4">
                        <CreditCard size={18} className="text-gray-400 mr-2" />
                        <span className="text-sm">Credit or debit card</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Card number</label>
                          <input 
                            type="text" 
                            placeholder="1234 5678 9012 3456"
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs text-gray-500 mb-1 block">Expiry date</label>
                            <input 
                              type="text" 
                              placeholder="MM/YY"
                              className="w-full p-2 border border-gray-300 rounded-md"
                            />
                          </div>
                          
                          <div>
                            <label className="text-xs text-gray-500 mb-1 block">CVV</label>
                            <input 
                              type="text" 
                              placeholder="123"
                              className="w-full p-2 border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Name on card</label>
                          <input 
                            type="text" 
                            placeholder="John Smith"
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right column - Price details */}
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-6">
                      <img 
                        src={property.images[0]} 
                        alt={property.title}
                        className="w-20 h-20 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h3 className="font-medium">{property.title}</h3>
                        <p className="text-sm text-gray-500">{property.location.city}, {property.location.country}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <h3 className="text-lg font-medium mb-4">Price details</h3>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>${property.price} × {days} nights</span>
                          <span>${subtotal}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span>Cleaning fee</span>
                          <span>${cleaningFee}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span>Service fee</span>
                          <span>${serviceFee}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <div className="flex justify-between font-semibold">
                        <span>Total (USD)</span>
                        <span>${total}</span>
                      </div>
                    </div>
                    
                    <Button
                      className="w-full bg-airbnb-primary hover:bg-airbnb-primary/90"
                      size="lg"
                      onClick={handleBooking}
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Confirm and pay"}
                    </Button>
                    
                    <p className="text-xs text-center text-gray-500 mt-4">
                      By confirming, you agree to the Airbnb Terms of Service and acknowledge the Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
