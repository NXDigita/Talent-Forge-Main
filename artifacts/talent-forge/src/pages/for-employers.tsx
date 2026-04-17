import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ShieldCheck, Zap, Users, TrendingUp, ChevronRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ForEmployers() {
  const { toast } = useToast();
  const [hires, setHires] = useState([10]);
  const [costPerHire, setCostPerHire] = useState([50000]);

  // ROI Calculation
  const traditionalCost = hires[0] * costPerHire[0];
  const talentForgeCost = hires[0] * 15000; // Flat fee or lower average cost
  const savings = traditionalCost - talentForgeCost;
  const savingsPercentage = Math.round((savings / traditionalCost) * 100);

  const handleCtaClick = () => {
    toast({
      title: "Feature coming soon!",
      description: "Join the waitlist to get early access.",
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-500 text-sm font-medium mb-6">
            <ShieldCheck size={14} />
            <span>Enterprise-Grade Talent Sourcing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
            Stop Interviewing. <br className="hidden md:block" />
            <span className="text-violet-600">Start Verifying.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10">
            Access a pre-vetted pool of top engineering talent. Our AI matches you with candidates who have proven their skills through rigorous assessments.
          </p>
          <Button onClick={handleCtaClick} className="btn-gradient h-12 px-8 text-lg">
            Post a Project
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="border-y border-zinc-200 py-10 mb-20 bg-zinc-50/50">
          <p className="text-center text-zinc-9000 text-sm font-medium uppercase tracking-wider mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="text-xl font-bold text-zinc-900">Acme Corp</div>
            <div className="text-xl font-bold text-zinc-900">GlobalTech</div>
            <div className="text-xl font-bold text-zinc-900">Nexus Systems</div>
            <div className="text-xl font-bold text-zinc-900">Quantum Data</div>
            <div className="text-xl font-bold text-zinc-900">Stark Industries</div>
          </div>
        </div>

        {/* 3-Step Flow */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">How Hiring Works on Talent Forge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-amber-500" />, title: "1. AI Matching", desc: "Our algorithm instantly matches your requirements with candidates who have the exact verified skills you need." },
              { icon: <ShieldCheck className="text-violet-600" />, title: "2. Verify Credentials", desc: "Review blockchain-backed proof of competence, including actual code, assessment scores, and past project deliveries." },
              { icon: <Users className="text-violet-500" />, title: "3. Hire & Onboard", desc: "Engage talent for freelance projects or full-time roles with zero friction and a streamlined contract process." }
            ].map((step, i) => (
              <div key={i} className="glass-card p-8 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
                <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center border border-zinc-200 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="glass-card p-8 md:p-12 border border-violet-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-amber-500 w-6 h-6" />
                <h2 className="text-3xl font-bold text-zinc-900">ROI Calculator</h2>
              </div>
              <p className="text-zinc-500 mb-8">See how much time and money you can save by skipping the traditional resume screening and technical interview process.</p>
              
              <div className="space-y-8">
                <div>
                  <label className="text-sm font-medium text-zinc-600 mb-4 flex justify-between">
                    <span>Hires per quarter</span>
                    <span className="text-violet-600 font-bold bg-zinc-100 px-3 py-1 rounded-md">{hires[0]}</span>
                  </label>
                  <Slider 
                    value={hires} 
                    onValueChange={setHires} 
                    max={50} 
                    min={1}
                    step={1}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-zinc-600 mb-4 flex justify-between">
                    <span>Traditional Cost per Hire (₹)</span>
                    <span className="text-violet-600 font-bold bg-zinc-100 px-3 py-1 rounded-md">₹{costPerHire[0].toLocaleString()}</span>
                  </label>
                  <Slider 
                    value={costPerHire} 
                    onValueChange={setCostPerHire} 
                    max={200000} 
                    min={10000}
                    step={5000}
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-8 border border-zinc-200 shadow-2xl flex flex-col justify-center text-center">
              <h3 className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-6">Estimated Quarterly Savings</h3>
              
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-2 font-mono">
                ₹{savings.toLocaleString()}
              </div>
              
              <div className="inline-flex items-center justify-center gap-2 text-green-400 mb-8 font-medium bg-green-500/10 px-4 py-1 rounded-full w-fit mx-auto">
                <TrendingUp size={16} />
                <span>{savingsPercentage}% cost reduction</span>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-zinc-600 mx-auto max-w-xs w-full">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0" /> Zero technical interview time</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0" /> No resume screening overhead</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0" /> Pre-verified skills guarantee</li>
              </ul>
              
              <Button onClick={handleCtaClick} className="w-full bg-white text-zinc-900 hover:bg-zinc-100">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
