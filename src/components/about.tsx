import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { row1, row2 } from "@/components/skillicons";

export default function About() {


  return (
    <section id="about" className="py-12 sm:py-20 bg-secondary">
      <div className="container px-4 sm:px-8 max-w-5xl mx-auto">

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10">

          <div className="flex justify-center w-full">
            <Image
              src="/profile.jpg"
              alt="Portrait of Abhay Kumar"
              width={320}
              height={320}
              className="rounded-full aspect-square object-cover shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
              data-ai-hint="professional portrait"
            />
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-headline">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I'm a Full Stack Developer at TCS, where I build and maintain applications for clients. My go-to technologies are Java and Spring Boot for the back end, and Angular for the front end, often with PostgreSQL.
              My passion for coding goes back to my college days, where I competed in events like CodeVita (achieving a global rank of 1531) and cleared the GATE 2024 exam. I have a B.Tech in Electronics and Communication and truly enjoy the process of solving real-world problems through development. I'm always looking for the next challenge and a chance to grow my skills.
            </p>
          </div>
        </div>

        <Card className="overflow-hidden p-0 w-full shadow-md">
          <CardHeader className="px-4 sm:px-6 pt-5 pb-3">
            <CardTitle className="text-lg sm:text-xl">My Skills</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-5">
            <div className="
          mx-3 sm:mx-4 rounded-xl overflow-hidden py-5
          bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
          dark:from-[#0f0c29] dark:via-[#1e1b4b] dark:to-[#1a0533]
          border border-indigo-100 dark:border-purple-900/30
        ">
              <div
                className="relative overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"
                }}
              >
                <div className="flex gap-4 sm:gap-5 w-max animate-marquee-left mb-3 sm:mb-4">
                  {[...row1, ...row1].map((skill, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5 min-w-[56px] sm:min-w-[68px]">
                      <div className="
                    w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl
                    flex items-center justify-center
                    bg-white/80 dark:bg-white/5
                    border border-indigo-100 dark:border-white/10
                    shadow-sm dark:shadow-none
                    hover:-translate-y-1 transition-transform duration-200
                  ">
                        <svg
                          viewBox="0 0 32 32"
                          width="24"
                          height="24"
                          className="sm:w-[30px] sm:h-[30px]"
                          dangerouslySetInnerHTML={{ __html: skill.svg }}
                        />
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-muted-foreground whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 sm:gap-5 w-max animate-marquee-right">
                  {[...row2, ...row2].map((skill, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5 min-w-[56px] sm:min-w-[68px]">
                      <div className="
                    w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl
                    flex items-center justify-center
                    bg-white/80 dark:bg-white/5
                    border border-indigo-100 dark:border-white/10
                    shadow-sm dark:shadow-none
                    hover:-translate-y-1 transition-transform duration-200
                  ">
                        <svg
                          viewBox="0 0 32 32"
                          width="24"
                          height="24"
                          className="sm:w-[30px] sm:h-[30px]"
                          dangerouslySetInnerHTML={{ __html: skill.svg }}
                        />
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-muted-foreground whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
