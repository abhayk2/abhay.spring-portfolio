import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const skills = ["Spring Boot",
    "React","Angular","Node.js", "Java", "JavaScript", "TypeScript", 
    "HTML5","PostgresSQL", "MySQL" ,"Docker","Git"
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Portrait of John Doe"
            width={400}
            height={400}
            className="rounded-full aspect-square object-cover shadow-lg"
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Full Stack Developer at TCS, where I build and maintain applications for clients. My go-to technologies are Java and Spring Boot for the back end, and Angular for the front end, often with PostgreSQL.
My passion for coding goes back to my college days, where I competed in events like CodeVita (achieving a global rank of 1531) and cleared the GATE 2024 exam. I have a B.Tech in Electronics and Communication and truly enjoy the process of solving real-world problems through development. I'm always looking for the next challenge and a chance to grow my skills.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>My Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
