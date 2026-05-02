import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <span className="font-bold text-xl text-dark">Klick</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/dashboard" className="hover:text-primary transition">Dashboard</Link>
          <Link to="/blog" className="hover:text-primary transition">Blog</Link>
          <Link to="/support" className="hover:text-primary transition">Support</Link>
          <Link to="/admin" className="btn-primary">Admin</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/dashboard" className="hover:text-primary transition">Dashboard</Link>
            <Link to="/blog" className="hover:text-primary transition">Blog</Link>
            <Link to="/support" className="hover:text-primary transition">Support</Link>
            <Link to="/admin" className="btn-primary">Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
