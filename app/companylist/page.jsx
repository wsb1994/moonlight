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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default async function DenseTable() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: companies } = await supabase.from("companies").select().order('common_name', { ascending: false });

  const handleLinkClick = (e, companyName) => {
    e.preventDefault();
    router.push(`/instructions/${companyName}`);
  };

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
             
         
    <TableContainer component={Paper}>
      <Table  aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="Left">Support</TableCell>
            <TableCell align="Left">Website&nbsp;(g)</TableCell>
            <TableCell align="Left">Supported Numbers</TableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((company, index) => (
            <TableRow
              key={company.common_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <CompanyLink params={company}/>
              </TableCell>
              <TableCell align="Left">{company.supported}</TableCell>
              <TableCell align="Left">
                <Link href={company.website}>
                {company.common_name}
                </Link></TableCell>
              <TableCell align="Left">?</TableCell>
              
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