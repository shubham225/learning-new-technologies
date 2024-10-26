import React from 'react'
import { Card } from '../ui/card'
import { DataTable } from '../data-tables'
import { columns } from './result-columns'
import { Result } from '@/types'

type Props = {}

const data: Result[] = [
  {
    id: "two-sum",
    time: new Date("2020-01-09"),
    status: "Accepted",
    language: "Java",
    runtime: "2.5s",
    memory: "12.1 MB"
  },
  {
    id: "two-sum",
    time: new Date("2020-01-09"),
    status: "Wrong Answer",
    language: "Java",
    runtime: "6.5s",
    memory: "32.1 MB"
  }
];

const ProblemResult = (props: Props) => {
  return (
    <div className=''>
        <DataTable columns={columns} data={data} />
    </div>
  )
}

export default ProblemResult