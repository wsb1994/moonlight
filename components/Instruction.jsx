// components/Instruction.jsx
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { Card, Box, IconButton, Button, Icon } from '@mui/material';
import { ArrowUpward, ArrowDownward} from '@mui/icons-material';
async function Instruction( params ) {

const supabase = createClient();
  // const { data: instruction } = (await supabase.from("instructions").select().eq('number', params.number).limit(1));
  const instruction = params.instruction; 
  let { data } = await supabase.rpc('sum_votes', { idn: instruction.id });
   

async function onSubmit(event) {
  const { data: { user } } = await supabase.auth.getUser();
  const {result} = await supabase.from('votes').upsert({id: instruction.id, number: instruction.number, vote: number, voter: user.id})

}

   if (data[0].total === null){
    data[0].total = 0
  }
  
  if (data[0].total < -5) {
    const { data: result } = await supabase.from("instructions").delete("*").eq('id', instruction.id);
  }

    return (
      <pre>
        <Box sx={{ m: 6 }}>
          <Card sx={{ padding: '20px' }}>  
            <div> Company: {instruction.common_name}</div>
            <div> Department: {instruction.department}</div>
            <div> Number: {instruction.number}</div>
            <ul>
              {instruction.instructions.map((instruction, index) => (
                <li key={index}> {index + 1}: {instruction}</li>
              ))}
            </ul>
          </Card>
        </Box>
      </pre>
    );
}

export default Instruction;
