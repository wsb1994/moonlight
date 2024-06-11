// components/Instruction.jsx
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { Card, Box } from '@mui/material';

async function Instruction( params ) {

const supabase = createClient();
  // const { data: instruction } = (await supabase.from("instructions").select().eq('number', params.number).limit(1));
  const instruction = params.instruction;
  // Use number prop here
  return <pre>
    <div>
    <Box sx={{ m: 4 }}>
    <Card>
    <div>
<div>
            <div> Company: {instruction.common_name}</div>
            <div> Department: {instruction.department}</div>
            <div> Number: {instruction.number}</div>
            <ul>
                      {instruction.instructions.map((instruction, index) => (
                        <li key={index}> {index + 1 }: {instruction}</li>
                      ))}
                    </ul>
            </div>
      </div>
      </Card>
      </Box>
    </div>
    </pre>
}

export default Instruction;
