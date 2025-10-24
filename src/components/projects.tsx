import ProjectCard from './project-card';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  imageHint: string;
}

const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product management, shopping cart, and Stripe integration.",
    tags: ["React", "Javascript", "JSON-Server", "Tailwind CSS"],
    githubUrl: "https://github.com/abhayk2/codeVerse",
    liveUrl: "https://codeverse-ab.netlify.app",
    imageUrl: "/ecommerce.png",
    imageHint: "online shopping",
  },
  {
    title: "Email Services",
    description: "A springboot application that provides email services to the users. It allows users to send different type of mails like with embedded images, attachments, etc. It uses my email address to send email to the input email address.",
    tags: ["Spring Boot", "Java", "Thymeleaf", "HTML", "CSS"],
    githubUrl: "https://github.com/abhayk2/emailservice",
    liveUrl: "https://email-service-api-8vjg.onrender.com/swagger-ui.html/",
    imageUrl: "/email.png",
    imageHint: "email services",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills, built with a modern tech stack. Integerated Web3Forms to send emails to the user. ",
    tags: ["TypeScript", "Next JS", "Web3Forms API", "Tailwind CSS", "React", "shadcn/ui + Radix UI"],
    githubUrl: "https://github.com/abhayk2/abhay.spring-portfolio",
    liveUrl: "#",
    imageUrl: "/portfolio.png",
    imageHint: "developer portfolio",
  },
  {
    title: "Movie Finder",
    description: "A web app to discover and save recipes from a vast online database, with dietary filters.",
    tags: ["Vue.js", "API Integration", "Pinia"],
    githubUrl: "https://github.com/abhayk2/movie-mingle",
    liveUrl: "https://movie-mingle-ab.netlify.app",
    imageUrl: "/movie.png",
    imageHint: "food cooking",
  },
  {
    title: "Chat Application",
    description: "A real-time chat application built with Java Swing and networking concepts, featuring a server-client architecture with multithreading support for concurrent user connections. The application enables seamless messaging between multiple clients on the same network, providing cross-platform compatibility across Windows, macOS, and Linux systems. Perfect for both personal and professional communication with an intuitive GUI interface.",
    tags: ["Java", "Java Swing", "Java Socket Programming", "Multithreading"],
    githubUrl: "https://github.com/abhayk2/chat-app?tab=readme-ov-file",
    liveUrl: "https://www.linkedin.com/posts/abhayk176_javachatapplication-javaswing-networkingmagic-activity-7100560547103866881-ASCM?utm_source=share&utm_medium=member_desktop",
    imageUrl: "/chatapp.png",
    imageHint: "messaging app",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground">
            Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
