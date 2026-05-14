import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Trophy, Zap, Award, BookOpen, Clock, Briefcase, IndianRupee, ChevronRight, Star, Shield, Cpu, FlaskConical, Wrench, Code2, Brain, BarChart2, ArrowRight, Play } from "lucide-react";

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
                  <div className="w-16 h-16 rounded-full bg-blue-50 border-4 border-white flex items-center justify-center text-blue-700 z-10 mb-4 shadow-[0_0_15px_rgba(30,64,175,0.15)]">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assessment Section */}
        <div className="mb-24">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-4">
              <Play className="w-3.5 h-3.5 fill-blue-600" />
              Take Your Skill Assessment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
              Prove What You Know. <span className="gradient-text">Get Verified.</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Each assessment is a 30-question gamified test across your engineering domain. Pass to earn a blockchain-verified TFES badge employers can independently check.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Shield className="w-5 h-5 text-blue-600" />, value: "4,200+", label: "Assessments taken this month" },
              { icon: <Star className="w-5 h-5 text-amber-500" />, value: "78 avg", label: "Average TFES score" },
              { icon: <Clock className="w-5 h-5 text-blue-600" />, value: "35 min", label: "Average completion time" },
              { icon: <Trophy className="w-5 h-5 text-amber-500" />, value: "62%", label: "First-attempt pass rate" },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-lg leading-none">{stat.value}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Domain cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                domain: "Software / Full-Stack",
                color: "blue",
                questions: 30,
                duration: "35 min",
                difficulty: "Intermediate",
                tfes: "+12 pts",
                topics: ["DSA", "System Design", "APIs", "React / Node"],
                badge: "High Demand",
                badgeColor: "bg-blue-100 text-blue-700",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                domain: "AI / Data Science",
                color: "indigo",
                questions: 30,
                duration: "40 min",
                difficulty: "Advanced",
                tfes: "+15 pts",
                topics: ["ML Algorithms", "Python", "Statistics", "Deep Learning"],
                badge: "Top Paying",
                badgeColor: "bg-amber-100 text-amber-700",
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                domain: "Electronics & Embedded",
                color: "sky",
                questions: 30,
                duration: "35 min",
                difficulty: "Intermediate",
                tfes: "+12 pts",
                topics: ["Digital Circuits", "Microcontrollers", "PCB", "VHDL"],
                badge: "Core Domain",
                badgeColor: "bg-sky-100 text-sky-700",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                domain: "Electrical Systems",
                color: "yellow",
                questions: 28,
                duration: "30 min",
                difficulty: "Intermediate",
                tfes: "+10 pts",
                topics: ["Power Systems", "Control Theory", "Transformers", "Motors"],
                badge: "",
                badgeColor: "",
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                domain: "Mechanical Design",
                color: "orange",
                questions: 28,
                duration: "30 min",
                difficulty: "Intermediate",
                tfes: "+10 pts",
                topics: ["Thermodynamics", "CAD", "Fluid Mechanics", "Manufacturing"],
                badge: "",
                badgeColor: "",
              },
              {
                icon: <BarChart2 className="w-6 h-6" />,
                domain: "DevOps & Cloud",
                color: "teal",
                questions: 25,
                duration: "28 min",
                difficulty: "Intermediate",
                tfes: "+11 pts",
                topics: ["Docker", "Kubernetes", "CI/CD", "AWS / GCP"],
                badge: "Fast Growing",
                badgeColor: "bg-green-100 text-green-700",
              },
            ].map((card, i) => {
              const iconBg: Record<string, string> = {
                blue: "bg-blue-50 text-blue-700 border-blue-100",
                indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
                sky: "bg-sky-50 text-sky-700 border-sky-100",
                yellow: "bg-amber-50 text-amber-700 border-amber-100",
                orange: "bg-orange-50 text-orange-700 border-orange-100",
                teal: "bg-teal-50 text-teal-700 border-teal-100",
              };
              const diffColor: Record<string, string> = {
                "Intermediate": "bg-blue-50 text-blue-700",
                "Advanced": "bg-indigo-50 text-indigo-700",
                "Beginner": "bg-green-50 text-green-700",
              };
              return (
                <div key={i} className="glass-card p-5 flex flex-col group hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${iconBg[card.color]}`}>
                      {card.icon}
                    </div>
                    {card.badge && (
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-zinc-900 text-base mb-1">{card.domain}</h3>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {card.topics.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-md border border-zinc-200">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4 mt-auto">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {card.questions} questions</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {card.duration}</span>
                    <span className={`px-2 py-0.5 rounded-full font-medium ${diffColor[card.difficulty]}`}>{card.difficulty}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-md bg-amber-50 border border-amber-100 flex items-center justify-center">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      </div>
                      <span className="text-sm font-bold text-amber-700">{card.tfes}</span>
                      <span className="text-xs text-zinc-400">TFES points</span>
                    </div>
                    <Link href="/assessment">
                      <Button className="btn-gradient h-8 px-4 text-xs">
                        Start <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA banner */}
          <div className="glass-card p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Not sure which domain to pick?</h3>
              <p className="text-zinc-500 text-sm">Take the 5-minute Domain Aptitude Quiz and let our AI recommend the best assessment track for you.</p>
            </div>
            <Link href="/assessment">
              <Button className="btn-gradient h-11 px-8 shrink-0">
                Take the Quiz <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
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
                    <span className="text-blue-700">{hours[0]} hrs</span>
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
                      <SelectTrigger className="bg-blue-50/70 border-zinc-200 text-zinc-900">
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
                      <SelectTrigger className="bg-blue-50/70 border-zinc-200 text-zinc-900">
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
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 mb-4 font-mono">
                ₹{monthlyEarnings.toLocaleString('en-IN')}
              </div>
              <p className="text-sm text-zinc-500 mb-8">Based on average project rates for {tier}s in this domain.</p>
              <Button className="w-full btn-gradient">Start Earning</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
