import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AuthButton from '@/components/AuthButton';
import Link from '@mui/material/Link'
import { Container, Box, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Head from 'next/head';
import Submission from '@/components/Submission';
import { createClient } from '@/utils/supabase/server';
import CompanyLink from '@/components/CompanyLink';

export default async function Companies({ params }) {
  const { slug } = params;
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: instructions } = (await supabase.from("numbers").select().eq('parent_uuid', slug));

  const handleLinkClick = (e, companyName) => {
    e.preventDefault();
    router.push(`/instructions/${companyName}`);
  };

    return (
        <>
          <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6138466841150942" crossOrigin="anonymous"></script>
            <title>Material UI with Next.js</title>
            <meta name="description" content="A beautiful Material UI page with Next.js" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: .25 }}>
          The Person Project
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: .75 }}>
          <Link href="/companylist"  color="inherit" sx={{ textDecoration: 'underline' }}>
        Company List
      </Link>
          </Typography>
          <AuthButton/> 
        </Toolbar>
          </AppBar>
          <Container maxWidth="sm">
            <Box sx={{ my: 4, textAlign: 'center' }}>
             
         
    <TableContainer component={Paper}>
      <Table  aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="Left">Number</TableCell>
            <TableCell align="Left">Instructions</TableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
          {instructions.map((instruction, index) => (
            <TableRow
              key={instruction.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {instruction.common_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {instruction.number}
              </TableCell>
              <TableCell component="th" scope="row">
              <Link href={`/instructions/${instruction.number}`}>
                Instructions for this Phone Line Exist
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Container>
    
    </>
  );
}