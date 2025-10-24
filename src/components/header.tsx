import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 flex items-center">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">abhay.spr</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary text-muted-foreground">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <a href="#" className="flex items-center space-x-2 mb-4">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline text-lg">DevPortfolio</span>
                  </a>
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary">
                      {link.name}
                    </a>
                  ))}
                   <Button asChild className="mt-4">
                      <a href="/resume.txt" download>Download Resume</a>
                   </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
