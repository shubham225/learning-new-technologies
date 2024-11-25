"use client"

import React, { useEffect, useState } from 'react'
import getAllUsers from '../lib/server.action';
import { Button } from '@/components/ui/button';
import SliderDemo from '@/components/slider';
import InputDemo from '@/components/InputSIte';

export default function Dashboard() {
  const [user, setUser] = useState({
    name: "string",
    description: "string",
    count: 0
});

  const handleClick = () => {
    const data = getAllUsers();
    setUser(data);
  }

  return (
    <div>
      <div className="">
      <SliderDemo />
      <InputDemo />
      </div>
    </div>
  )
}
