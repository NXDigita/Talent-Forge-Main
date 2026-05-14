import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, Users, Briefcase, BarChart3, Settings, LogOut,
  Zap, Search, Star, Shield, Clock, MapPin, ChevronDown,
  Sparkles, BookmarkPlus, Bookmark, Send, Filter, X,
  Code2, Cpu, Brain, Wrench, BarChart2, ArrowUpRight, CheckCircle2,
  SlidersHorizontal, RefreshCw
} from "lucide-react";

const DOMAINS = [
  "All Domains",
  "Software / Full-Stack",
  "AI / Data Science",
  "Electronics & Embedded",
  "Electrical Systems",
  "Mechanical Design",
  "DevOps & Cloud",
  "IoT & Automation",
];

const COMPANY_TYPES = ["Startup", "MSME", "Enterprise", "R&D / Research"];

const SKILLS_LIST = [
  "React", "Node.js", "Python", "TensorFlow", "CAD", "Arduino",
  "AWS", "Docker", "PostgreSQL", "VHDL", "PCB Design", "FastAPI",
  "Kubernetes", "Embedded C", "MATLAB", "Django", "Flutter", "Go",
];

const ALL_CANDIDATES = [
  {
    id: 1, name: "Rahul Sharma", initials: "RS", role: "Full-Stack Engineer",
    domain: "Software / Full-Stack", tfes: 92, match: 98,
    skills: ["React", "Node.js", "PostgreSQL", "Docker"],
    location: "Bengaluru", availability: "Immediate", experience: "3 yrs",
    projects: 14, icon: <Code2 className="w-4 h-4" />, color: "blue",
    bio: "Led 3 product teams at early-stage startups. Specialises in scalable React/Node architectures.",
  },
  {
    id: 2, name: "Priya Patel", initials: "PP", role: "Embedded Systems Engineer",
    domain: "Electronics & Embedded", tfes: 88, match: 95,
    skills: ["Embedded C", "VHDL", "PCB Design", "Arduino"],
    location: "Pune", availability: "2 weeks", experience: "2 yrs",
    projects: 9, icon: <Cpu className="w-4 h-4" />, color: "sky",
    bio: "Designed firmware for industrial IoT gateways. Strong in RTOS and low-power embedded design.",
  },
  {
    id: 3, name: "Amit Kumar", initials: "AK", role: "Data Scientist",
    domain: "AI / Data Science", tfes: 94, match: 91,
    skills: ["Python", "TensorFlow", "PostgreSQL", "FastAPI"],
    location: "Hyderabad", availability: "Immediate", experience: "4 yrs",
    projects: 18, icon: <Brain className="w-4 h-4" />, color: "indigo",
    bio: "Built ML pipelines for fintech & healthtech. Published 2 papers on NLP and churn prediction.",
  },
  {
    id: 4, name: "Sneha Reddy", initials: "SR", role: "DevOps Engineer",
    domain: "DevOps & Cloud", tfes: 86, match: 89,
    skills: ["Kubernetes", "AWS", "Docker", "Go"],
    location: "Chennai", availability: "1 month", experience: "3 yrs",
    projects: 11, icon: <BarChart2 className="w-4 h-4" />, color: "teal",
    bio: "Managed multi-region Kubernetes clusters for 3 SaaS products. Zero-downtime deployment specialist.",
  },
  {
    id: 5, name: "Vikram Singh", initials: "VS", role: "Mechanical Design Engineer",
    domain: "Mechanical Design", tfes: 82, match: 87,
    skills: ["CAD", "MATLAB", "Solidworks", "ANSYS"],
    location: "Jaipur", availability: "Immediate", experience: "2 yrs",
    projects: 7, icon: <Wrench className="w-4 h-4" />, color: "orange",
    bio: "Designed precision components for automotive OEM suppliers. Expert in GD&T and FEA simulation.",
  },
  {
    id: 6, name: "Anjali Nair", initials: "AN", role: "AI / ML Engineer",
    domain: "AI / Data Science", tfes: 91, match: 93,
    skills: ["Python", "TensorFlow", "Django", "MATLAB"],
    location: "Kochi", availability: "Immediate", experience: "3 yrs",
    projects: 13, icon: <Brain className="w-4 h-4" />, color: "indigo",
    bio: "Computer vision researcher turned product engineer. Built real-time defect detection for manufacturing lines.",
  },
  {
    id: 7, name: "Rohan Gupta", initials: "RG", role: "Backend Engineer",
    domain: "Software / Full-Stack", tfes: 84, match: 85,
    skills: ["Go", "PostgreSQL", "Docker", "AWS"],
    location: "Mumbai", availability: "2 weeks", experience: "2 yrs",
    projects: 8, icon: <Code2 className="w-4 h-4" />, color: "blue",
    bio: "Built high-throughput Go microservices handling 100k+ req/s. Open-source contributor.",
  },
  {
    id: 8, name: "Meera Krishnan", initials: "MK", role: "IoT Systems Engineer",
    domain: "Electronics & Embedded", tfes: 87, match: 90,
    skills: ["Arduino", "Embedded C", "MQTT", "PCB Design"],
    location: "Coimbatore", availability: "Immediate", experience: "3 yrs",
    projects: 10, icon: <Cpu className="w-4 h-4" />, color: "sky",
    bio: "End-to-end IoT product experience — from sensor selection to cloud dashboard integration.",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  sky: "bg-sky-100 text-sky-700 border-sky-100",
  indigo: "bg-indigo-100 text-indigo-700 border-indigo-100",
  teal: "bg-teal-100 text-teal-700 border-teal-100",
  orange: "bg-orange-100 text-orange-700 border-orange-100",
};

const avatarColor: Record<string, string> = {
  blue: "from-blue-600 to-blue-500",
  sky: "from-sky-500 to-blue-500",
  indigo: "from-indigo-600 to-blue-500",
  teal: "from-teal-600 to-emerald-500",
  orange: "from-orange-500 to-amber-500",
};

const matchColor = (score: number) => {
  if (score >= 95) return "bg-green-100 text-green-700 border-green-200";
  if (score >= 88) return "bg-blue-100 text-blue-700 border-blue-200";
  return "bg-amber-100 text-amber-700 border-amber-200";
};

export default function AIMatch() {
  const [domain, setDomain] = useState("All Domains");
  const [companyType, setCompanyType] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [tfesMin, setTfesMin] = useState(70);
  const [availability, setAvailability] = useState("Any");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [shortlisted, setShortlisted] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(true);
  const [invitedIds, setInvitedIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const runMatch = () => {
    setIsSearching(true);
    setHasSearched(false);
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 2000);
  };

  const toggleShortlist = (id: number) => {
    setShortlisted(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const invite = (id: number) => {
    setInvitedIds(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  const filteredCandidates = ALL_CANDIDATES.filter(c => {
    if (domain !== "All Domains" && c.domain !== domain) return false;
    if (c.tfes < tfesMin) return false;
    if (availability !== "Any" && c.availability !== availability) return false;
    if (selectedSkills.length > 0 && !selectedSkills.some(s => c.skills.includes(s))) return false;
    if (searchQuery && !c.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !c.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !c.domain.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  }).sort((a, b) => b.match - a.match);

  return (
    <div className="min-h-screen bg-background pt-20 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-zinc-50 border-r border-zinc-200 p-6 flex flex-col hidden md:flex h-[calc(100vh-80px)] sticky top-20">
        <div className="flex items-center gap-4 mb-8 p-4 bg-blue-50/70 rounded-xl border border-zinc-200">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(30,64,175,0.4)]">
            AC
          </div>
          <div>
            <h3 className="font-bold text-zinc-900 leading-tight">Acme Corp</h3>
            <span className="text-xs font-medium text-zinc-500">Enterprise Plan</span>
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          <Link href="/dashboard/employer" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Overview</span>
          </Link>
          <Link href="/ai-match" className="flex items-center gap-3 px-4 py-3 text-zinc-900 bg-blue-50 border border-blue-200 rounded-lg transition-colors">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="font-medium">AI Matching</span>
            <span className="ml-auto text-[10px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded-full">NEW</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">Talent Pool</span>
          </Link>
          <Link href="/post-project" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Post Project</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Analytics</span>
          </Link>
        </nav>

        <div className="mt-auto space-y-2 border-t border-zinc-200 pt-4">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-hidden flex flex-col">

        {/* Top bar */}
        <div className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-600 flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-zinc-900 text-lg leading-none">AI Candidate Matching</h1>
              <p className="text-xs text-zinc-400 mt-0.5">Search verified engineers by domain, skills & TFES score</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {shortlisted.length > 0 && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                <Bookmark className="w-3.5 h-3.5 fill-amber-400" />
                {shortlisted.length} shortlisted
              </div>
            )}
            <button
              onClick={() => setShowFilters(f => !f)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${showFilters ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300"}`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden relative">

          {/* Mobile backdrop */}
          {showFilters && (
            <div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setShowFilters(false)}
            />
          )}

          {/* Filter panel — full-screen overlay on mobile, side panel on desktop */}
          {showFilters && (
            <div className="fixed md:relative inset-y-0 left-0 z-50 md:z-auto w-80 md:w-72 shrink-0 border-r border-zinc-200 bg-white md:bg-zinc-50/50 overflow-y-auto p-5 space-y-6 h-full shadow-2xl md:shadow-none">

              {/* Mobile close button */}
              <div className="flex items-center justify-between md:hidden pb-2 border-b border-zinc-100">
                <span className="font-bold text-zinc-900">Filters</span>
                <button onClick={() => setShowFilters(false)} className="p-1.5 rounded-lg hover:bg-zinc-100">
                  <X className="w-5 h-5 text-zinc-500" />
                </button>
              </div>

              {/* Search box */}
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Name, role, domain..."
                    className="w-full h-9 pl-9 pr-3 rounded-lg border border-zinc-200 bg-white text-zinc-800 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              </div>

              {/* Company type */}
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Your Company Type</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {COMPANY_TYPES.map(t => (
                    <button
                      key={t}
                      onClick={() => setCompanyType(ct => ct === t ? "" : t)}
                      className={`px-2 py-2 rounded-lg text-xs font-medium border transition-all text-left ${companyType === t ? "bg-blue-700 text-white border-blue-700" : "bg-white text-zinc-600 border-zinc-200 hover:border-blue-200"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Domain */}
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Engineering Domain</label>
                <select
                  value={domain}
                  onChange={e => setDomain(e.target.value)}
                  className="w-full h-9 px-3 rounded-lg border border-zinc-200 bg-white text-zinc-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                >
                  {DOMAINS.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>

              {/* TFES minimum */}
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 flex justify-between">
                  <span>Min TFES Score</span>
                  <span className="text-blue-700 font-bold">{tfesMin}+</span>
                </label>
                <input
                  type="range"
                  min={50}
                  max={95}
                  step={5}
                  value={tfesMin}
                  onChange={e => setTfesMin(Number(e.target.value))}
                  className="w-full accent-blue-700"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                  <span>50</span><span>70</span><span>85</span><span>95</span>
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Availability</label>
                <div className="space-y-1.5">
                  {["Any", "Immediate", "2 weeks", "1 month"].map(opt => (
                    <button
                      key={opt}
                      onClick={() => setAvailability(opt)}
                      className={`w-full px-3 py-2 rounded-lg text-xs font-medium border text-left transition-all ${availability === opt ? "bg-blue-50 border-blue-400 text-blue-800" : "bg-white border-zinc-200 text-zinc-600 hover:border-blue-200"}`}
                    >
                      {opt === "Any" ? "Any availability" : opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Required Skills</label>
                <div className="flex flex-wrap gap-1.5">
                  {SKILLS_LIST.map(skill => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all ${selectedSkills.includes(skill) ? "bg-blue-700 text-white border-blue-700" : "bg-white text-zinc-600 border-zinc-200 hover:border-blue-300"}`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action */}
              <Button
                className="w-full btn-gradient h-10 font-semibold"
                onClick={runMatch}
                disabled={isSearching}
              >
                {isSearching ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    AI Scanning…
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Run AI Match
                  </>
                )}
              </Button>

              {(selectedSkills.length > 0 || domain !== "All Domains" || tfesMin !== 70 || availability !== "Any" || companyType || searchQuery) && (
                <button
                  onClick={() => { setSelectedSkills([]); setDomain("All Domains"); setTfesMin(70); setAvailability("Any"); setCompanyType(""); setSearchQuery(""); }}
                  className="w-full flex items-center justify-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  <X className="w-3 h-3" /> Reset all filters
                </button>
              )}
            </div>
          )}

          {/* Results area */}
          <div className="flex-1 overflow-y-auto p-6">

            {/* Pre-search state */}
            {!hasSearched && !isSearching && (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5">
                  <Sparkles className="w-9 h-9 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-2">AI-Powered Candidate Search</h2>
                <p className="text-zinc-500 max-w-md mb-6">
                  Set your domain, required skills, and TFES threshold on the left. Our AI ranks candidates by compatibility with your company profile and project history.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-sm">
                  {[
                    { label: "Candidates indexed", value: "12,400+" },
                    { label: "Avg match time", value: "< 2 sec" },
                    { label: "Match accuracy", value: "94%" },
                  ].map((s, i) => (
                    <div key={i} className="glass-card p-3 text-center">
                      <p className="text-lg font-bold text-blue-800">{s.value}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <Button className="btn-gradient mt-8 h-11 px-8" onClick={runMatch}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Run AI Match Now
                </Button>
              </div>
            )}

            {/* Scanning animation */}
            {isSearching && (
              <div className="flex flex-col items-center justify-center h-full py-20">
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">AI Matching in Progress</h3>
                <div className="space-y-1.5 text-sm text-zinc-500 text-center">
                  {["Scanning 12,400+ verified profiles…", "Filtering by TFES ≥ " + tfesMin + " and domain…", "Ranking by company compatibility…"].map((msg, i) => (
                    <p key={i} className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                      {msg}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {hasSearched && !isSearching && (
              <div>
                {/* Result header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="text-lg font-bold text-zinc-900">
                      {filteredCandidates.length} candidates matched
                    </h2>
                    <p className="text-sm text-zinc-500">
                      Sorted by AI match score · Domain: <span className="font-medium text-zinc-700">{domain}</span> · TFES ≥ <span className="font-medium text-zinc-700">{tfesMin}</span>
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="border-zinc-200 text-zinc-600 text-xs" onClick={runMatch}>
                    <RefreshCw className="w-3 h-3 mr-1.5" /> Re-run
                  </Button>
                </div>

                {filteredCandidates.length === 0 ? (
                  <div className="text-center py-16 text-zinc-400">
                    <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
                    <p className="font-medium">No candidates match your current filters.</p>
                    <p className="text-sm mt-1">Try lowering the TFES threshold or selecting a broader domain.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {filteredCandidates.map(c => (
                      <div key={c.id} className={`glass-card p-5 flex flex-col gap-4 ${shortlisted.includes(c.id) ? "ring-2 ring-amber-300" : ""}`}>
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${avatarColor[c.color]} flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0`}>
                              {c.initials}
                            </div>
                            <div>
                              <h3 className="font-bold text-zinc-900 text-sm">{c.name}</h3>
                              <p className="text-xs text-zinc-500">{c.role}</p>
                              <div className="flex items-center gap-1.5 mt-1">
                                <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded border text-[10px] font-medium ${colorMap[c.color]}`}>
                                  {c.icon}
                                  {c.domain}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Match score */}
                          <div className={`flex flex-col items-center px-3 py-2 rounded-xl border font-bold ${matchColor(c.match)}`}>
                            <span className="text-xl leading-none">{c.match}%</span>
                            <span className="text-[10px] font-semibold mt-0.5 uppercase tracking-wide">Match</span>
                          </div>
                        </div>

                        {/* Bio */}
                        <p className="text-xs text-zinc-500 leading-relaxed">{c.bio}</p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5">
                          {c.skills.map(s => (
                            <span key={s} className={`text-xs px-2 py-0.5 rounded-md border ${selectedSkills.includes(s) ? "bg-blue-100 text-blue-700 border-blue-200 font-semibold" : "bg-zinc-50 text-zinc-600 border-zinc-200"}`}>
                              {s}
                            </span>
                          ))}
                        </div>

                        {/* Meta row */}
                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{c.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{c.availability}</span>
                          <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{c.experience}</span>
                          <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" />{c.projects} projects</span>
                        </div>

                        {/* TFES bar */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span className="text-xs font-bold text-zinc-800">TFES {c.tfes}/100</span>
                          </div>
                          <div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500"
                              style={{ width: `${c.tfes}%` }}
                            />
                          </div>
                          <Shield className="w-3.5 h-3.5 text-blue-500" />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 pt-1 border-t border-zinc-100">
                          <Button
                            size="sm"
                            className="flex-1 btn-gradient h-8 text-xs"
                            onClick={() => invite(c.id)}
                            disabled={invitedIds.includes(c.id)}
                          >
                            {invitedIds.includes(c.id) ? (
                              <><CheckCircle2 className="w-3.5 h-3.5 mr-1.5" /> Invited</>
                            ) : (
                              <><Send className="w-3.5 h-3.5 mr-1.5" /> Invite to Project</>
                            )}
                          </Button>
                          <button
                            onClick={() => toggleShortlist(c.id)}
                            className={`h-8 px-3 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all ${shortlisted.includes(c.id) ? "bg-amber-50 border-amber-300 text-amber-700" : "bg-white border-zinc-200 text-zinc-600 hover:border-amber-300 hover:text-amber-600"}`}
                          >
                            {shortlisted.includes(c.id) ? <Bookmark className="w-3.5 h-3.5 fill-amber-400" /> : <BookmarkPlus className="w-3.5 h-3.5" />}
                            {shortlisted.includes(c.id) ? "Saved" : "Save"}
                          </button>
                          <button className="h-8 px-3 rounded-lg border border-zinc-200 bg-white text-zinc-600 text-xs font-medium flex items-center gap-1.5 hover:border-zinc-300 transition-all">
                            <ArrowUpRight className="w-3.5 h-3.5" /> Profile
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
