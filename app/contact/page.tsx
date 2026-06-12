export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-slate py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 text-center text-gradient-purple">Get In Touch</h1>
        <div className="glass-card p-8 md:p-12">
          <p className="text-center text-brand-text-dark mb-8">
            Have questions, feedback, or a press inquiry? Fill out the form below or email us directly.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="w-full bg-slate-900/50 border border-slate-500/30 rounded-lg p-3 focus:ring-2 focus:ring-brand-purple focus:outline-none transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">Your Email</label>
              <input type="email" id="email" name="email" className="w-full bg-slate-900/50 border border-slate-500/30 rounded-lg p-3 focus:ring-2 focus:ring-brand-purple focus:outline-none transition" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full bg-slate-900/50 border border-slate-500/30 rounded-lg p-3 focus:ring-2 focus:ring-brand-purple focus:outline-none transition"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="glow-button-purple w-full sm:w-auto">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}