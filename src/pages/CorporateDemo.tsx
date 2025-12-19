import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp, AlertTriangle, CheckCircle, Building2 } from "lucide-react";

const CorporateDemo = () => {
  const departments = [
    { name: "Engineering", employees: 45, screened: 38, avgScore: 6.2, risk: "low" },
    { name: "Sales", employees: 32, screened: 28, avgScore: 9.8, risk: "moderate" },
    { name: "Operations", employees: 28, screened: 25, avgScore: 5.1, risk: "low" },
    { name: "Marketing", employees: 18, screened: 16, avgScore: 7.4, risk: "low" },
    { name: "HR", employees: 12, screened: 11, avgScore: 4.8, risk: "low" },
  ];

  const totalEmployees = departments.reduce((a, d) => a + d.employees, 0);
  const totalScreened = departments.reduce((a, d) => a + d.screened, 0);
  const participationRate = Math.round((totalScreened / totalEmployees) * 100);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-success/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Corporate Wellness Dashboard</h1>
              <p className="text-muted-foreground">Demo: Acme Technologies Pvt Ltd</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{totalEmployees}</p>
                  <p className="text-sm text-muted-foreground">Total Employees</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">{participationRate}%</p>
                  <p className="text-sm text-muted-foreground">Participation Rate</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">6.7</p>
                  <p className="text-sm text-muted-foreground">Avg. PHQ-9 Score</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-warning" />
                <div>
                  <p className="text-2xl font-bold">12%</p>
                  <p className="text-sm text-muted-foreground">Need Support</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Department Overview</h3>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{dept.name}</span>
                      <span className="text-muted-foreground">
                        {dept.screened}/{dept.employees} screened
                      </span>
                    </div>
                    <Progress value={(dept.screened / dept.employees) * 100} />
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Avg Score: {dept.avgScore}</span>
                      <span className={dept.risk === "low" ? "text-success" : "text-warning"}>
                        {dept.risk} risk
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Monthly Trends</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-success">↓ 8%</p>
                    <p className="text-xs text-muted-foreground">Avg Score Change</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary">↑ 15%</p>
                    <p className="text-xs text-muted-foreground">Participation</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-accent">23</p>
                    <p className="text-xs text-muted-foreground">Sessions Used</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Key Insights</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                      <span>Overall mental wellness improved by 8% this quarter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-warning mt-0.5" />
                      <span>Sales team shows elevated stress levels - consider intervention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-primary mt-0.5" />
                      <span>Wellness program adoption up 15% month-over-month</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 mt-8 bg-muted/50">
            <p className="text-center text-sm text-muted-foreground">
              <strong>Note:</strong> This is a demo dashboard with sample data. All employee data is anonymized and aggregated 
              to protect individual privacy. No personal identifiers are shown.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateDemo;
