// app/instructions/[slug]/[slug].jsx
import Instruction from "@/components/Instruction";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ params }) {
  console.log("params:", params); // Log params to see its structure
  if (!params || !params.slug) {
    return <div>Loading...</div>; // Handle case where params or slug is missing
  }

  const { slug } = params;
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: instructions } = (await supabase.from("instructions").select().eq('number', slug));

  return (
    <ul>
    {instructions.map((instruction, index) => (
      <Instruction instruction={instruction}/>
    ))}
  </ul>
  );
}

