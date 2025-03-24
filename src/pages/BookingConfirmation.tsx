
import { useParams, Link } from 'react-router-dom';
import { format, addDays } from 'date-fns';
import { Check, Download, CalendarClock, MapPin, Phone, Share } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { properties } from '@/lib/data';

const BookingConfirmation = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the property based on id param
  const property = properties.find(p => p.id === id);
  
  // Handle if property not found
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Booking Not Found</h1>
            <p className="text-gray-600 mb-8">We couldn't find the booking you're looking for.</p>
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
  
  // Generate random booking details
  const bookingId = `B${Math.floor(Math.random() * 1000000)}`;
  const checkIn = new Date();
  const checkOut = addDays(checkIn, 5);
  const totalGuests = 2;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-10">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-green-50 p-6 border-b border-gray-200">
              <div className="flex items-center mb-2">
                <div className="bg-green-500 text-white rounded-full p-1 mr-2">
                  <Check size={18} />
                </div>
                <h1 className="text-xl font-semibold text-green-800">Booking confirmed!</h1>
              </div>
              <p className="text-green-700">Your reservation at {property.title} is confirmed.</p>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left column - Booking details */}
                <div className="md:w-2/3">
                  <div className="mb-8">
                    <div className="flex items-start mb-4">
                      <img 
                        src={property.images[0]} 
                        alt={property.title}
                        className="w-24 h-24 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h2 className="font-medium text-lg">{property.title}</h2>
                        <p className="text-sm text-gray-500 mb-1">{property.location.city}, {property.location.country}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="flex items-center mr-2">
                            {property.capacity.bedrooms} bedroom{property.capacity.bedrooms !== 1 ? 's' : ''}
                          </span>
                          •
                          <span className="mx-2 flex items-center">
                            {property.capacity.beds} bed{property.capacity.beds !== 1 ? 's' : ''}
                          </span>
                          •
                          <span className="ml-2 flex items-center">
                            {property.capacity.baths} bath{property.capacity.baths !== 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <Button variant="outline" className="mr-2">
                        <Download size={16} className="mr-2" />
                        Download receipt
                      </Button>
                      
                      <Button variant="ghost">
                        <Share size={16} className="mr-2" />
                        Share details
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Reservation details</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <CalendarClock size={20} className="text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-medium mb-1">Dates</h4>
                            <p className="text-sm text-gray-600 mb-1">
                              {format(checkIn, 'MMM d, yyyy')} - {format(checkOut, 'MMM d, yyyy')}
                            </p>
                            <p className="text-sm text-gray-600">5 nights</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <MapPin size={20} className="text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-medium mb-1">Address</h4>
                            <p className="text-sm text-gray-600 mb-1">
                              You'll receive the exact address after check-in time on {format(checkIn, 'MMM d, yyyy')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Important information</h3>
                    
                    <div className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start">
                        <Phone size={20} className="text-gray-500 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Host contact</h4>
                          <p className="text-sm text-gray-600 mb-1">
                            {property.host.name} will be your host. Contact information will be shared before your trip.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">Check-in: After 3:00 PM</p>
                      <p className="mb-2">Checkout: Before 11:00 AM</p>
                      <p>House rules: No smoking. No parties or events. Pets allowed with prior approval.</p>
                    </div>
                  </div>
                </div>
                
                {/* Right column - Summary */}
                <div className="md:w-1/3">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium mb-4">Reservation summary</h3>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Booking ID</div>
                      <div className="font-medium">{bookingId}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Dates</div>
                      <div className="font-medium">{format(checkIn, 'MMM d')} - {format(checkOut, 'MMM d, yyyy')}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Guests</div>
                      <div className="font-medium">{totalGuests} guest{totalGuests !== 1 ? 's' : ''}</div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <div className="text-sm text-gray-500 mb-1">Total paid</div>
                      <div className="text-xl font-semibold">${property.price * 5 + 40 + Math.round(property.price * 5 * 0.12)}</div>
                    </div>
                    
                    <Link to={`/property/${property.id}`}>
                      <Button variant="outline" className="w-full">
                        View property details
                      </Button>
                    </Link>
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

export default BookingConfirmation;
