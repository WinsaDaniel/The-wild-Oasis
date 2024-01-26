import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://eawavaizorvjxundiovx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhd2F2YWl6b3J2anh1bmRpb3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyOTA0MjMsImV4cCI6MjAyMTg2NjQyM30.0AmcEmjIgVolg0F9Tw5Be_ZRvC7ToLgWFwleMva14xA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
