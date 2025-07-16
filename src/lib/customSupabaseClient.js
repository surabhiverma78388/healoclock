import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kfpiomfshhpvioulnopa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmcGlvbWZzaGhwdmlvdWxub3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2Mjk4MDcsImV4cCI6MjA2ODIwNTgwN30.MYgUP8lWnp-hq0HsHoQ38dyud7cIKobjbVLe_9c5LSQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);