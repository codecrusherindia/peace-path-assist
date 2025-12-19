import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Clock, ArrowLeft, User } from "lucide-react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

type Expert = {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  experience: string;
  rating: number;
  availability: string;
  specialization: string[];
};

const expertsData: Record<string, Expert[]> = {
  psychiatrist: [
    {
      id: "p1",
      name: "Dr. Anjali Sharma",
      phone: "+91 98765 43210",
      email: "dr.anjali@mindcare.in",
      location: "Mumbai, Maharashtra",
      experience: "15 years",
      rating: 4.9,
      availability: "Mon-Fri, 10 AM - 6 PM",
      specialization: ["Depression", "Anxiety", "Bipolar Disorder"]
    },
    {
      id: "p2",
      name: "Dr. Rajesh Kumar",
      phone: "+91 87654 32109",
      email: "dr.rajesh@mindcare.in",
      location: "Delhi NCR",
      experience: "12 years",
      rating: 4.8,
      availability: "Mon-Sat, 9 AM - 5 PM",
      specialization: ["Schizophrenia", "OCD", "PTSD"]
    },
    {
      id: "p3",
      name: "Dr. Priya Menon",
      phone: "+91 76543 21098",
      email: "dr.priya@mindcare.in",
      location: "Bangalore, Karnataka",
      experience: "10 years",
      rating: 4.7,
      availability: "Tue-Sat, 11 AM - 7 PM",
      specialization: ["Mood Disorders", "Sleep Disorders", "Addiction"]
    }
  ],
  psychologist: [
    {
      id: "ps1",
      name: "Dr. Sneha Iyer",
      phone: "+91 99887 76655",
      email: "dr.sneha@mindcare.in",
      location: "Chennai, Tamil Nadu",
      experience: "8 years",
      rating: 4.9,
      availability: "Mon-Fri, 9 AM - 6 PM",
      specialization: ["CBT", "Trauma Therapy", "Relationship Issues"]
    },
    {
      id: "ps2",
      name: "Dr. Amit Patel",
      phone: "+91 88776 65544",
      email: "dr.amit@mindcare.in",
      location: "Ahmedabad, Gujarat",
      experience: "11 years",
      rating: 4.8,
      availability: "Mon-Sat, 10 AM - 7 PM",
      specialization: ["Anxiety Disorders", "Depression", "Stress Management"]
    },
    {
      id: "ps3",
      name: "Dr. Meera Reddy",
      phone: "+91 77665 54433",
      email: "dr.meera@mindcare.in",
      location: "Hyderabad, Telangana",
      experience: "9 years",
      rating: 4.7,
      availability: "Tue-Sat, 11 AM - 8 PM",
      specialization: ["Child Psychology", "Family Therapy", "Grief Counseling"]
    }
  ],
  counselor: [
    {
      id: "c1",
      name: "Kavitha Nair",
      phone: "+91 66554 43322",
      email: "kavitha@mindcare.in",
      location: "Kochi, Kerala",
      experience: "6 years",
      rating: 4.8,
      availability: "Mon-Fri, 10 AM - 5 PM",
      specialization: ["Career Counseling", "Academic Stress", "Life Transitions"]
    },
    {
      id: "c2",
      name: "Rahul Verma",
      phone: "+91 55443 32211",
      email: "rahul@mindcare.in",
      location: "Pune, Maharashtra",
      experience: "5 years",
      rating: 4.7,
      availability: "Mon-Sat, 9 AM - 6 PM",
      specialization: ["Emotional Support", "Self-Esteem", "Anger Management"]
    },
    {
      id: "c3",
      name: "Divya Singh",
      phone: "+91 44332 21100",
      email: "divya@mindcare.in",
      location: "Jaipur, Rajasthan",
      experience: "7 years",
      rating: 4.9,
      availability: "Tue-Sat, 10 AM - 7 PM",
      specialization: ["Youth Counseling", "Peer Pressure", "Social Anxiety"]
    }
  ]
};

const typeLabels: Record<string, string> = {
  psychiatrist: "Psychiatrists",
  psychologist: "Psychologists",
  counselor: "Counselors"
};

const typeDescriptions: Record<string, string> = {
  psychiatrist: "Medical doctors specializing in mental health who can prescribe medications",
  psychologist: "Therapy and counseling specialists with expertise in psychological treatments",
  counselor: "Supportive guidance professionals for coping strategies and emotional wellbeing"
};

const Experts = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get("type") || "psychiatrist";
  const experts = expertsData[type] || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/chatbot")}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Assessment
          </Button>

          <div className="text-center mb-8">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{typeLabels[type]}</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {typeDescriptions[type]}
            </p>
          </div>

          {/* Expert Type Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {Object.keys(expertsData).map((key) => (
              <Button
                key={key}
                variant={type === key ? "default" : "outline"}
                onClick={() => navigate(`/experts?type=${key}`)}
                className="capitalize"
              >
                {key}s
              </Button>
            ))}
          </div>

          {/* Experts List */}
          <div className="space-y-4">
            {experts.map((expert) => (
              <Card key={expert.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{expert.name}</h3>
                        <p className="text-sm text-muted-foreground">{expert.experience} experience</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-warning fill-warning" />
                        <span className="font-medium">{expert.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {expert.specialization.map((spec) => (
                        <Badge key={spec} variant="secondary">{spec}</Badge>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${expert.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                          {expert.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${expert.email}`} className="hover:text-primary">
                          {expert.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{expert.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{expert.availability}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="gap-2">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </Button>
                      <Button size="sm" variant="outline">
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sign In Prompt */}
          <Card className="mt-8 p-6 bg-muted/50 text-center">
            <p className="text-muted-foreground mb-4">
              Sign in to save your assessment results and track your progress
            </p>
            <Link to="/auth">
              <Button variant="outline">Sign In / Create Account</Button>
            </Link>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experts;
