import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  LayoutDashboard, 
  BookOpen, 
  Briefcase, 
  Award, 
  Settings, 
  LogOut,
  Target,
  Zap,
  TrendingUp,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-background pt-20 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-zinc-50 border-r border-zinc-200 p-6 flex flex-col hidden md:flex h-[calc(100vh-80px)] sticky top-20">
        <div className="flex items-center gap-4 mb-8 p-4 bg-violet-50/70 rounded-xl border border-zinc-200">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            JD
          </div>
          <div>
            <h3 className="font-bold text-zinc-900 leading-tight">John Doe</h3>
            <span className="text-xs font-medium text-amber-500 uppercase tracking-wider">Practitioner</span>
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          <Link href="/dashboard/student" className="flex items-center gap-3 px-4 py-3 text-zinc-900 bg-violet-50 border border-violet-200 rounded-lg transition-colors">
            <LayoutDashboard className="w-5 h-5 text-violet-500" />
            <span className="font-medium">Overview</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Assessments</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Projects</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <Award className="w-5 h-5" />
            <span className="font-medium">Credentials</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <Target className="w-5 h-5" />
            <span className="font-medium">Missions</span>
          </Link>
        </nav>

        <div className="mt-auto space-y-2 border-t border-zinc-200 pt-4">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-zinc-900 mb-8">Welcome back, John! 👋</h1>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-zinc-500 font-medium">TFES Score</h3>
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 mb-1">84<span className="text-lg text-zinc-500">/100</span></div>
            <p className="text-xs text-green-400">+5 from last month</p>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-zinc-500 font-medium">Completed Projects</h3>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-violet-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 mb-1">3</div>
            <p className="text-xs text-zinc-500">2 active right now</p>
          </div>

          <div className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-zinc-500 font-medium">Total Earned</h3>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <span className="text-amber-500 font-bold">₹</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 mb-1">45k</div>
            <p className="text-xs text-zinc-500">Lifetime earnings</p>
          </div>

          <div className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-zinc-500 font-medium">Global Rank</h3>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-purple-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 mb-1">Top 15%</div>
            <p className="text-xs text-zinc-500">In Computer Science</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Wider) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Active Missions */}
            <div className="glass-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-zinc-900">Active Missions</h2>
                <Button variant="ghost" className="text-violet-600 hover:text-sky-300 hover:bg-sky-400/10">View All</Button>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-zinc-50/50 rounded-xl border border-zinc-200">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center border border-violet-200">
                        <BookOpen className="w-5 h-5 text-violet-500" />
                      </div>
                      <div>
                        <h4 className="text-zinc-900 font-medium">Advanced React Assessment</h4>
                        <p className="text-xs text-zinc-500">Required for "React Expert" badge</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-violet-500 bg-blue-400/10 px-2 py-1 rounded">In Progress</span>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[60%] rounded-full" />
                    </div>
                    <span className="text-xs text-zinc-500 font-medium">60%</span>
                  </div>
                </div>

                <div className="p-4 bg-zinc-50/50 rounded-xl border border-zinc-200">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-900/50 flex items-center justify-center border border-amber-800">
                        <Briefcase className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-zinc-900 font-medium">Complete E-commerce Dashboard</h4>
                        <p className="text-xs text-zinc-500">Client: RetailFlow Inc.</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded">
                      <Clock className="w-3 h-3" /> 2 days left
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-[85%] rounded-full" />
                    </div>
                    <span className="text-xs text-zinc-500 font-medium">85%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="glass-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" /> AI Recommended Projects
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "React Native Mobile App", budget: "₹35,000", match: 94 },
                  { title: "Node.js API Refactoring", budget: "₹20,000", match: 88 }
                ].map((job, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-50/50 rounded-xl border border-zinc-200 gap-4 hover:border-slate-600 transition-colors cursor-pointer">
                    <div>
                      <h4 className="text-zinc-900 font-medium mb-1">{job.title}</h4>
                      <p className="text-sm text-zinc-500 font-medium text-amber-500">{job.budget}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-zinc-9000 mb-1">Match Score</span>
                        <span className="text-sm font-bold text-green-400">{job.match}%</span>
                      </div>
                      <Button size="sm" className="btn-gradient">Apply</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Narrow) */}
          <div className="space-y-8">
            
            {/* Level Progress */}
            <div className="glass-card p-6 text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 mb-4">
                <div className="w-full h-full bg-zinc-50 rounded-xl flex items-center justify-center">
                  <Award className="w-10 h-10 text-zinc-900" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Practitioner Tier</h3>
              <p className="text-sm text-zinc-500 mb-6">450 XP to Expert</p>
              
              <div className="w-full h-3 bg-zinc-100 rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[70%]" />
              </div>
              <div className="flex justify-between text-xs font-medium text-zinc-9000">
                <span>1,050 XP</span>
                <span>1,500 XP</span>
              </div>
            </div>

            {/* Recent Badges */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-zinc-900 mb-4">Recent Credentials</h3>
              <div className="flex items-center gap-4 p-4 bg-zinc-50/50 border border-zinc-200 rounded-xl mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-violet-400/50">
                  <Code2 className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">React Foundations</h4>
                  <p className="text-xs text-zinc-500">Verified • 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-zinc-50/50 border border-zinc-200 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">SQL Optimization</h4>
                  <p className="text-xs text-zinc-500">Verified • 1 week ago</p>
                </div>
              </div>
              <Button variant="link" className="w-full mt-4 text-violet-600">View Blockchain Records</Button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

// Temporary icon components for missing imports
function Code2(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
}
function Database(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
}
