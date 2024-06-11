'use client'
import { Link } from "@mui/material"
export default function CompanyLink( params ) {
    console.log(params)
    return <Link
    href={`/companies/${params.params.id}`}
    >
    {params.params.common_name}
  </Link>
  }