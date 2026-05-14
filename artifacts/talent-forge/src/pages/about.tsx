import { Shield, Zap, Target, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Mission Section */}
      <section className="container mx-auto max-w-4xl px-4 text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-8 leading-tight">
          Engineering Recruitment is Broken. <br />
          <span className="gradient-text">We're Fixing It.</span>
        </h1>
        <p className="text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
          Every year, millions of talented engineers in India are filtered out by flawed resume parsers and subjective interviews, while startups struggle to find people who can actually build. Talent Forge replaces prestige with proof.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="container mx-auto max-w-6xl px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="glass-card p-8 border-l-4 border-red-500/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">The Problem</h3>
              <p className="text-zinc-500 leading-relaxed">
                The current hiring system relies on proxies—which college you went to, how well you format a PDF, or how well you perform under the artificial stress of a 45-minute whiteboard interview. It ignores actual capability.
              </p>
            </div>
            
            <div className="glass-card p-8 border-l-4 border-sky-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Solution</h3>
              <p className="text-zinc-500 leading-relaxed">
                We've built a verifiable skill economy. Talent Forge uses rigorous, gamified assessments to test practical engineering skills, logs the results immutably on the blockchain, and uses AI to match proven talent directly with the companies that need them.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="glass-card p-6 text-center">
                <Shield className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                <h4 className="text-zinc-900 font-bold mb-2">Verified</h4>
                <p className="text-xs text-zinc-500">Blockchain-backed credentials.</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Target className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <h4 className="text-zinc-900 font-bold mb-2">Meritocratic</h4>
                <p className="text-xs text-zinc-500">Skills over degrees.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-6 text-center">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="text-zinc-900 font-bold mb-2">Efficient</h4>
                <p className="text-xs text-zinc-500">Instant AI matching.</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Globe className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="text-zinc-900 font-bold mb-2">Accessible</h4>
                <p className="text-xs text-zinc-500">Open to all India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-zinc-200 bg-zinc-50/50 py-16 mb-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">100k+</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Engineers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">500+</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Startups</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">2M+</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Assessments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 mb-2">₹50Cr</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Paid to Talent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto max-w-6xl px-4 mb-32">
        <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">The Builders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Vikram R.", role: "CEO & Co-founder", exp: "ex-Flipkart, IIT-B" },
            { name: "Anita S.", role: "CTO & Co-founder", exp: "ex-Google, BITS" },
            { name: "Rohan M.", role: "Head of Product", exp: "ex-Razorpay" },
            { name: "Neha K.", role: "Head of Assessment", exp: "PhD CS, IISc" }
          ].map((member, i) => (
            <div key={i} className="glass-card p-6 text-center group">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-100 border-2 border-zinc-200 mb-6 group-hover:border-sky-400 transition-colors flex items-center justify-center text-2xl font-bold text-zinc-500">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">{member.name}</h3>
              <p className="text-blue-700 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">{member.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investors / Press */}
      <section className="container mx-auto max-w-4xl px-4 text-center">
        <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-8">Backed by top tier investors</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold text-zinc-900 font-serif">Sequoia</div>
          <div className="text-2xl font-bold text-zinc-900 tracking-widest">LIGHTSPEED</div>
          <div className="text-2xl font-bold text-zinc-900 italic">Elevation</div>
          <div className="text-2xl font-bold text-zinc-900">Accel</div>
        </div>
      </section>

    </div>
  );
}
