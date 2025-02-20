'use server';

import { createClient } from "@/utils/supabase/server";

export async function logoutUser() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut()

  if (error) {
    throw new Error("Error logging out user.")
  }
}