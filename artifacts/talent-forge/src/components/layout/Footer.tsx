import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#334155] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                TF
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-slate-50 tracking-tight">
                  Talent Forge
                </span>
                <span className="text-[10px] text-amber-500 font-medium leading-none tracking-wider uppercase">
                  by ResourceIndia.co
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              India's premier AI-powered talent marketplace. We connect skill-verified engineering graduates with top startups and enterprises.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-50 mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/for-students" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">For Students</Link></li>
              <li><Link href="/for-employers" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">For Employers</Link></li>
              <li><Link href="/for-colleges" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">For Colleges</Link></li>
              <li><Link href="/marketplace" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Marketplace</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-50 mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/assessment" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Skill Assessments</Link></li>
              <li><Link href="/pricing" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-50 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">About Us</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Talent Forge by ResourceIndia.co. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
