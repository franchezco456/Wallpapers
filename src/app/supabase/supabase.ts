import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

export const supabase = createClient(
  environment.Supabase_app.supabaseUrl,
  environment.Supabase_app.supabaseKey
);
