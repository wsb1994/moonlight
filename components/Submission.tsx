// pages/index.js

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Submission() {
  const router = useRouter();
  const [input, setInput] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Define your regex pattern for matching "1-800-525-1926"
    const regexPattern = /^\d-\d{3}-\d{3}-\d{4}$/;
  
    // Test if input matches the regex pattern
    if (!regexPattern.test(input)) {
      // If input doesn't match the pattern, handle it (e.g., show error message)
      console.log("Input does not match the pattern!");
      alert("Please enter the phone number in the format 1-555-555-5555");
      return; // Don't proceed further
    }
  
    // If input matches the pattern, navigate to the dynamic route
    router.push(`/instructions/${input}`);
  };
  

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, color: 'white' }}
    >
      <TextField
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        label="1-555-555-5555"
        InputLabelProps={{
          style: { color: 'White' }
        }}
        InputProps={{
          style: { color: 'White' }
        }}
        sx={{ borderColor: "Blue", backgroundColor: "#383232"}}
      />
       < Button
      type="submit"
      variant="outlined"
      color="primary"
    >Query</Button>
    </Box>
  );
}
