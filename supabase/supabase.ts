import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://buydwuyriqivkdtgolex.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1eWR3dXlyaXFpdmtkdGdvbGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MzUyNDQsImV4cCI6MjA2MDIxMTI0NH0.L8ZEUMaeaGSb4f44PGndwkvgm_l4XKBDWkNDcKl9nr0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 