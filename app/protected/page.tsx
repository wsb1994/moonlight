
import { redirect } from 'next/navigation';
 import { createClient } from "@/utils/supabase/server";
import AuthButton from '@/components/AuthButton';
import { Container, Box, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Head from 'next/head';
import CompanyLink from '@/components/CompanyLink'
import Link from '@mui/material/Link'

export const metadata = {
  title: 'Protected Page',
  description: 'A protected page that requires authentication',
};

export default async function ProtectedPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: companies } = await supabase.from("companies").select().order('common_name', { ascending: false });;
  console.log(companies)
  if (!user) {
    return redirect('/login');
  }
  if (user){
    return redirect('/companylist');
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          The Person Project
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/companylist"  color="inherit" sx={{ textDecoration: 'underline' }}>
        Company List
      </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          All Instructions
          </Typography> 
          <AuthButton/> 
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
   
      </Container>
    </>
  );
}
