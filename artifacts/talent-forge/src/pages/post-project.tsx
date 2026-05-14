import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Plus, Trash2, ChevronRight, Zap, Target, Clock, Users,
  BarChart2, ArrowLeft, CheckCircle2, Layers, GitBranch,
  ArrowUpRight, Info, Calendar
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";

const DOMAINS = [
  "Electronics & Embedded",
  "Mechanical Design",
  "Civil & Structural",
  "Software / Full-Stack",
  "Data & AI / ML",
  "DevOps & Cloud",
  "IoT & Automation",
  "Electrical Systems",
];

const SKILL_TAGS = [
  "React", "Node.js", "Python", "CAD", "MATLAB", "Arduino",
  "AWS", "Docker", "PostgreSQL", "TensorFlow", "Solidworks",
  "AutoCAD", "PLC", "VHDL", "PCB Design", "Django", "FastAPI",
  "Kubernetes", "Spark", "ROS", "Flutter", "Go",
];

const SPRINT_DURATIONS = ["1 week", "2 weeks", "3 weeks", "4 weeks"];

interface Sprint {
  id: number;
  name: string;
  duration: string;
  storyPoints: number;
  deliverables: string;
  teamSize: number;
  roles: string;
}

const defaultSprint = (id: number): Sprint => ({
  id,
  name: `Sprint ${id}`,
  duration: "2 weeks",
  storyPoints: 20,
  deliverables: "",
  teamSize: 2,
  roles: "",
});

const STEP_LABELS = ["Project Details", "Sprint Planning", "Team & Budget", "Review & Post"];

