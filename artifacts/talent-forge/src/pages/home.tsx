import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Briefcase, Zap, Cpu, Activity, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { StatCounter } from "@/components/ui/stat-counter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#0F172A_0%,#1E3A5F_50%,#0F172A_100%)] opacity-50" />
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sky-400 text-sm font-medium mb-6">
            <Zap size={14} />
            <span>The New Standard in Engineering Hiring</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Hire Smarter. Prove Your Skills. <br className="hidden md:block" />
            <span className="gradient-text">Get Hired Faster.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Replace the outdated resume grind with gamified skill assessments, blockchain credentials, and AI-powered matching. 
            India's ultimate talent marketplace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard/student">
              <Button className="btn-gradient w-full sm:w-auto h-12 px-8 text-lg">
                I'm a Student
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/for-employers">
              <Button variant="outline" className="w-full sm:w-auto h-12 px-8 text-lg border-slate-700 hover:bg-slate-800 text-white">
                I'm an Employer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-slate-800 bg-[#0F172A]/80">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCounter end={50} suffix="M+" label="Lines of Code" />
            <StatCounter prefix="₹" end={120} suffix=" Cr" label="Talent Value" />
            <StatCounter end={95} suffix="%" label="Match Rate" />
            <StatCounter end={48} suffix=" hrs" label="Avg Time to Hire" />
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineering Domains</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We verify skills across core engineering and modern tech domains.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Computer Science", icon: <Code2 className="w-8 h-8 text-sky-400" />, desc: "Full-stack, Backend, Frontend, DevOps" },
              { title: "AI & Data", icon: <Activity className="w-8 h-8 text-amber-500" />, desc: "Machine Learning, Data Engineering, Analytics" },
              { title: "Electronics (ECE)", icon: <Cpu className="w-8 h-8 text-blue-500" />, desc: "Embedded Systems, IoT, VLSI, Robotics" },
              { title: "Electrical (EEE)", icon: <Zap className="w-8 h-8 text-green-500" />, desc: "Power Systems, Control Systems, Drives" },
              { title: "Mechanical", icon: <Briefcase className="w-8 h-8 text-slate-300" />, desc: "CAD/CAM, Thermodynamics, Fluid Mechanics" },
              { title: "Business/Management", icon: <ShieldCheck className="w-8 h-8 text-purple-400" />, desc: "Product Management, Technical Sales, Ops" }
            ].map((domain, i) => (
              <div key={i} className="glass-card p-6 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                  {domain.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{domain.title}</h3>
                  <p className="text-slate-400">{domain.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-900/40 to-slate-900 border-t border-blue-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to forge your future?</h2>
          <p className="text-xl text-slate-300 mb-10">Join thousands of verified engineers getting hired by top startups today.</p>
          <Button className="btn-gradient h-14 px-10 text-lg">
            Create Your Profile Now
          </Button>
        </div>
      </section>
    </div>
  );
}
