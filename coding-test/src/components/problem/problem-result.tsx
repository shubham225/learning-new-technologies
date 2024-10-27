import React from 'react'
import { Card } from '../ui/card'
import { DataTable } from '../data-tables'
import { columns } from './result-columns'
import { Problem, Result } from '@/types'

type Props = {problem: Problem}

const data: Result[] = [
  {
    id: "two-sum",
    time: new Date("2020-01-09"),
    status: "accepted",
    language: "Java",
    runtime: "2.5s",
    memory: "12.1 MB"
  },
  {
    id: "two-sum",
    time: new Date("2020-01-09"),
    status: "wrong answer",
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