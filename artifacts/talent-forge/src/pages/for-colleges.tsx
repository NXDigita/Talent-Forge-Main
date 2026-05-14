import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Shield, BarChart3, ChevronRight } from "lucide-react";

export default function ForColleges() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Hero */}
        <div className="text-center mb-24">
          <div className="w-16 h-16 bg-blue-100/30 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-200">
            <Building2 className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Elevate Your Institution's <br className="hidden md:block" />
            <span className="text-blue-600">Placement Record.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10">
            Partner with Talent Forge to give your students direct access to verifiable skill assessments and a premier talent marketplace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/partner">
              <Button className="btn-gradient h-12 px-8">
                Partner With Us
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/partner">
              <Button variant="outline" className="h-12 px-8 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-card p-8 border-l-4 border-l-blue-500">
            <TrendingUp className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Higher Placement Rates</h3>
            <p className="text-zinc-500 leading-relaxed">
              Students active on Talent Forge get hired 3x faster than traditional methods. Our AI matching puts your graduates in front of top startups actively looking for their specific verified skills.
            </p>
          </div>
          
          <div className="glass-card p-8 border-l-4 border-l-amber-500">
            <BarChart3 className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Real-time Analytics</h3>
            <p className="text-zinc-500 leading-relaxed">
              Access a comprehensive institutional dashboard. Track which domains your students excel in, monitor their TFES scores, and identify curriculum gaps based on industry demand.
            </p>
          </div>
          
          <div className="glass-card p-8 border-l-4 border-l-sky-400">
            <Shield className="w-10 h-10 text-blue-700 mb-6" />
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Verified Reputation</h3>
            <p className="text-zinc-500 leading-relaxed">
              As an integrated partner, your institution's name is attached to verified blockchain credentials, boosting your college's reputation among top-tier employers nationwide.
            </p>
          </div>
          
          <div className="glass-card p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Ready to integrate?</h3>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Join 50+ leading engineering colleges already using Talent Forge to empower their students.
            </p>
            <Link href="/partner">
              <Button className="w-full btn-gradient">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
