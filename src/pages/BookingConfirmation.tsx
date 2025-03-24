import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { Button } from "@/components/ui/button";

interface Reservation {
  id: string;
  property: {
    name: string;
    address: string;
    imageUrl: string;
  };
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}

const BookingConfirmation = () => {
  const { id } = useParams<{ id: string }>();
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mock API call
    const fetchReservation = async () => {
      setLoading(true);
      try {
        // Simulate fetching reservation data
        await new Promise(resolve => setTimeout(resolve, 1000));

        const mockReservation: Reservation = {
          id: id!,
          property: {
            name: 'Luxury Villa with Ocean View',
            address: '123 Ocean View Road, Mirissa, Sri Lanka',
            imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          },
          checkIn: '2024-01-20T14:00:00.000Z',
          checkOut: '2024-01-27T11:00:00.000Z',
          guests: 3,
          totalPrice: 1200,
        };

        setReservation(mockReservation);
      } catch (err: any) {
        setError(err.message || 'Failed to load reservation');
      } finally {
        setLoading(false);
      }
    };

    fetchReservation();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-4">Loading reservation...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">Error: {error}</div>;
  }

  if (!reservation) {
    return <div className="container mx-auto p-4">Reservation not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-5">Booking Confirmed!</h1>

        <div className="md:flex">
          <img
            src={reservation.property.imageUrl}
            alt={reservation.property.name}
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6"
          />

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{reservation.property.name}</h2>
            <p className="text-gray-600 mb-4">
              <MapPin className="inline-block mr-1" size={16} />
              {reservation.property.address}
            </p>

            <div className="flex items-center text-gray-600 mb-2">
              <Calendar className="inline-block mr-1" size={16} />
              Check-in: {format(parseISO(reservation.checkIn), 'MMMM dd, yyyy')}
            </div>

            <div className="flex items-center text-gray-600 mb-2">
              <Clock className="inline-block mr-1" size={16} />
              Check-out: {format(parseISO(reservation.checkOut), 'MMMM dd, yyyy')}
            </div>

            <div className="flex items-center text-gray-600 mb-4">
              <Users className="inline-block mr-1" size={16} />
              Guests: {reservation.guests === 1 ? '1 guest' : `${reservation.guests} guests`}
            </div>

            <div className="font-semibold text-gray-800 text-xl mb-4">
              Total: ${reservation.totalPrice}
            </div>

            <Button asChild>
              <Link to="/" className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
