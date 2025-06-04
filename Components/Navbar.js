import Link from 'next/link';
// Navbar used across all pages
export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">Home</Link> |
      <Link href="/counter">Counter</Link> | 
      <Link href="/form">Form</Link>
    </div>
  );
}
