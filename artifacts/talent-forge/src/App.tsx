import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/home";
import ForStudents from "@/pages/for-students";
import ForEmployers from "@/pages/for-employers";
import ForColleges from "@/pages/for-colleges";
import Assessment from "@/pages/assessment";
import Marketplace from "@/pages/marketplace";
import StudentDashboard from "@/pages/dashboard/student";
import EmployerDashboard from "@/pages/dashboard/employer";
import PostProject from "@/pages/post-project";
import Partner from "@/pages/partner";
import AIMatch from "@/pages/ai-match";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/for-students" component={ForStudents} />
          <Route path="/for-employers" component={ForEmployers} />
          <Route path="/for-colleges" component={ForColleges} />
          <Route path="/assessment" component={Assessment} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/dashboard/student" component={StudentDashboard} />
          <Route path="/dashboard/employer" component={EmployerDashboard} />
          <Route path="/post-project" component={PostProject} />
          <Route path="/partner" component={Partner} />
          <Route path="/ai-match" component={AIMatch} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
