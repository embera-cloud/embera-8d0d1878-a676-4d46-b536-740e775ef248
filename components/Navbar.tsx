import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4 mt-4 glass-card">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Mystic Vault Logo" width={40} height={40} />
            <span className="font-display text-xl font-bold text-white hidden sm:block">Mystic Vault</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-brand-text hover:text-white transition-colors">Features</Link>
            <Link href="/#editions" className="text-brand-text hover:text-white transition-colors">Editions</Link>
            <Link href="/about" className="text-brand-text hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-brand-text hover:text-white transition-colors">Contact</Link>
          </div>
          <a href="#" className="glow-button-purple text-sm px-6 py-2">
            Pre-Order Now
          </a>
        </div>
      </nav>
    </header>
  );
}