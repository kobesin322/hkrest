import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://buydwuyriqivkdtgolex.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1eWR3dXlyaXFpdmtkdGdvbGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MzUyNDQsImV4cCI6MjA2MDIxMTI0NH0.L8ZEUMaeaGSb4f44PGndwkvgm_l4XKBDWkNDcKl9nr0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
  db: {
    schema: 'public'
  }
})