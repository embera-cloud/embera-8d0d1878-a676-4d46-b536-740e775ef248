export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-slate py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-gradient-purple">About Mystic Vault</h1>
        <div className="glass-card p-8 md:p-12 text-left space-y-6">
          <p className="text-lg text-brand-text">
            Mystic Vault is the culmination of years of passion for both the puzzle and roguelite genres. Developed by a small, dedicated team of indie developers, our goal was to create a game that is both deeply strategic and endlessly replayable.
          </p>
          <p className="text-brand-text-dark">
            We wanted to build a world that feels ancient, mysterious, and full of secrets. The shifting biomes of the vault are designed to keep players on their toes, while the deep combo mechanics provide a high skill ceiling for those who wish to master them. From the initial concept to the final polish, every element of Mystic Vault has been crafted with care to provide a premium gaming experience.
          </p>
          <p className="text-brand-text-dark">
            Thank you for joining us on this adventure. We can't wait to see you inside the vault!
          </p>
        </div>
      </div>
    </div>
  );
}