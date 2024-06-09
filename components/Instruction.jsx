// components/Instruction.jsx
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { Card } from '@mui/material';

async function Instruction( params ) {

const supabase = createClient();
  const { data: instruction } = (await supabase.from("instructions").select().eq('id', 1).limit(1));

  // Use number prop here
  return <pre>
    <div>
    {JSON.stringify(instruction, null, 2)}
    <Card>
    <div>
        {instruction && instruction.map((item) => {
          return <div>
            <div> Company: {item.common_name}</div>
            <div> Department: {item.department}</div>
            <div> Number: {item.number}</div>
            <ul>
                      {item.instructions.map((instruction, index) => (
                        <li key={index}> {index + 1 }: {instruction}</li>
                      ))}
                    </ul>
            </div>;
        })}
      </div>
      </Card>
    </div>
    </pre>
}

export default Instruction;
