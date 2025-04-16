
import { Database } from '@/DraftSchema_0416';
import { supabase } from '@/supabase/supabase';

export type Booking = Database['public']['Tables']['bookings']['Row'];

export const fetchBookings = async (): Promise<Booking[]> => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('booking_date', { ascending: true });

  if (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }

  return data || [];
}; 