export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          username: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          location: string | null
          credits: number | null
          followers_count: number | null
          following_count: number | null
          posts_count: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          username: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          credits?: number | null
          followers_count?: number | null
          following_count?: number | null
          posts_count?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          username?: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          credits?: number | null
          followers_count?: number | null
          following_count?: number | null
          posts_count?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      restaurants: {
        Row: {
          id: string
          name: string
          description: string | null
          cuisine_type: string[] | null
          price_range: string | null
          address: string
          city: string
          state: string | null
          postal_code: string | null
          country: string
          latitude: number | null
          longitude: number | null
          phone: string | null
          email: string | null
          website: string | null
          opening_hours: Json | null
          is_verified: boolean | null
          average_rating: number | null
          total_ratings: number | null
          followers_count: number | null
          created_at: string | null
          updated_at: string | null
          image_src: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          cuisine_type?: string[] | null
          price_range?: string | null
          address: string
          city: string
          state?: string | null
          postal_code?: string | null
          country: string
          latitude?: number | null
          longitude?: number | null
          phone?: string | null
          email?: string | null
          website?: string | null
          opening_hours?: Json | null
          is_verified?: boolean | null
          average_rating?: number | null
          total_ratings?: number | null
          followers_count?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          cuisine_type?: string[] | null
          price_range?: string | null
          address?: string
          city?: string
          state?: string | null
          postal_code?: string | null
          country?: string
          latitude?: number | null
          longitude?: number | null
          phone?: string | null
          email?: string | null
          website?: string | null
          opening_hours?: Json | null
          is_verified?: boolean | null
          average_rating?: number | null
          total_ratings?: number | null
          followers_count?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      bookings: {
        Row: {
          id: string
          restaurant_id: string | null
          user_id: string | null
          booking_date: string
          booking_time: string
          guests_count: number
          status: string
          special_requests: string | null
          contact_phone: string | null
          contact_email: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          restaurant_id?: string | null
          user_id?: string | null
          booking_date: string
          booking_time: string
          guests_count: number
          status?: string
          special_requests?: string | null
          contact_phone?: string | null
          contact_email?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          restaurant_id?: string | null
          user_id?: string | null
          booking_date?: string
          booking_time?: string
          guests_count?: number
          status?: string
          special_requests?: string | null
          contact_phone?: string | null
          contact_email?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
    }
  }
}