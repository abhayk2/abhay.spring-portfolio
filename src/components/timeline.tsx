"use client";

import { useEffect, useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  Code2,
  Star,
  Award,
} from "lucide-react";

type TimelineEntry = {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  icon: "work" | "education" | "achievement" | "coding";
  side: "left" | "right";
};

const timelineData: TimelineEntry[] = [
  {
    date: "2017",
    title: "Class X — CBSE",
    subtitle: "Kendriya Vidyalaya Siwan",
    description:
      "Scored a perfect 10 CGPA in the All India Secondary School Examination, laying a strong academic foundation from the very start.",
    tags: ["CGPA: 10/10"],
    icon: "education",
    side: "left",
  },
  {
    date: "2019",
    title: "Class XII — CBSE",
    subtitle: "Kendriya Vidyalaya Kankarbagh",
    description:
      "Completed All India Senior School Certificate Examination with 84.8%, building on a strong academic track record.",
    icon: "education",
    side: "right",
  },
  {
    date: "2020 – 2024",
    title: "B.Tech — ECE",
    subtitle: "Heritage Institute of Technology, Kolkata",
    description:
      "Graduated with a CGPA of 8.70/10 in Electronics and Communications Engineering, developing a passion for software development alongside core engineering studies.",
    tags: ["CGPA: 8.70/10"],
    icon: "education",
    side: "left",
  },
  {
    date: "2023 – 2024",
    title: "AIR 1531 — TCS CodeVita S12",
    subtitle: "Among 300,000+ Global Participants",
    description:
      "Ranked AIR 1531 in one of the world's largest programming competitions, demonstrating strong analytical and competitive coding skills.",
    tags: ["Competitive Programming"],
    icon: "coding",
    side: "right",
  },
  {
    date: "2024",
    title: "GATE 2024 Qualified — CS & IT",
    subtitle: "National-Level Engineering Exam",
    description:
      "Cleared one of India's most competitive national engineering exams, proving strong CS fundamentals and analytical ability beyond core ECE background.",
    tags: ["Computer Science"],
    icon: "achievement",
    side: "left",
  },
  {
    date: "July 2024 – Present",
    title: "Software Developer",
    subtitle: "Tata Consultancy Services (TCS)",
    description:
      "Building and maintaining the TCS BaNCS health insurance platform — engineering Angular modules, Spring Boot APIs, PostgreSQL optimisations, and microservices across Policy & Claims workflows.",
    tags: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Microservices"],
    icon: "work",
    side: "right",
  },
  {
    date: "January 2026",
    title: "Star of the Month & On the Spot Award",
    subtitle: "TCS — Business Impact Recognition",
    description:
      "Recognised for exceptional contributions to a high-stakes client demo project that successfully attracted a major enterprise client, directly contributing to business growth.",
    tags: ["Leadership", "Client Demo"],
    icon: "achievement",
    side: "left",
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Trophy,
  coding: Code2,
};

const iconColorMap = {
  work: "from-violet-500 to-purple-600",
  education: "from-blue-500 to-cyan-500",
  achievement: "from-amber-400 to-orange-500",
  coding: "from-emerald-400 to-teal-500",
};

const glowColorMap = {
  work: "shadow-violet-500/30",
  education: "shadow-blue-500/30",
  achievement: "shadow-amber-400/30",
  coding: "shadow-emerald-400/30",
};

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("timeline-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Icon = iconMap[entry.icon];

  return (
    <div
      ref={ref}
      className={`
        timeline-card group relative flex items-center
        md:w-1/2
        ${entry.side === "left" ? "md:self-start md:pr-12" : "md:self-end md:pl-12"}
        self-start pl-12
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* ── Dot on the spine (desktop) ── */}
      <div
        className={`
          absolute hidden md:flex items-center justify-center
          w-11 h-11 rounded-full
          bg-gradient-to-br ${iconColorMap[entry.icon]}
          shadow-lg ${glowColorMap[entry.icon]}
          ring-4 ring-background
          z-10
          transition-transform duration-500 group-hover:scale-110
          ${entry.side === "left" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}
        `}
      >
        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
      </div>

      {/* ── Dot on the spine (mobile — always left) ── */}
      <div
        className={`
          absolute md:hidden flex items-center justify-center
          w-9 h-9 rounded-full
          bg-gradient-to-br ${iconColorMap[entry.icon]}
          shadow-lg ${glowColorMap[entry.icon]}
          ring-4 ring-background
          z-10 left-0 -translate-x-1/2
          transition-transform duration-500 group-hover:scale-110
        `}
      >
        <Icon className="w-4 h-4 text-white" strokeWidth={2} />
      </div>

      {/* ── Card ── */}
      <div
        className={`
          w-full rounded-2xl p-5 sm:p-6
          bg-card/80 backdrop-blur-sm
          border border-border/50
          shadow-sm hover:shadow-xl
          transition-all duration-500 ease-out
          hover:border-primary/30
          hover:-translate-y-1
        `}
      >
        {/* Date badge */}
        <span
          className={`
            inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase
            px-3 py-1 rounded-full mb-3
            bg-gradient-to-r ${iconColorMap[entry.icon]} text-white
          `}
        >
          {entry.date}
        </span>

        <h3 className="text-lg sm:text-xl font-bold font-headline text-foreground leading-tight">
          {entry.title}
        </h3>

        <p className="text-sm font-medium text-primary/80 mt-0.5">{entry.subtitle}</p>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {entry.description}
        </p>

        {entry.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground/70 border border-border/40"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="journey" className="py-20 sm:py-24 overflow-hidden">
      <div className="container px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            My Journey
          </h2>
          <p className="mt-4 text-muted-foreground">
            From academic foundations to professional milestones — a timeline of the key moments that shaped my career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-10 md:gap-12">
          {/* ── Vertical spine ── */}
          {/* Desktop: centered */}
          <div
            className="
              hidden md:block absolute top-0 bottom-0
              left-1/2 -translate-x-1/2
              w-0.5 bg-gradient-to-b from-primary/5 via-primary/30 to-primary/5
            "
            aria-hidden="true"
          />
          {/* Mobile: left-aligned */}
          <div
            className="
              md:hidden absolute top-0 bottom-0
              left-0
              w-0.5 bg-gradient-to-b from-primary/5 via-primary/30 to-primary/5
            "
            aria-hidden="true"
          />

          {timelineData.map((entry, i) => (
            <TimelineCard key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
