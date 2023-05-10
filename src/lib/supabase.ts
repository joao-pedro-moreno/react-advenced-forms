import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://hqygxrafpfdsdlegsacj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxeWd4cmFmcGZkc2RsZWdzYWNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MzcyNTM4OCwiZXhwIjoxOTk5MzAxMzg4fQ.HDoMY5oDOAHqSedTGTqqHNEN621u7HwFVlw56Jhtl2w'
)