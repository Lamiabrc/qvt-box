
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mahmakmfonycckirgtwm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1haG1ha21mb255Y2NraXJndHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5OTMwNjQsImV4cCI6MjA2MDU2OTA2NH0.axby_j9XQkOwVBZ3T4l89WzxW8X5Nr-p127j2yJjiAQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
