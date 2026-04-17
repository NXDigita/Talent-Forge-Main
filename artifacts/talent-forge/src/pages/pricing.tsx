import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch as ToggleSwitch } from "@/components/ui/switch";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { toast } = useToast();

  const handlePlanSelection = (plan: string) => {
    toast({
      title: "Plan selected",
      description: `You've selected the ${plan} plan. Redirecting to signup...`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10">
            Choose the plan that fits your needs. No hidden fees, ever.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-zinc-900' : 'text-zinc-500'}`}>Monthly</span>
            <ToggleSwitch 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual} 
              className="data-[state=checked]:bg-blue-600"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-zinc-900' : 'text-zinc-500'} flex items-center gap-2`}>
              Annually
              <span className="bg-green-500/20 text-green-400 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold">
                Save 33%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="glass-card p-8 flex flex-col h-full">
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Student Basic</h3>
            <p className="text-zinc-500 text-sm mb-6 h-10">Essential tools to prove your skills and get noticed.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-zinc-900">₹0</span>
              <span className="text-zinc-500">/forever</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Basic public profile', 'Up to 3 skill assessments/mo', 'Community forum access', 'Standard job matching'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-zinc-9000 shrink-0" />
                  <span className="text-zinc-600 text-sm">{feature}</span>
                </li>
              ))}
              {['Blockchain verified credentials', 'Priority placement'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 opacity-50">
                  <X className="w-5 h-5 text-slate-600 shrink-0" />
                  <span className="text-zinc-500 text-sm line-through">{feature}</span>
                </li>
              ))}
            </ul>
            <Button onClick={() => handlePlanSelection('Free')} variant="outline" className="w-full border-zinc-200 text-zinc-900 hover:bg-zinc-100">
              Get Started
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="glass-card p-8 flex flex-col h-full relative border-violet-400 shadow-[0_0_30px_rgba(37,99,235,0.15)] transform md:-translate-y-4">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-t-2xl" />
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 text-zinc-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Student Pro</h3>
            <p className="text-zinc-500 text-sm mb-6 h-10">Maximum visibility and unlimited assessments for serious talent.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-zinc-900">
                ₹{isAnnual ? '499' : '749'}
              </span>
              <span className="text-zinc-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Enhanced public profile', 'Unlimited skill assessments', 'Blockchain verified credentials', 'Priority AI matching', 'Direct messaging with employers', 'Premium support'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
                  <span className="text-zinc-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button onClick={() => handlePlanSelection('Pro')} className="w-full btn-gradient">
              Upgrade to Pro
            </Button>
          </div>

          {/* Employer Plan */}
          <div className="glass-card p-8 flex flex-col h-full">
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Employer Startup</h3>
            <p className="text-zinc-500 text-sm mb-6 h-10">Access verified talent without the agency fees.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-zinc-900">
                ₹{isAnnual ? '4,999' : '7,499'}
              </span>
              <span className="text-zinc-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Access to full talent pool', 'Post up to 5 projects/mo', 'Basic AI candidate matching', 'In-platform messaging', 'Standard contract templates'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-zinc-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button onClick={() => handlePlanSelection('Employer')} variant="outline" className="w-full border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
              Start Hiring
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is a TFES score and how is it calculated?",
                a: "TFES (Talent Forge Expertise Score) is our proprietary rating system out of 100. It's dynamically calculated based on your performance in our gamified skill assessments, the quality of code/projects you submit, and feedback from employers on completed tasks."
              },
              {
                q: "How do blockchain credentials work?",
                a: "When you pass a major milestone or assessment, we mint a verified credential on a public blockchain. This creates an immutable, tamper-proof record of your skill that any employer can independently verify, completely eliminating 'resume padding'."
              },
              {
                q: "Can I cancel my Pro subscription at any time?",
                a: "Yes, you can cancel your subscription at any time. If you cancel, you'll retain access to Pro features until the end of your current billing cycle. Your earned blockchain credentials remain yours forever."
              },
              {
                q: "As an employer, is there a fee per hire?",
                a: "The Startup plan includes zero placement fees for freelance projects. If you decide to hire a talent full-time, a standard 10% placement fee applies (significantly lower than traditional agencies)."
              },
              {
                q: "Do you offer plans for educational institutions?",
                a: "Yes! We offer customized Enterprise plans for colleges and universities to integrate Talent Forge into their placement cells. Please visit the 'For Colleges' page to request a custom quote."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass-card border-none px-6">
                <AccordionTrigger className="text-zinc-900 hover:text-violet-600 hover:no-underline font-medium text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </div>
  );
}
