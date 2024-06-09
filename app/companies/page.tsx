
import { redirect } from 'next/navigation';
 import { createClient } from "@/utils/supabase/server";
import AuthButton from '@/components/AuthButton';
import Company from '@/components/Company';
import { Container, Box, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Head from 'next/head';

export const metadata = {
  title: 'Protected Page',
  description: 'A protected page that requires authentication',
};

export default async function ProtectedPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
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
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <AuthButton />
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          
        </Box>
      </Container>
    </>
  );
}
