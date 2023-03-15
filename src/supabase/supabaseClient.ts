import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bcdrobkpxsxzutlgbfrc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZHJvYmtweHN4enV0bGdiZnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4OTUyODUsImV4cCI6MTk5NDQ3MTI4NX0.amCwTk7Hevy0Hsj09KRVBWCwRAG7okEk0hSTCrNFYxM";
export const supabaseInstance = createClient(supabaseUrl, supabaseKey);
