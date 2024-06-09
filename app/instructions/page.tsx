import { useRouter } from 'next/navigation'
 
export default function Page(number: string) {
  const router = useRouter()
  return (
    <>{{number}}</>
  )
}