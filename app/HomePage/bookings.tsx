import React, { useEffect, useState } from 'react';
import { fetchBookings, Booking } from '../../services/bookings';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookingsScreen() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const data = await fetchBookings();
      setBookings(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-4">Loading bookings...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <div className="grid gap-4">
        {bookings.map((booking) => (
          <Card key={booking.id}>
            <CardHeader>
              <CardTitle>Booking #{booking.id}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {new Date(booking.booking_date).toLocaleDateString()}</p>
              <p>Time: {booking.booking_time}</p>
              <p>Guests: {booking.guests_count}</p>
              <p>Status: {booking.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 