export default function PostProject() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [projectTitle, setProjectTitle] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [engagementType, setEngagementType] = useState<"fixed" | "milestone">("milestone");

  const [sprints, setSprints] = useState<Sprint[]>([defaultSprint(1), defaultSprint(2), defaultSprint(3)]);

  const [totalBudget, setTotalBudget] = useState("");
  const [visibility, setVisibility] = useState<"public" | "invite">("public");
  const [deadline, setDeadline] = useState("");

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const addSprint = () => {
    const newId = sprints.length > 0 ? Math.max(...sprints.map(s => s.id)) + 1 : 1;
    setSprints(prev => [...prev, defaultSprint(newId)]);
  };

  const removeSprint = (id: number) => {
    setSprints(prev => prev.filter(s => s.id !== id));
  };

  const updateSprint = (id: number, field: keyof Sprint, value: string | number) => {
    setSprints(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const totalPoints = sprints.reduce((sum, s) => sum + s.storyPoints, 0);
  const avgVelocity = sprints.length > 0 ? Math.round(totalPoints / sprints.length) : 0;

  const velocityData = sprints.map((s, i) => ({
    name: s.name,
    points: s.storyPoints,
    fill: i % 2 === 0 ? "#1D4ED8" : "#3B82F6",
  }));

  const durationToWeeks = (d: string) => parseInt(d);
  const totalWeeks = sprints.reduce((sum, s) => sum + durationToWeeks(s.duration), 0);

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pt-28 pb-20 px-4 flex items-center justify-center">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-blue-700" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 mb-3">Project Posted!</h1>
          <p className="text-zinc-500 mb-2">
            <span className="font-semibold text-zinc-800">{projectTitle || "Your project"}</span> is now live on the Talent Forge marketplace.
          </p>
          <p className="text-zinc-400 text-sm mb-8">
            AI matching is scanning {totalPoints} story points across {sprints.length} sprints. You'll get matched engineers within 24 hours.
          </p>
          <div className="glass-card p-5 mb-8 text-left space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Total sprints</span>
              <span className="font-semibold text-zinc-800">{sprints.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Total story points</span>
              <span className="font-semibold text-zinc-800">{totalPoints} pts</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Timeline</span>
              <span className="font-semibold text-zinc-800">{totalWeeks} weeks</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Avg velocity</span>
              <span className="font-semibold text-blue-700">{avgVelocity} pts/sprint</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard/employer">
              <Button className="btn-gradient h-11 px-6">View Dashboard <ArrowUpRight className="w-4 h-4 ml-2" /></Button>
            </Link>
            <Button variant="outline" className="h-11 px-6 border-zinc-200 text-zinc-700" onClick={() => { setSubmitted(false); setStep(0); }}>
              Post Another Project
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Header */}
      <div className="border-b border-zinc-200 bg-white/70 backdrop-blur-md sticky top-20 z-30">
        <div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard/employer">
              <button className="p-2 rounded-lg hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
            </Link>
            <div>
              <h1 className="font-bold text-zinc-900 text-lg leading-none">Post a Sprint Project</h1>
              <p className="text-xs text-zinc-400 mt-0.5">Structured agile delivery for verified engineering talent</p>
            </div>
          </div>
          {/* Step indicator */}
          <div className="hidden md:flex items-center gap-2">
            {STEP_LABELS.map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <button
                  onClick={() => i < step && setStep(i)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    i === step
                      ? "bg-blue-700 text-white"
                      : i < step
                      ? "bg-blue-50 text-blue-700 border border-blue-200 cursor-pointer"
                      : "bg-zinc-100 text-zinc-400"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${i === step ? "bg-white/20" : i < step ? "bg-blue-200" : "bg-zinc-200"}`}>
                    {i < step ? "✓" : i + 1}
                  </span>
                  {label}
                </button>
                {i < STEP_LABELS.length - 1 && <ChevronRight className="w-3 h-3 text-zinc-300" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-10">

        {/* STEP 0: Project Details */}
        {step === 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-1">Project Details</h2>
                <p className="text-zinc-500 text-sm">Define what you're building so engineers can qualify and apply.</p>
              </div>

              <div className="glass-card p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Project Title *</label>
                  <input
                    value={projectTitle}
                    onChange={e => setProjectTitle(e.target.value)}
                    placeholder="e.g. IoT Fleet Monitoring Dashboard (MVP)"
                    className="w-full h-11 px-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Engineering Domain *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {DOMAINS.map(d => (
                      <button
                        key={d}
                        onClick={() => setDomain(d)}
                        className={`px-3 py-2.5 rounded-lg text-sm text-left font-medium border transition-all ${
                          domain === d
                            ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                            : "bg-white text-zinc-600 border-zinc-200 hover:border-blue-300 hover:text-blue-700"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Project Brief *</label>
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows={4}
                    placeholder="Describe the problem, scope, expected outcomes, and any specific constraints..."
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Required Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {SKILL_TAGS.map(skill => (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                          selectedSkills.includes(skill)
                            ? "bg-blue-700 text-white border-blue-700"
                            : "bg-white text-zinc-600 border-zinc-200 hover:border-blue-300"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Engagement Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["milestone", "fixed"] as const).map(type => (
                      <button
                        key={type}
                        onClick={() => setEngagementType(type)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium border text-left transition-all ${
                          engagementType === type
                            ? "bg-blue-50 border-blue-400 text-blue-800"
                            : "bg-white border-zinc-200 text-zinc-600 hover:border-blue-200"
                        }`}
                      >
                        <span className="block font-semibold capitalize">{type === "milestone" ? "Milestone-based" : "Fixed Price"}</span>
                        <span className="text-xs text-zinc-400">{type === "milestone" ? "Pay per sprint completion" : "Single agreed total"}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar hint */}
            <div className="space-y-4">
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-zinc-800">Why sprint-based?</span>
                </div>
                <ul className="text-sm text-zinc-500 space-y-2">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Structured delivery with clear milestones</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Pay only when sprint is verified</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Velocity tracking keeps team accountable</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> AI matches best-fit engineers per domain</li>
                </ul>
              </div>
              <div className="glass-card p-5 bg-blue-50/40 border border-blue-100">
                <p className="text-xs text-blue-700 font-semibold mb-1">Avg time to first match</p>
                <p className="text-2xl font-bold text-blue-800">4 hrs</p>
                <p className="text-xs text-zinc-500 mt-1">For Electronics & Embedded domain projects</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 1: Sprint Planning */}
        {step === 1 && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-1">Sprint Planning</h2>
                <p className="text-zinc-500 text-sm">Define each sprint's scope, duration, and story point target to set velocity expectations.</p>
              </div>

              <div className="space-y-4">
                {sprints.map((sprint, idx) => (
                  <div key={sprint.id} className="glass-card p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-700 text-white text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </div>
                        <input
                          value={sprint.name}
                          onChange={e => updateSprint(sprint.id, "name", e.target.value)}
                          className="font-semibold text-zinc-900 bg-transparent border-b border-transparent hover:border-zinc-200 focus:border-blue-400 focus:outline-none text-sm px-1 py-0.5 transition-colors"
                        />
                      </div>
                      <button
                        onClick={() => removeSprint(sprint.id)}
                        disabled={sprints.length <= 1}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-30"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 mb-1">Duration</label>
                        <select
                          value={sprint.duration}
                          onChange={e => updateSprint(sprint.id, "duration", e.target.value)}
                          className="w-full h-9 px-2 rounded-lg border border-zinc-200 bg-white text-zinc-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                        >
                          {SPRINT_DURATIONS.map(d => <option key={d}>{d}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 mb-1">Story Points</label>
                        <div className="relative">
                          <input
                            type="number"
                            min={1}
                            max={200}
                            value={sprint.storyPoints}
                            onChange={e => updateSprint(sprint.id, "storyPoints", Number(e.target.value))}
                            className="w-full h-9 px-3 rounded-lg border border-zinc-200 bg-white text-zinc-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                          />
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-zinc-400">pts</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 mb-1">Engineers Needed</label>
                        <input
                          type="number"
                          min={1}
                          max={20}
                          value={sprint.teamSize}
                          onChange={e => updateSprint(sprint.id, "teamSize", Number(e.target.value))}
                          className="w-full h-9 px-3 rounded-lg border border-zinc-200 bg-white text-zinc-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="block text-xs font-semibold text-zinc-500 mb-1">Sprint Deliverables</label>
                      <input
                        value={sprint.deliverables}
                        onChange={e => updateSprint(sprint.id, "deliverables", e.target.value)}
                        placeholder="e.g. MQTT broker setup, sensor data pipeline, dashboard mockup"
                        className="w-full h-9 px-3 rounded-lg border border-zinc-200 bg-white text-zinc-800 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1">Specific Roles / Skills for this Sprint</label>
                      <input
                        value={sprint.roles}
                        onChange={e => updateSprint(sprint.id, "roles", e.target.value)}
                        placeholder="e.g. Embedded C dev, PCB designer"
                        className="w-full h-9 px-3 rounded-lg border border-zinc-200 bg-white text-zinc-800 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={addSprint}
                className="flex items-center gap-2 w-full py-3 rounded-xl border-2 border-dashed border-blue-200 text-blue-600 hover:border-blue-400 hover:bg-blue-50/40 transition-all text-sm font-medium justify-center"
              >
                <Plus className="w-4 h-4" />
                Add Sprint
              </button>
            </div>

            {/* Velocity sidebar */}
            <div className="space-y-4">
              <div className="glass-card p-5">
                <h3 className="text-sm font-semibold text-zinc-700 mb-4 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-blue-600" />
                  Velocity Preview
                </h3>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={velocityData} barCategoryGap="30%">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#71717A" }} />
                    <YAxis tick={{ fontSize: 10, fill: "#71717A" }} />
                    <Tooltip
                      formatter={(v: number) => [`${v} pts`, "Story Points"]}
                      contentStyle={{ borderRadius: 8, border: "1px solid #E4E4E7", fontSize: 12 }}
                    />
                    <Bar dataKey="points" radius={[4, 4, 0, 0]}>
                      {velocityData.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-zinc-500">Total Points</p>
                    <p className="text-xl font-bold text-blue-800">{totalPoints}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-zinc-500">Avg Velocity</p>
                    <p className="text-xl font-bold text-amber-700">{avgVelocity}/sprint</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="glass-card p-5">
                <h3 className="text-sm font-semibold text-zinc-700 mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  Timeline
                </h3>
                <div className="space-y-2">
                  {sprints.map((s, i) => {
                    const width = Math.max(20, (durationToWeeks(s.duration) / totalWeeks) * 100);
                    return (
                      <div key={s.id} className="flex items-center gap-2">
                        <span className="text-xs text-zinc-400 w-16 shrink-0">{s.name}</span>
                        <div className="flex-1 h-5 bg-zinc-100 rounded overflow-hidden">
                          <div
                            className="h-full rounded flex items-center px-2"
                            style={{
                              width: `${width}%`,
                              background: i % 2 === 0 ? "#1D4ED8" : "#3B82F6",
                            }}
                          >
                            <span className="text-white text-[10px] font-semibold whitespace-nowrap overflow-hidden">{s.duration}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-zinc-400 mt-3">Total: {totalWeeks} weeks</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Team & Budget */}
        {step === 2 && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-1">Team & Budget</h2>
                <p className="text-zinc-500 text-sm">Set your total budget, deadline, and visibility preferences.</p>
              </div>

              <div className="glass-card p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Total Project Budget (INR) *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 font-semibold">₹</span>
                    <input
                      type="number"
                      value={totalBudget}
                      onChange={e => setTotalBudget(e.target.value)}
                      placeholder="e.g. 150000"
                      className="w-full h-11 pl-8 pr-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                    />
                  </div>
                  {totalBudget && (
                    <p className="text-xs text-zinc-400 mt-1">
                      ≈ ₹{Math.round(Number(totalBudget) / Math.max(sprints.length, 1)).toLocaleString()} per sprint · ₹{Math.round(Number(totalBudget) / Math.max(totalPoints, 1)).toLocaleString()} per story point
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Project Deadline</label>
                  <input
                    type="date"
                    value={deadline}
                    onChange={e => setDeadline(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Project Visibility</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["public", "invite"] as const).map(v => (
                      <button
                        key={v}
                        onClick={() => setVisibility(v)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium border text-left transition-all ${
                          visibility === v
                            ? "bg-blue-50 border-blue-400 text-blue-800"
                            : "bg-white border-zinc-200 text-zinc-600 hover:border-blue-200"
                        }`}
                      >
                        <span className="block font-semibold capitalize">{v === "public" ? "Public Listing" : "Invite Only"}</span>
                        <span className="text-xs text-zinc-400">{v === "public" ? "Any verified engineer can apply" : "Share a private link with shortlisted engineers"}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">TFES Minimum Score (optional)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      defaultValue={60}
                      className="flex-1 accent-blue-700"
                    />
                    <span className="text-sm font-bold text-blue-700 w-12 text-right">60+</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">Only engineers with TFES &ge; this threshold will see your project.</p>
                </div>
              </div>

              {/* Per-sprint budget breakdown */}
              {totalBudget && (
                <div className="glass-card p-5">
                  <h3 className="text-sm font-semibold text-zinc-700 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" />
                    Budget Allocation by Sprint
                  </h3>
                  <div className="space-y-2">
                    {sprints.map(s => {
                      const weight = s.storyPoints / Math.max(totalPoints, 1);
                      const sprintBudget = Math.round(Number(totalBudget) * weight);
                      return (
                        <div key={s.id} className="flex items-center justify-between text-sm">
                          <span className="text-zinc-600">{s.name}</span>
                          <div className="flex items-center gap-3">
                            <div className="w-28 h-2 bg-zinc-100 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${weight * 100}%` }} />
                            </div>
                            <span className="font-semibold text-zinc-800 w-20 text-right">₹{sprintBudget.toLocaleString()}</span>
                          </div>
                        </div>
                      );
                    })}
                    <div className="border-t border-zinc-100 pt-2 flex justify-between font-bold text-sm">
                      <span className="text-zinc-700">Total</span>
                      <span className="text-blue-800">₹{Number(totalBudget).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5 bg-blue-50/40 border border-blue-100">
                <h3 className="text-sm font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Project Summary
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Domain</span>
                    <span className="font-medium text-zinc-800 text-right max-w-[130px] leading-tight">{domain || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Sprints</span>
                    <span className="font-medium text-zinc-800">{sprints.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Total pts</span>
                    <span className="font-medium text-zinc-800">{totalPoints}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Timeline</span>
                    <span className="font-medium text-zinc-800">{totalWeeks} weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Avg velocity</span>
                    <span className="font-medium text-blue-700">{avgVelocity} pts/sprint</span>
                  </div>
                </div>
              </div>
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-zinc-700">Velocity benchmark</span>
                </div>
                <p className="text-xs text-zinc-500">Recommended: 15–30 pts/sprint for a 2-person team over 2 weeks. Higher velocity with more engineers.</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Review */}
        {step === 3 && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-1">Review & Post</h2>
                <p className="text-zinc-500 text-sm">Confirm your project details before it goes live on the marketplace.</p>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-zinc-800 mb-4 flex items-center gap-2"><Zap className="w-4 h-4 text-blue-600" /> Project Overview</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3"><span className="text-zinc-400 w-28 shrink-0">Title</span><span className="font-medium text-zinc-800">{projectTitle || <span className="text-zinc-300 italic">Not set</span>}</span></div>
                  <div className="flex gap-3"><span className="text-zinc-400 w-28 shrink-0">Domain</span><span className="font-medium text-zinc-800">{domain || <span className="text-zinc-300 italic">Not set</span>}</span></div>
                  <div className="flex gap-3"><span className="text-zinc-400 w-28 shrink-0">Engagement</span><span className="font-medium text-zinc-800 capitalize">{engagementType === "milestone" ? "Milestone-based" : "Fixed Price"}</span></div>
                  <div className="flex gap-3"><span className="text-zinc-400 w-28 shrink-0">Visibility</span><span className="font-medium text-zinc-800 capitalize">{visibility}</span></div>
                  {totalBudget && <div className="flex gap-3"><span className="text-zinc-400 w-28 shrink-0">Budget</span><span className="font-medium text-zinc-800">₹{Number(totalBudget).toLocaleString()}</span></div>}
                  {deadline && <div className="flex gap-3"><span className="text-zinc-400 w-28 shrink-0">Deadline</span><span className="font-medium text-zinc-800">{deadline}</span></div>}
                  {selectedSkills.length > 0 && (
                    <div className="flex gap-3">
                      <span className="text-zinc-400 w-28 shrink-0">Skills</span>
                      <div className="flex flex-wrap gap-1">{selectedSkills.map(s => <span key={s} className="px-2 py-0.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-xs">{s}</span>)}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-zinc-800 mb-4 flex items-center gap-2"><Layers className="w-4 h-4 text-blue-600" /> Sprint Breakdown</h3>
                <div className="space-y-3">
                  {sprints.map((s, i) => (
                    <div key={s.id} className="flex items-start gap-4 p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                      <div className="w-6 h-6 rounded-md bg-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-zinc-800 text-sm">{s.name}</p>
                        {s.deliverables && <p className="text-xs text-zinc-500 mt-0.5 truncate">{s.deliverables}</p>}
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-bold text-blue-700">{s.storyPoints} pts</p>
                        <p className="text-xs text-zinc-400">{s.duration} · {s.teamSize} eng</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-5 bg-blue-50/40 border border-blue-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-zinc-500 mb-1">Total Story Points</p>
                    <p className="text-2xl font-bold text-blue-800">{totalPoints}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-1">Project Duration</p>
                    <p className="text-2xl font-bold text-blue-800">{totalWeeks}w</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-1">Avg Velocity</p>
                    <p className="text-2xl font-bold text-amber-700">{avgVelocity} <span className="text-base font-normal">pts</span></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-200 text-sm text-zinc-500">
                <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                By posting, you agree that payment will be released to engineers upon verified sprint completion and approval by your team.
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5">
                <h3 className="text-sm font-semibold text-zinc-700 mb-3 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-blue-600" />
                  Final Velocity Chart
                </h3>
                <ResponsiveContainer width="100%" height={140}>
                  <BarChart data={velocityData} barCategoryGap="30%">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                    <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#71717A" }} />
                    <YAxis tick={{ fontSize: 9, fill: "#71717A" }} />
                    <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E4E4E7", fontSize: 11 }} formatter={(v: number) => [`${v} pts`]} />
                    <Bar dataKey="points" radius={[4, 4, 0, 0]}>
                      {velocityData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-zinc-700">AI Matching</span>
                </div>
                <p className="text-xs text-zinc-500">After posting, AI scans your sprint requirements and TFES scores to surface the top 10 matched engineers within 4 hours.</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-zinc-200">
          <Button
            variant="outline"
            className="h-11 px-6 border-zinc-200 text-zinc-700"
            onClick={() => step > 0 ? setStep(step - 1) : setLocation("/dashboard/employer")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {step === 0 ? "Cancel" : "Back"}
          </Button>

          {step < 3 ? (
            <Button
              className="btn-gradient h-11 px-8"
              onClick={() => setStep(step + 1)}
            >
              Continue
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              className="btn-gradient h-11 px-8"
              onClick={() => setSubmitted(true)}
            >
              Post Project
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
