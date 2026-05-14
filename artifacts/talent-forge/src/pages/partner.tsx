import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Building2, Users, GraduationCap, Briefcase, CheckCircle2,
  ArrowRight, ArrowLeft, ChevronRight, Zap, Shield, BarChart3,
  TrendingUp, Star, Info, Phone, Mail, Globe, ArrowUpRight
} from "lucide-react";

type OrgType = "startup" | "msme" | "enterprise" | "college" | "";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  color: string;
  highlight: boolean;
  features: string[];
  forType: OrgType[];
}

const PLANS: PricingPlan[] = [
  {
    id: "startup",
    name: "Employer Startup",
    price: "₹4,999",
    period: "/mo",
    color: "amber",
    highlight: false,
    forType: ["startup"],
    features: [
      "Full verified talent pool access",
      "Post up to 5 sprint projects/mo",
      "Basic AI candidate matching",
      "In-platform messaging",
      "Standard contract templates",
    ],
  },
  {
    id: "growth",
    name: "Employer Growth",
    price: "₹14,999",
    period: "/mo",
    badge: "Most Popular",
    color: "blue",
    highlight: true,
    forType: ["startup", "msme"],
    features: [
      "Everything in Startup",
      "Unlimited sprint project posts",
      "Advanced AI shortlisting",
      "Dedicated account manager",
      "TFES minimum score filtering",
      "Branded employer profile",
      "Priority placement queue",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    color: "indigo",
    highlight: false,
    forType: ["enterprise", "msme"],
    features: [
      "Everything in Growth",
      "Volume hiring SLAs",
      "White-label assessments",
      "Campus integration API",
      "Custom blockchain credential branding",
      "Analytics & ROI reporting",
      "Legal & compliance support",
    ],
  },
  {
    id: "college",
    name: "Institution Partner",
    price: "Custom",
    period: "",
    color: "sky",
    highlight: false,
    forType: ["college"],
    features: [
      "Institutional dashboard for TPO",
      "Bulk student onboarding",
      "TFES score tracking per student",
      "Curriculum gap analytics",
      "Branded blockchain credentials",
      "Campus drive management",
      "Dedicated integration support",
    ],
  },
];

const ORG_TYPES: { id: OrgType; label: string; icon: React.ReactNode; desc: string }[] = [
  { id: "startup", label: "Startup", icon: <Zap className="w-5 h-5" />, desc: "1–50 employees, fast-hiring" },
  { id: "msme", label: "MSME", icon: <Briefcase className="w-5 h-5" />, desc: "50–500 employees" },
  { id: "enterprise", label: "Enterprise", icon: <Building2 className="w-5 h-5" />, desc: "500+ employees, bulk hiring" },
  { id: "college", label: "College / University", icon: <GraduationCap className="w-5 h-5" />, desc: "Placement cell integration" },
];

const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–500", "500+"];
const HIRING_NEEDS = ["Freelance / Project-based", "Full-time Hire", "Internship", "Campus Placement Drive", "Skill Training Programs"];

export default function Partner() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [orgType, setOrgType] = useState<OrgType>("");
  const [orgName, setOrgName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [website, setWebsite] = useState("");
  const [hiringNeeds, setHiringNeeds] = useState<string[]>([]);
  const [hiresPerYear, setHiresPerYear] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [message, setMessage] = useState("");

  const toggleNeed = (need: string) => {
    setHiringNeeds(prev => prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]);
  };

  const relevantPlans = orgType
    ? PLANS.filter(p => p.forType.includes(orgType))
    : PLANS;

  const chosenPlan = PLANS.find(p => p.id === selectedPlan);

  const colorMap: Record<string, string> = {
    amber: "border-amber-400 bg-amber-50",
    blue: "border-blue-500 bg-blue-50",
    indigo: "border-indigo-500 bg-indigo-50",
    sky: "border-sky-400 bg-sky-50",
  };
  const badgeMap: Record<string, string> = {
    amber: "text-amber-700",
    blue: "text-blue-700",
    indigo: "text-indigo-700",
    sky: "text-sky-700",
  };
  const checkMap: Record<string, string> = {
    amber: "text-amber-500",
    blue: "text-blue-600",
    indigo: "text-indigo-600",
    sky: "text-sky-500",
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pt-28 pb-20 px-4 flex items-center justify-center">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-blue-700" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 mb-3">Partnership Request Received</h1>
          <p className="text-zinc-500 mb-2">
            Thanks, <span className="font-semibold text-zinc-800">{contactName || orgName}</span>! Our team will reach out within 24 hours to schedule your onboarding call.
          </p>
          {chosenPlan && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mt-3 mb-6">
              <Star className="w-3.5 h-3.5" />
              {chosenPlan.name} selected
            </div>
          )}
          <div className="glass-card p-5 mb-8 text-left space-y-2">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">What happens next</p>
            {["Confirmation email sent to your inbox", "Account manager assigned within 2 hrs", "Onboarding call scheduled within 24 hrs", "Platform access granted on agreement"].map((step, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-[10px] font-bold text-blue-700 shrink-0">{i + 1}</div>
                {step}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing">
              <Button className="btn-gradient h-11 px-6">View Pricing <ArrowUpRight className="w-4 h-4 ml-2" /></Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="h-11 px-6 border-zinc-200 text-zinc-700">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Sticky header */}
      <div className="border-b border-zinc-200 bg-white/70 backdrop-blur-md sticky top-20 z-30">
        <div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <button className="p-2 rounded-lg hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
            </Link>
            <div>
              <h1 className="font-bold text-zinc-900 text-lg leading-none">Partner with Talent Forge</h1>
              <p className="text-xs text-zinc-400 mt-0.5">For companies, MSMEs, enterprises & colleges</p>
            </div>
          </div>
          {/* Step pills */}
          <div className="hidden md:flex items-center gap-2">
            {["Organisation", "Requirements", "Choose Plan", "Contact"].map((label, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <button
                  onClick={() => i < step && setStep(i)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    i === step ? "bg-blue-700 text-white" : i < step ? "bg-blue-50 text-blue-700 border border-blue-200 cursor-pointer" : "bg-zinc-100 text-zinc-400"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${i === step ? "bg-white/20" : i < step ? "bg-blue-200" : "bg-zinc-200"}`}>
                    {i < step ? "✓" : i + 1}
                  </span>
                  {label}
                </button>
                {i < 3 && <ChevronRight className="w-3 h-3 text-zinc-300" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-10">

        {/* STEP 0: Organisation */}
        {step === 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-1">Tell us about your organisation</h2>
                <p className="text-zinc-500 text-sm">We'll tailor the right plan and onboarding flow for you.</p>
              </div>

              <div className="glass-card p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Organisation Type *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {ORG_TYPES.map(t => (
                      <button
                        key={t.id}
                        onClick={() => setOrgType(t.id)}
                        className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                          orgType === t.id
                            ? "bg-blue-50 border-blue-500 text-blue-800 shadow-sm"
                            : "bg-white border-zinc-200 text-zinc-600 hover:border-blue-200"
                        }`}
                      >
                        <div className={`mt-0.5 ${orgType === t.id ? "text-blue-600" : "text-zinc-400"}`}>{t.icon}</div>
                        <div>
                          <p className="font-semibold text-sm">{t.label}</p>
                          <p className="text-xs text-zinc-400 mt-0.5">{t.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Organisation Name *</label>
                  <input
                    value={orgName}
                    onChange={e => setOrgName(e.target.value)}
                    placeholder="e.g. Acme Technologies Pvt. Ltd."
                    className="w-full h-11 px-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Team Size</label>
                    <select
                      value={teamSize}
                      onChange={e => setTeamSize(e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border border-zinc-200 bg-white text-zinc-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    >
                      <option value="">Select size</option>
                      {TEAM_SIZES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Website (optional)</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
                        placeholder="yourcompany.com"
                        className="w-full h-11 pl-9 pr-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Why partner with us</p>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> 3x faster hiring vs traditional job boards</li>
                  <li className="flex gap-2"><Shield className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Every engineer is skill-verified, not just resume-filtered</li>
                  <li className="flex gap-2"><BarChart3 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Real-time TFES score & sprint velocity data</li>
                  <li className="flex gap-2"><Users className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> 50+ partner institutions already onboarded</li>
                </ul>
              </div>
              <div className="glass-card p-5 bg-blue-50/40 border border-blue-100">
                <p className="text-xs font-semibold text-blue-700 mb-1">Average cost savings</p>
                <p className="text-3xl font-bold text-blue-800">68%</p>
                <p className="text-xs text-zinc-500 mt-1">vs traditional recruitment agencies for engineering roles</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 1: Requirements */}
        {step === 1 && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-1">What are your hiring needs?</h2>
                <p className="text-zinc-500 text-sm">Help us understand your requirements so we can recommend the best plan.</p>
              </div>

              <div className="glass-card p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Hiring Modes (select all that apply)</label>
                  <div className="grid grid-cols-1 gap-2">
                    {HIRING_NEEDS.map(need => (
                      <button
                        key={need}
                        onClick={() => toggleNeed(need)}
                        className={`px-4 py-3 rounded-lg border text-sm text-left font-medium flex items-center gap-3 transition-all ${
                          hiringNeeds.includes(need)
                            ? "bg-blue-50 border-blue-400 text-blue-800"
                            : "bg-white border-zinc-200 text-zinc-600 hover:border-blue-200"
                        }`}
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${hiringNeeds.includes(need) ? "bg-blue-600 border-blue-600" : "border-zinc-300"}`}>
                          {hiringNeeds.includes(need) && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        {need}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Estimated Hires / Year</label>
                  <div className="flex flex-wrap gap-2">
                    {["1–5", "6–20", "21–50", "51–100", "100+"].map(range => (
                      <button
                        key={range}
                        onClick={() => setHiresPerYear(range)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                          hiresPerYear === range
                            ? "bg-blue-700 text-white border-blue-700"
                            : "bg-white text-zinc-600 border-zinc-200 hover:border-blue-300"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Any additional requirements?</label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={3}
                    placeholder="e.g. We need blockchain-verified credentials for all campus hires, or we want a white-label portal..."
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Your summary so far</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-zinc-500">Type</span><span className="font-medium text-zinc-800 capitalize">{orgType || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-zinc-500">Organisation</span><span className="font-medium text-zinc-800">{orgName || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-zinc-500">Team size</span><span className="font-medium text-zinc-800">{teamSize || "—"}</span></div>
                </div>
              </div>
              <div className="glass-card p-5 border border-amber-100 bg-amber-50/30">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-semibold text-amber-700">Colleges & Universities</span>
                </div>
                <p className="text-xs text-zinc-500">Institution plans include a dedicated TPO dashboard, student bulk upload, and branded credential minting at no extra cost.</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Choose Plan */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-1">Choose your plan</h2>
              <p className="text-zinc-500 text-sm">
                Showing plans suited for <span className="font-medium text-zinc-800 capitalize">{orgType || "your organisation"}</span>. You can discuss custom pricing after submission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relevantPlans.map(plan => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`glass-card p-6 cursor-pointer transition-all border-2 relative ${
                    selectedPlan === plan.id
                      ? `${colorMap[plan.color]} shadow-lg`
                      : "border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  {selectedPlan === plan.id && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle2 className={`w-5 h-5 ${badgeMap[plan.color]}`} />
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className={`font-bold text-lg text-zinc-900 mb-1 ${selectedPlan === plan.id ? badgeMap[plan.color] : ""}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-zinc-900">{plan.price}</span>
                      <span className="text-zinc-500 text-sm">{plan.period}</span>
                    </div>
                    {plan.price === "Custom" && (
                      <p className="text-xs text-zinc-400 mt-1">Pricing discussed after initial call</p>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${selectedPlan === plan.id ? checkMap[plan.color] : "text-zinc-400"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-2">
              <Info className="w-4 h-4 text-zinc-400" />
              <p className="text-sm text-zinc-500">
                Want to compare all plans in detail?{" "}
                <Link href="/pricing" className="text-blue-600 hover:underline font-medium">
                  View full pricing page
                </Link>
              </p>
            </div>
          </div>
        )}

        {/* STEP 3: Contact */}
        {step === 3 && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-1">Your contact details</h2>
                <p className="text-zinc-500 text-sm">Our partnership team will reach out within 24 hours to schedule your onboarding call.</p>
              </div>

              <div className="glass-card p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Full Name *</label>
                  <input
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full h-11 px-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Work Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={e => setContactEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full h-11 pl-9 pr-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Phone (optional)</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={e => setContactPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full h-11 pl-9 pr-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Full summary before submit */}
              <div className="glass-card p-5">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Partnership Summary</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-zinc-500">Organisation</span><span className="font-medium text-zinc-800">{orgName || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-zinc-500">Type</span><span className="font-medium text-zinc-800 capitalize">{orgType || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-zinc-500">Team size</span><span className="font-medium text-zinc-800">{teamSize || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-zinc-500">Hires / yr</span><span className="font-medium text-zinc-800">{hiresPerYear || "—"}</span></div>
                  {hiringNeeds.length > 0 && (
                    <div className="flex gap-3">
                      <span className="text-zinc-500 shrink-0">Needs</span>
                      <div className="flex flex-wrap gap-1">
                        {hiringNeeds.map(n => <span key={n} className="px-2 py-0.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-xs">{n}</span>)}
                      </div>
                    </div>
                  )}
                  {chosenPlan && (
                    <div className="flex justify-between pt-2 border-t border-zinc-100">
                      <span className="text-zinc-500">Selected plan</span>
                      <span className="font-semibold text-blue-700">{chosenPlan.name} {chosenPlan.price !== "Custom" ? `• ${chosenPlan.price}${chosenPlan.period}` : "• Custom pricing"}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-xs text-zinc-400 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                By submitting, you agree to be contacted by our team. No payment is taken at this stage — the plan you selected is your preference, finalized during the onboarding call.
              </p>
            </div>

            <div className="space-y-4">
              {chosenPlan && (
                <div className={`glass-card p-5 border-2 ${colorMap[chosenPlan.color]}`}>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Selected Plan</p>
                  <h3 className={`font-bold text-lg ${badgeMap[chosenPlan.color]}`}>{chosenPlan.name}</h3>
                  <p className="text-2xl font-bold text-zinc-900 mt-1">
                    {chosenPlan.price}<span className="text-base font-normal text-zinc-500">{chosenPlan.period}</span>
                  </p>
                  <Link href="/pricing">
                    <button className="mt-3 text-xs text-blue-600 hover:underline flex items-center gap-1">
                      Compare all plans <ArrowRight className="w-3 h-3" />
                    </button>
                  </Link>
                </div>
              )}
              <div className="glass-card p-5">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Our commitment</p>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Response within 24 hours</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> No spam, ever</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Free demo before any commitment</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Custom pricing for large orgs</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-zinc-200">
          <Button
            variant="outline"
            className="h-11 px-6 border-zinc-200 text-zinc-700"
            onClick={() => step > 0 ? setStep(step - 1) : setLocation("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {step === 0 ? "Cancel" : "Back"}
          </Button>

          {step < 3 ? (
            <Button className="btn-gradient h-11 px-8" onClick={() => setStep(step + 1)}>
              Continue <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              className="btn-gradient h-11 px-8"
              onClick={() => setSubmitted(true)}
              disabled={!contactName || !contactEmail}
            >
              Submit Partnership Request
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
