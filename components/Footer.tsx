import { Twitter, Youtube, Twitch, Disc } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-slate border-t border-slate-500/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About & Socials */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 mb-4">
                <Image src="/logo.svg" alt="Mystic Vault Logo" width={32} height={32} />
                <span className="font-display text-lg font-bold">Mystic Vault</span>
            </Link>
            <p className="text-brand-text-dark max-w-xs">
              A roguelite puzzle game of combo mastery and dungeon delving.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon href="#" icon={<Youtube className="w-5 h-5" />} />
              <SocialIcon href="#" icon={<Twitch className="w-5 h-5" />} />
              <SocialIcon href="#" icon={<Disc className="w-5 h-5" />} />
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Get Development Updates</h3>
            <p className="text-brand-text-dark mb-4">
              Sign up for our newsletter to receive the latest news, updates, and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-slate-900/50 border border-slate-500/30 rounded-lg p-3 focus:ring-2 focus:ring-brand-purple focus:outline-none transition"
              />
              <button type="submit" className="glow-button-purple whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-500/20 pt-8 text-center text-brand-text-dark text-sm">
          <p>&copy; {new Date().getFullYear()} MysticVault.gg. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <span>&bull;</span>
            <Link href="#" className="hover:text-white">Press Kit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <a href={href} className="text-brand-text-dark hover:text-brand-purple transition-colors p-2 rounded-full bg-slate-500/10 hover:bg-slate-500/20">
        {icon}
    </a>
)