
// pages/index.js
import React, { Component } from 'react';
import { Link, Container, Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Submission from '@/components/Submission';
import Head from 'next/head';
import AuthButton from '@/components/AuthButton';
export default function Home() {
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
          <Typography variant="body1" gutterBottom>
  Phone search is currently disabled as we prepare to launch crowd sourcing. We are taking fraud seriously, and are using a special method to prevent fraudelent entries. Until this is turned on, search + submission as well as crowd sourcing are disabled.          </Typography>
          <Link>
          </Link>
        </Box>
      </Container>
    </>
  );
}
