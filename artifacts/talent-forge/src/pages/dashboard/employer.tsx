import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  BarChart3, 
  Settings, 
  LogOut,
  TrendingUp,
  Search,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const spendData = [
  { name: 'Jan', amount: 45000 },
  { name: 'Feb', amount: 52000 },
  { name: 'Mar', amount: 48000 },
  { name: 'Apr', amount: 61000 },
  { name: 'May', amount: 59000 },
  { name: 'Jun', amount: 85000 },
];

export default function EmployerDashboard() {
  return (
    <div className="min-h-screen bg-[#0F172A] pt-20 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col hidden md:flex h-[calc(100vh-80px)] sticky top-20">
        <div className="flex items-center gap-4 mb-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            AC
          </div>
          <div>
            <h3 className="font-bold text-white leading-tight">Acme Corp</h3>
            <span className="text-xs font-medium text-slate-400">Enterprise Plan</span>
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          <Link href="/dashboard/employer" className="flex items-center gap-3 px-4 py-3 text-white bg-blue-600/10 border border-blue-500/20 rounded-lg transition-colors">
            <LayoutDashboard className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Overview</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">Talent Pool</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Active Projects</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Analytics</span>
          </Link>
        </nav>

        <div className="mt-auto space-y-2 border-t border-slate-800 pt-4">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Employer Overview</h1>
          <Button className="btn-gradient">Post New Project</Button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6 border-t-4 border-t-blue-500">
            <h3 className="text-slate-400 font-medium mb-4 text-sm uppercase tracking-wider">Active Projects</h3>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold text-white">12</div>
              <div className="flex items-center text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded">
                <ArrowUpRight className="w-4 h-4 mr-1" /> +2 this week
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 border-t-4 border-t-amber-500">
            <h3 className="text-slate-400 font-medium mb-4 text-sm uppercase tracking-wider">Hired Talent</h3>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold text-white">45</div>
              <div className="flex items-center text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded">
                <ArrowUpRight className="w-4 h-4 mr-1" /> +8 this month
              </div>
            </div>
          </div>

          <div className="glass-card p-6 border-t-4 border-t-emerald-500">
            <h3 className="text-slate-400 font-medium mb-4 text-sm uppercase tracking-wider">Avg Time to Hire</h3>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold text-white">42<span className="text-lg text-slate-500 ml-1">hrs</span></div>
              <div className="flex items-center text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded">
                -12% vs avg
              </div>
            </div>
          </div>

          <div className="glass-card p-6 border-t-4 border-t-purple-500">
            <h3 className="text-slate-400 font-medium mb-4 text-sm uppercase tracking-wider">Total Spend (YTD)</h3>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold text-white">₹3.5L</div>
              <div className="text-slate-400 text-sm">₹1.2L saved</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Chart */}
            <div className="glass-card p-6 h-[400px] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Spend Analytics</h2>
                <select className="bg-slate-900 border border-slate-700 text-slate-300 rounded-md px-3 py-1 text-sm">
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={spendData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value / 1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px' }}
                      itemStyle={{ color: '#38BDF8' }}
                    />
                    <Line type="monotone" dataKey="amount" stroke="#38BDF8" strokeWidth={3} dot={{ fill: '#38BDF8', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Active Projects Table */}
            <div className="glass-card p-6 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Active Projects</h2>
                <Button variant="link" className="text-sky-400 p-0">View All</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-400 text-sm">
                      <th className="pb-3 font-medium">Project Name</th>
                      <th className="pb-3 font-medium">Domain</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium text-right">Budget</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 font-medium text-white">Full-stack Dashboard App</td>
                      <td className="py-4 text-slate-300">CS / React</td>
                      <td className="py-4"><span className="px-2 py-1 bg-amber-500/10 text-amber-500 rounded text-xs font-medium">In Progress</span></td>
                      <td className="py-4 text-right text-slate-300">₹45,000</td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 font-medium text-white">IoT Gateway Firmware</td>
                      <td className="py-4 text-slate-300">ECE / C++</td>
                      <td className="py-4"><span className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded text-xs font-medium">Reviewing Candidates</span></td>
                      <td className="py-4 text-right text-slate-300">₹32,000</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 font-medium text-white">ML Churn Model</td>
                      <td className="py-4 text-slate-300">Data / Python</td>
                      <td className="py-4"><span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-medium">Completed</span></td>
                      <td className="py-4 text-right text-slate-300">₹28,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Top Matches */}
            <div className="glass-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Search className="w-5 h-5 text-amber-500" /> New Matches
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Rahul Sharma", role: "React Developer", tfes: 92, match: 98 },
                  { name: "Priya Patel", role: "Embedded Engineer", tfes: 88, match: 95 },
                  { name: "Amit Kumar", role: "Data Scientist", tfes: 94, match: 91 }
                ].map((talent, i) => (
                  <div key={i} className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700">
                          {talent.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm">{talent.name}</h4>
                          <p className="text-xs text-slate-400">{talent.role}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">{talent.match}% Match</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="text-xs text-slate-400">TFES: <span className="text-white font-medium">{talent.tfes}/100</span></div>
                      <Button size="sm" variant="outline" className="h-7 text-xs border-slate-700 text-slate-300">View Profile</Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                Browse Talent Pool
              </Button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
