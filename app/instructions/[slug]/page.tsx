// app/instructions/[slug]/[slug].jsx
import Instruction from "@/components/Instruction"
export default function Page({ params }: { params: { slug: string } }) {
  return <div>
    <div>My Post: {params.slug}</div>
    <Instruction number={'1-800-525-3355'}></Instruction>
    </div>
}