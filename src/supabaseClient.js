import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://izenpygdrexegwbjnypo.supabase.co";
const supabaseAnonkey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6ZW5weWdkcmV4ZWd3YmpueXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MjI2MDAsImV4cCI6MjA2OTE5ODYwMH0.GJPsMWPBwSkAR0ofmnhWLSIEjf3oD-TFs6gW3r8QRaQ";

export const supabase = createClient(supabaseUrl, supabaseAnonkey);
