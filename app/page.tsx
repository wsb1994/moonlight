
// pages/index.js
import React from 'react';
import { Link, Container, Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <AuthButton/>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="body1" gutterBottom>
            This is an application for finding out how to reach your bank or another company's phone line, email line, or similar, and get customer support from a real live human being, skipping the ai shit storm.
          </Typography>
          <Link>
          <Button variant="contained" color="inherit">
            Click here to get started
          </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}
