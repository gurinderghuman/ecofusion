// src/components/ui/navbar.js
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-blue-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">EcoFusion</div>
      <div className="flex space-x-4">
        <Link href="/" className="text-white">Home</Link>
        <Link href="/products" className="text-white-500">Projects</Link>
        <Link href="/blog" className="text-white">Blog</Link>
        <Link href="/about" className="text-white">About</Link>
        <Link href="/contact" className="text-white">Contact</Link>
        <button  className="text-white text-2xl font-bold">Submit </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
