import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages: { code: Language; label: string; native: string }[] = [
  { code: "English", label: "English", native: "English" },
  { code: "Hindi", label: "Hindi", native: "हिंदी" },
  { code: "Marathi", label: "Marathi", native: "मराठी" },
  { code: "Telugu", label: "Telugu", native: "తెలుగు" },
  { code: "Tamil", label: "Tamil", native: "தமிழ்" },
  { code: "Bengali", label: "Bengali", native: "বাংলা" },
];

export const LanguageSelector = ({ variant = "default" }: { variant?: "default" | "compact" }) => {
  const { language, setLanguage } = useLanguage();

  const currentLang = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={variant === "compact" ? "sm" : "default"} className="gap-2">
          <Languages className="h-4 w-4" />
          {variant === "compact" ? currentLang?.native : language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-muted" : ""}
          >
            <span className="mr-2">{lang.native}</span>
            <span className="text-muted-foreground text-sm">({lang.label})</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
