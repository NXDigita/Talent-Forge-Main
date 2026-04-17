import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, Briefcase, MapPin, IndianRupee, Clock, ChevronDown, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    id: 1,
    title: "IoT Sensor Dashboard",
    company: "AgriTech Solutions",
    domain: "ECE",
    budget: 22000,
    duration: "3 weeks",
    skills: ["ESP32", "MQTT", "React"],
    verifiedOnly: true
  },
  {
    id: 2,
    title: "Motor Control PLC Programming",
    company: "AutoMfg Ind",
    domain: "EEE",
    budget: 18000,
    duration: "2 weeks",
    skills: ["PLC", "SCADA", "Ladder Logic"],
    verifiedOnly: true
  },
  {
    id: 3,
    title: "CAD Gear Assembly Design",
    company: "MechWorks",
    domain: "Mechanical",
    budget: 15000,
    duration: "1 week",
    skills: ["SolidWorks", "ANSYS", "GD&T"],
    verifiedOnly: false
  },
  {
    id: 4,
    title: "Sales Funnel Automation",
    company: "GrowthX",
    domain: "Business",
    budget: 12000,
    duration: "2 weeks",
    skills: ["HubSpot", "Zapier", "Analytics"],
    verifiedOnly: false
  },
  {
    id: 5,
    title: "ML Churn Prediction Model",
    company: "FinServe",
    domain: "CS/Data",
    budget: 35000,
    duration: "4 weeks",
    skills: ["Python", "Scikit-Learn", "SQL"],
    verifiedOnly: true
  },
  {
    id: 6,
    title: "React HR Analytics Dashboard",
    company: "PeopleOps",
    domain: "CS",
    budget: 28000,
    duration: "3 weeks",
    skills: ["React", "TypeScript", "Tailwind"],
    verifiedOnly: true
  }
];

const talentProfiles = [
  {
    id: 1,
    name: "Rahul S.",
    role: "Full Stack Engineer",
    domain: "CS",
    tfes: 91,
    skills: ["React", "Node.js", "AWS"],
    hourlyRate: 800
  },
  {
    id: 2,
    name: "Priya M.",
    role: "Embedded Systems Eng",
    domain: "ECE",
    tfes: 87,
    skills: ["C++", "RTOS", "PCB Design"],
    hourlyRate: 750
  },
  {
    id: 3,
    name: "Arjun K.",
    role: "Data Scientist",
    domain: "CS/Data",
    tfes: 79,
    skills: ["Python", "TensorFlow", "SQL"],
    hourlyRate: 900
  }
];

export default function Marketplace() {
  const [view, setView] = useState<'projects' | 'talent'>('projects');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [budgetRange, setBudgetRange] = useState([50000]);

  const domains = ["All", "CS", "ECE", "EEE", "Mechanical", "Business", "CS/Data"];

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = !selectedDomain || selectedDomain === "All" || p.domain === selectedDomain;
    const matchesBudget = p.budget <= budgetRange[0];
    return matchesSearch && matchesDomain && matchesBudget;
  });

  const filteredTalent = talentProfiles.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = !selectedDomain || selectedDomain === "All" || t.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="min-h-screen bg-[#0F172A] pt-24 pb-20">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar - Filters */}
        <div className="w-full md:w-64 space-y-8 flex-shrink-0">
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">View</h3>
            <div className="flex bg-slate-800 rounded-lg p-1">
              <button 
                onClick={() => setView('projects')}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${view === 'projects' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setView('talent')}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${view === 'talent' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Talent
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Domains</h3>
            <div className="space-y-2">
              {domains.map(domain => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain === selectedDomain ? null : domain)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedDomain === domain ? 'bg-blue-900/50 text-blue-400 border border-blue-800/50' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {view === 'projects' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">Max Budget</h3>
                <span className="text-sky-400 text-sm">₹{budgetRange[0].toLocaleString()}</span>
              </div>
              <Slider 
                value={budgetRange} 
                onValueChange={setBudgetRange} 
                max={100000} 
                min={5000}
                step={5000}
                className="py-2"
              />
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder={`Search ${view === 'projects' ? 'projects or companies' : 'talent by name or role'}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 h-14 bg-slate-800/50 border-slate-700 text-white rounded-xl focus-visible:ring-blue-500"
            />
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {view === 'projects' ? (
              filteredProjects.length > 0 ? (
                filteredProjects.map(project => (
                  <div key={project.id} className="glass-card p-6 flex flex-col h-full group hover:border-blue-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                        <div className="flex items-center text-slate-400 text-sm gap-2">
                          <Briefcase className="w-4 h-4" />
                          {project.company}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">
                        {project.domain}
                      </span>
                    </div>

                    <div className="flex gap-4 mb-6">
                      <div className="flex items-center gap-1 text-slate-300 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
                        <IndianRupee className="w-4 h-4 text-amber-500" />
                        <span className="font-semibold text-white">₹{project.budget.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-300 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
                        <Clock className="w-4 h-4 text-sky-400" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <div className="mb-6 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map(skill => (
                          <span key={skill} className="text-xs px-2 py-1 bg-blue-900/20 text-blue-300 border border-blue-800/50 rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      {project.verifiedOnly ? (
                        <div className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                          <CheckCircle2 className="w-4 h-4" />
                          Verified Talent Only
                        </div>
                      ) : (
                        <div className="text-xs text-slate-500">Open to all</div>
                      )}
                      <Button className="btn-gradient">Apply Now</Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-slate-400">
                  No projects found matching your criteria.
                </div>
              )
            ) : (
              filteredTalent.length > 0 ? (
                filteredTalent.map(talent => (
                  <div key={talent.id} className="glass-card p-6 flex flex-col h-full group hover:border-blue-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                          {talent.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{talent.name}</h3>
                          <div className="text-slate-400 text-sm">{talent.role}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-800 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="text-sm text-slate-400">TFES Score</div>
                        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                          {talent.tfes}/100
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-400">Rate</div>
                        <div className="font-semibold text-white">₹{talent.hourlyRate}/hr</div>
                      </div>
                    </div>

                    <div className="mb-6 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {talent.skills.map(skill => (
                          <span key={skill} className="text-xs px-2 py-1 bg-blue-900/20 text-blue-300 border border-blue-800/50 rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <Button className="w-full btn-gradient">Invite to Project</Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-slate-400">
                  No talent found matching your criteria.
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
