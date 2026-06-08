import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oklzeqmpqpbsahkfqciv.supabase.co'
const supabaseAnonKey = 'sb_publishable_gQZjrUCgzZdXWGMmmyd0kw_jkH6wnfo'


export const supabase = createClient(supabaseUrl, supabaseAnonKey)