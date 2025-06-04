'use client';
import { useState } from 'react';
import Navbar from '@/Components/Navbar';
export default function CounterPage() {
  // State to track the counter value
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <Navbar />
      <h2>Count: {count}</h2>
       {/* Buttons trigger events to change counter value */}
      <button className="button" onClick={() => setCount(count + 1)}>+1</button>
      <button className="button" onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}
