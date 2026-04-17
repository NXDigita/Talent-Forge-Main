import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Trophy, Zap, Award, BookOpen, Clock, Briefcase, IndianRupee } from "lucide-react";

export default function ForStudents() {
  const [hours, setHours] = useState([20]);
  const [domain, setDomain] = useState("cs");
  const [tier, setTier] = useState("practitioner");

  // Calculate earnings logic based on tier and domain and hours
  const baseRate = {
    cs: 800,
    ai: 1000,
    ece: 700,
    eee: 650,
    mech: 600,
    biz: 500
  }[domain] || 500;

  const multiplier = {
    explorer: 0.5,
    apprentice: 0.8,
    practitioner: 1.0,
    expert: 1.5,
    master: 2.0
  }[tier] || 1.0;

  const monthlyEarnings = Math.round(hours[0] * 4 * baseRate * multiplier);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
            Your Skills. <span className="text-amber-500">Your Value.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Stop sending resumes into the void. Complete assessments, earn blockchain-verified credentials, and let employers come to you.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">The Forge Journey</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-100 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { icon: <Target />, title: "Create Profile", desc: "Sign up and set your target domains." },
                { icon: <BookOpen />, title: "Take Tests", desc: "Complete gamified skill assessments." },
                { icon: <Award />, title: "Earn Badges", desc: "Get blockchain-verified credentials." },
                { icon: <Briefcase />, title: "Get Matched", desc: "AI matches you with relevant projects." },
                { icon: <IndianRupee />, title: "Get Paid", desc: "Execute work and earn directly." }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-100 border-4 border-[#0F172A] flex items-center justify-center text-violet-600 z-10 mb-4 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Earnings Calculator */}
        <div className="glass-card p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Earnings Calculator</h2>
              <p className="text-zinc-500 mb-8">Estimate your potential monthly earnings working on freelance projects through Talent Forge.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-zinc-600 mb-2 flex justify-between">
                    <span>Hours per week</span>
                    <span className="text-violet-600">{hours[0]} hrs</span>
                  </label>
                  <Slider 
                    value={hours} 
                    onValueChange={setHours} 
                    max={40} 
                    step={5}
                    className="py-4"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-zinc-600 mb-2 block">Domain</label>
                    <Select value={domain} onValueChange={setDomain}>
                      <SelectTrigger className="bg-violet-50/70 border-zinc-200 text-zinc-900">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-100 border-zinc-200 text-zinc-900">
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="ai">AI / Data</SelectItem>
                        <SelectItem value="ece">Electronics (ECE)</SelectItem>
                        <SelectItem value="eee">Electrical (EEE)</SelectItem>
                        <SelectItem value="mech">Mechanical</SelectItem>
                        <SelectItem value="biz">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-zinc-600 mb-2 block">Current Tier</label>
                    <Select value={tier} onValueChange={setTier}>
                      <SelectTrigger className="bg-violet-50/70 border-zinc-200 text-zinc-900">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-100 border-zinc-200 text-zinc-900">
                        <SelectItem value="explorer">Explorer</SelectItem>
                        <SelectItem value="apprentice">Apprentice</SelectItem>
                        <SelectItem value="practitioner">Practitioner</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                        <SelectItem value="master">Master</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-50/80 rounded-2xl p-8 border border-zinc-200 text-center">
              <p className="text-zinc-500 mb-2 uppercase tracking-wider text-sm font-semibold">Estimated Monthly Earnings</p>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4 font-mono">
                ₹{monthlyEarnings.toLocaleString('en-IN')}
              </div>
              <p className="text-sm text-zinc-9000 mb-8">Based on average project rates for {tier}s in this domain.</p>
              <Button className="w-full btn-gradient">Start Earning</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
