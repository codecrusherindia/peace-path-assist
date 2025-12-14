// B2BDashboardDemo.tsx
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp, AlertTriangle, CheckCircle, Workflow, Link, DollarSign, Building2 } from "lucide-react"; 

// Data tailored for a hospital/clinic partner managing bulk patient screening
const triageGroups = [
  { name: "Inpatient Cardiology", patients: 120, screened: 95, avgScore: 11.5, risk: "high" },
  { name: "Diabetic Clinic Follow-up", patients: 210, screened: 180, avgScore: 7.2, risk: "moderate" },
  { name: "Pre-Surgical Screening", patients: 45, screened: 45, avgScore: 8.9, risk: "moderate" },
  { name: "General Practice Pool", patients: 350, screened: 290, avgScore: 5.5, risk: "low" },
];

const totalPatients = triageGroups.reduce((a, d) => a + d.patients, 0);
const totalScreened = triageGroups.reduce((a, d) => a + d.screened, 0);
const complianceRate = Math.round((totalScreened / totalPatients) * 100);
const highRiskPatients = triageGroups.filter(d => d.risk === 'high').reduce((a, d) => a + d.screened, 0);
const totalHighRiskPercentage = Math.round((highRiskPatients / totalScreened) * 100);

const B2BDashboardDemo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">MindCare Partner Licensing Demo: The Integrated Triage Solution</h1>
              <p className="text-muted-foreground">Showcasing the White-Label and Bulk Screening capabilities for City General Hospital</p>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* FEATURE 1: B2B Subscriptions (Annual Plans & Volume) */}
          {/* ------------------------------------------------------------------ */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Subscription & Licensing Overview</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">Annual Plan</p>
                  <p className="text-sm text-muted-foreground">Subscription Status</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{totalPatients}</p>
                  <p className="text-sm text-muted-foreground">Total Patients in System</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-muted-foreground">Annual Screening Quota Used</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-warning" />
                <div>
                  <p className="text-2xl font-bold">{totalHighRiskPercentage}%</p>
                  <p className="text-sm text-muted-foreground">Requires Clinical Follow-up</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ------------------------------------------------------------------ */}
            {/* FEATURE 2: Bulk Screening for Patient Populations */}
            {/* ------------------------------------------------------------------ */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary" /> Bulk Screening Group Status
              </h3>
              <div className="space-y-4">
                {triageGroups.map((group) => (
                  <div key={group.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{group.name}</span>
                      <span className="text-muted-foreground">
                        {group.screened}/{group.patients} patients screened
                      </span>
                    </div>
                    <Progress value={(group.screened / group.patients) * 100} 
                              className={group.risk === 'high' ? 'bg-red-200' : group.risk === 'moderate' ? 'bg-yellow-200' : 'bg-green-200'}
                    />
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Avg Distress Score: {group.avgScore}</span>
                      <span className={group.risk === "high" ? "text-red-600 font-bold" : group.risk === "moderate" ? "text-yellow-600" : "text-success"}>
                        {group.risk} risk
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* ------------------------------------------------------------------ */}
            {/* FEATURE 3 & 4: Integration with Existing Systems & White-Label Options */}
            {/* ------------------------------------------------------------------ */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Link className="h-5 w-5 text-primary" /> System Integration & Customization
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-green-100 rounded-lg">
                    <Link className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-xs font-bold text-green-800">EHR/EMR Sync: Active</p>
                    <p className="text-xs text-green-600">Secure, Real-time Data Push</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Building2 className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs font-bold text-primary">White-Label Branding</p>
                    <p className="text-xs text-primary/80">MindCare is Branded as "City Triage"</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Clinician Workflow Benefits</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Urgent: 5 patients in Inpatient Cardiology require immediate review.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-accent mt-0.5" />
                      <span>Efficiency: Triage time reduced from 30 minutes to 5 minutes per patient.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                      <span>White-Label: Seamless patient experience under your organization's name.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 mt-8 bg-primary/10">
            <p className="text-center text-sm text-primary/80">
              License Model Note: This dashboard represents our tiered annual subscription model, supporting a high volume of patient assessments and full system integration.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default B2BDashboardDemo;
