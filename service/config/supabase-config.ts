import { createClient } from '@supabase/supabase-js'

class SupabaseConfig {
  supabaseUrl = 'https://yiojdncwcutlbqoyayne.supabase.co'
  supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpb2pkbmN3Y3V0bGJxb3lheW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjU3NjUsImV4cCI6MjAyNjAwMTc2NX0.K4UooqmQ15TME0DgPQnS3plv_6c8di4AuGRIG6JmrD8'

  supabase = createClient(
    this.supabaseUrl,
    this.supabaseKey
  )

  constructor() {
    this.supabase
  }
}

export default new SupabaseConfig()