"use client"

import { useParams } from 'next/navigation';
import React from 'react'

type Props = {}

const ProblemDescription = (props: Props) => {
  const param = useParams();
  return (
    <div>Description of : {param.problemId}</div>
  )
}

export default ProblemDescription