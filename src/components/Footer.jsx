import { Link } from 'react-router-dom';
import { Heart, Share2, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="font-bold text-lg">Klick</span>
            </div>
            <p className="text-gray-400">Connect with trusted service providers in your area.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition">Dashboard</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><Link to="/support" className="hover:text-primary transition">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition"><Heart size={20} /></a>
              <a href="#" className="hover:text-primary transition"><Share2 size={20} /></a>
              <a href="#" className="hover:text-primary transition"><MessageCircle size={20} /></a>
              <a href="#" className="hover:text-primary transition"><Send size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Klick. All rights reserved. Owned by Bitson.</p>
        </div>
      </div>
    </footer>
  );
}
