import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from '@mui/material';

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <form action={signOut}>
      <Button
        type="submit"
        variant="text"
        style={{ color: 'white' }} // Customize your color here
      >
        Logout
      </Button>
    </form>
  ) : (
    <Link href="/login" passHref>
      <Button variant="text" style={{ color: 'white' }}>
        Login
      </Button>
    </Link>
  );
}
