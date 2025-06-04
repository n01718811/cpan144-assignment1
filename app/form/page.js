'use client';
import { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Greeting from '@/Components/Greeting'; 
export default function FormPage() {
  // State to store the user's typed name
  const [name, setName] = useState('');
  // State to control whether the message is shown
  const [show, setShow] = useState(false);
  //Event handling for form submission
  function handleSubmit(e) {
    e.preventDefault();
    setShow(true);
  }

  return (
    <div className="page">
      <Navbar currentPage="Form" />

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button className="button" type="submit">Submit</button>
      </form>
      {/*Passing `name` as a prop to child component */}
      {show && <Greeting name={name} />} 
    </div>
  );
}
