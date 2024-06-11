
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
        <title>Material UI with Next.js</title>
        <meta name="description" content="A beautiful Material UI page with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          The Person Project
          </Typography>
          <Link href={`/companylist`}>
                Instructions for this Phone Line Exist
                </Link>
          <AuthButton/> 
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="body1" gutterBottom>
            Input a corporate phone number below to determine if there is a "shortcut" to contact a person on that particular phone line, or to see if there is a corporate helpdesk email, etc.
          </Typography>
          <Link>
          </Link>
        </Box>
        <Submission></Submission>
      </Container>
    </>
  );
}
