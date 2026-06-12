import { Gem, Swords, Dices, ShieldCheck, Gamepad2, Award } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
        <div className="absolute inset-0 w-full h-full bg-brand-dark -z-20"></div>
        <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] opacity-5 -z-10"></div>
        <div 
          className="absolute inset-0 z-0 opacity-20 animate-aurora"
          style={{
            backgroundImage: `radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%), 
                              radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
                              radial-gradient(at 52% 99%, hsla(355, 98%, 76%, 1) 0px, transparent 50%),
                              radial-gradient(at 10% 29%, hsla(256, 96%, 68%, 1) 0px, transparent 50%),
                              radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
                              radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
                              radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)`
          }}
        ></div>

        <div className="relative z-10 animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-4 animate-subtle-float">
            <Image src="/logo.svg" alt="Mystic Vault Logo" width={192} height={192} className="drop-shadow-[0_5px_15px_rgba(142,68,173,0.6)]" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-gradient-gold">Mystic Vault</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 font-display text-brand-text">
            Delve into the Vault. Master the Combo. Survive the Dungeon.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="glow-button-purple w-full sm:w-auto">Buy on Steam</a>
            <a href="#" className="glow-button-gold w-full sm:w-auto">Wishlist Now</a>
          </div>
          <p className="mt-4 text-brand-text-dark">Available on iOS, Android, and Web</p>
        </div>
      </section>

      {/* Gameplay Showcase */}
      <section id="gameplay" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Witness the Depths</h2>
          <p className="max-w-2xl mx-auto text-brand-text-dark mb-12">Experience fluid puzzle-solving combat within ever-changing dungeons.</p>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl p-2 border-2 border-brand-purple/50 shadow-glow-purple">
            <Image src="https://placehold.co/1280x720/0a0514/8e44ad?text=Gameplay+Trailer" alt="Gameplay Showcase" layout="fill" objectFit="cover" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-brand-slate">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Unearth the Mysteries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Swords className="w-10 h-10 text-brand-gold" />}
              title="Tactical Puzzles"
              description="Master deep combo mechanics to outsmart cunning traps and monstrous foes. Every move matters."
            />
            <FeatureCard
              icon={<Dices className="w-10 h-10 text-brand-purple" />}
              title="Roguelite Progression"
              description="Unlock powerful classes, upgrade your skills, and leverage a robust gold economy to grow stronger with each run."
            />
            <FeatureCard
              icon={<Gamepad2 className="w-10 h-10 text-brand-blue" />}
              title="Endless Replayability"
              description="Face daily bounties, climb leaderboards, and adapt to shifting biomes and traps. No two delves are the same."
            />
          </div>
        </div>
      </section>
      
      {/* Purchase / Editions Section */}
      <section id="editions" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Choose Your Path</h2>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 max-w-5xl mx-auto">
            <EditionCard 
              title="Standard Edition"
              price="$19.99"
              features={[
                "Full Game Access",
                "Roguelite Puzzle Gameplay",
                "All Core Classes",
                "Community Access"
              ]}
              buttonText="Buy Standard Edition"
              isFeatured={false}
            />
            <EditionCard 
              title="Supporter Edition"
              price="$29.99"
              features={[
                "Everything in Standard Edition",
                "Exclusive Supporter Hero Icons",
                "Official Ambient Soundtrack",
                "Digital Artbook"
              ]}
              buttonText="Buy Supporter Edition"
              isFeatured={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="glass-card p-8 text-center transition-all duration-300 hover:border-brand-purple hover:scale-105">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-brand-text-dark">{description}</p>
  </div>
);

const EditionCard = ({ title, price, features, buttonText, isFeatured }: { title: string, price: string, features: string[], buttonText: string, isFeatured: boolean }) => (
  <div className={`glass-card p-8 flex flex-col w-full max-w-sm border-2 ${isFeatured ? 'border-brand-gold shadow-glow-gold' : 'border-transparent'}`}>
    <h3 className={`text-3xl font-bold text-center ${isFeatured ? 'text-gradient-gold' : ''}`}>{title}</h3>
    <p className="text-5xl font-black text-center my-6">{price}</p>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center">
          <ShieldCheck className={`w-5 h-5 mr-3 ${isFeatured ? 'text-brand-gold' : 'text-brand-purple'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={isFeatured ? 'glow-button-gold mt-auto' : 'glow-button-purple mt-auto'}>
      {buttonText}
    </button>
  </div>
);