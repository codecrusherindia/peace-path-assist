// B2BDashboardDemo.tsx
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
// Icons used for healthcare metrics
import { Users, TrendingUp, AlertTriangle, CheckCircle, Building2, Workflow, Link } from "lucide-react"; 

// Patient Triage Data (Focus on Bulk Screening and Risk)
const triageGroups = [
  { name: "Inpatient Cardiology", patients: 120, screened: 95, avgScore: 11.5, risk: "high" },
  { name: "Diabetic Clinic Follow-up", patients: 210, screened: 180, avgScore: 7.2, risk: "moderate" },
  { name: "Pediatric Wellness", patients: 85, screened: 78, avgScore: 4.1, risk: "low" },
  { name: "Pre-Surgical Screening", patients: 45, screened: 45, avgScore: 8.9, risk: "moderate" },
  { name: "General Practice", patients: 350, screened: 290, avgScore: 5.5, risk: "low" },
];

const totalPatients = triageGroups.reduce((a, d) => a + d.patients, 0);
const totalScreened = triageGroups.reduce((a, d) => a + d.screened, 0);
const complianceRate = Math.round((totalScreened / totalPatients) * 100);

const B2BDashboardDemo = () => {
  // Metric calculated for the "Need Immediate Referral" card
  const highRiskCount = triageGroups.filter(d => d.risk === 'high').length;
  const highRiskPatients = triageGroups.filter(d => d.risk === 'high').reduce((a, d) => a + d.screened, 0);
  const totalHighRiskPercentage = Math.round((highRiskPatients / totalScreened) * 100);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Workflow className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Partner Triage Portal Demo</h1>
              <p className="text-muted-foreground">Demo: City General Hospital - Behavioral Health Integration</p>
            </div>
          </div>

          {/* Key Metrics - Adapted for Healthcare/Triage */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{totalPatients}</p>
                  <p className="text-sm text-muted-foreground">Total Patients in Queue</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">{complianceRate}%</p>
                  <p className="text-sm text-muted-foreground">Screening Compliance Rate</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">6.9</p>
                  <p className="text-sm text-muted-foreground">Average Distress Score</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-warning" />
                <div>
                  <p className="text-2xl font-bold">{totalHighRiskPercentage}%</p>
                  <p className="text-sm text-muted-foreground">Need Immediate Referral</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Bulk Screening Group Status</h3>
              <div className="space-y-4">
                {triageGroups.map((group) => (
                  <div key={group.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{group.name}</span>
                      <span className="text-muted-foreground">
                        {group.screened}/{group.patients} screened
                      </span>
                    </div>
                    <Progress value={(group.screened / group.patients) * 100} 
                              // Apply color based on risk level of the group
                              className={group.risk === 'high' ? 'bg-red-200' : group.risk === 'moderate' ? 'bg-yellow-200' : 'bg-green-200'}
                    />
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Avg Score: {group.avgScore}</span>
                      <span className={group.risk === "high" ? "text-red-600 font-bold" : group.risk === "moderate" ? "text-yellow-600" : "text-success"}>
                        {group.risk} risk
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Integration & System Status</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-green-100 rounded-lg">
                    <Link className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-xs font-bold text-green-800">EHR Sync: Active</p>
                    <p className="text-xs text-green-600">Last Sync: Now</p>
                  </div>
                  <div className="p-4 bg-blue-100 rounded-lg">
                    <Building2 className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-xs font-bold text-blue-800">White-Label Status</p>
                    <p className="text-xs text-blue-600">Custom Branding Applied</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs font-bold text-primary">Triage Protocol</p>
                    <p className="text-xs text-primary/80">V3.1 (Latest)</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Actionable Insights for Clinicians</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Urgent: 5 patients in Inpatient Cardiology require immediate review.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-accent mt-0.5" />
                      <span>Patient population screening compliance is high (95%+ in two groups).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Integration successful; 180 patient reports pushed to EHR this morning.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 mt-8 bg-primary/10">
            <p className="text-center text-sm text-primary/80">
              **Privacy Guarantee:** All patient triage results are securely transmitted directly to your EHR system. No individual health data is stored long-term on the MindCare platform.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default B2BDashboardDemo;
