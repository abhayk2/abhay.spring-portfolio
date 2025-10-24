import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/abhayk2" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/abhayk176/" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} abhay.spr. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
