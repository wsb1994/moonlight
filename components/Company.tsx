import { createClient } from '@/utils/supabase/server';

export default async function Companies() {
  const supabase = createClient();
  const { data: company } = await supabase.from("companies").select();

  return <pre>{JSON.stringify(company, null, 2)}</pre>
}