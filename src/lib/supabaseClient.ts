import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uamdluowoloabatbxfks.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhbWRsdW93b2xvYWJhdGJ4ZmtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTcwODAsImV4cCI6MjA3NjU3MzA4MH0.zY7m38Es8Rly37SBG9P8i6byFDNt_GHSuFxSCT5VE_Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
