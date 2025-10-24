import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="container py-20 sm:py-24 md:py-32">
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-primary font-medium">Hello, I'm Abhay Kumar</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline text-balance">
            A Software Developer Building Real-World Solutions
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-balance">
        As a developer at TCS, I translate project requirements into functional and effective web applications. I am passionate about solving complex problems and continuously expanding my technical skills.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
