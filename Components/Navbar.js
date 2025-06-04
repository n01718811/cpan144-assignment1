import Link from 'next/link';
// Navbar used across all pages
export default function Navbar({ currentPage }) {
  return (
    <div className="navbar">
      {/*functional components with props*/}
      <p>You are on: {currentPage}</p>
      <Link href="/">Home</Link> | 
      <Link href="/counter">Counter</Link> | 
      <Link href="/form">Form</Link>
    </div>
  );
}
