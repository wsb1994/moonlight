
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
            Input a corporate phone number below to determine if there is a "shortcut" to contact a person on that particular phone line, or to see if there is a corporate helpdesk email, etc. This is a bit janky, so for now I recommend using the app bar's company list.
          </Typography>
          <Link>
          </Link>
        </Box>
        <Submission></Submission>
      </Container>
    </>
  );
}
