"use client"

import React, { useEffect, useState } from 'react'
import getAllUsers from '../lib/server.action';
import { Button } from '@/components/ui/button';

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
      <Button onClick={handleClick}>Click</Button>
    </div>
  )
}
