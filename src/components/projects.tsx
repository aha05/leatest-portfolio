import { Github } from 'lucide-react'
import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Developed a fully functional e-commerce website using the MERN stack. The platform includes user authentication, product catalog management, shopping cart functionality, order processing, and an admin panel for inventory and order management. It supports both guest and registered users, allowing seamless shopping experiences with session-based cart storage.',
      image: '🛒',
      tags: ['React', 'Express', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      links: {
        live: '#',
        github: 'https://github.com/aha05/e-commerce',
      },
    },
    {
      title: 'Inventory Management System',
      description:
        'I developed a modern Inventory Management System for small and medium businesses to track stock, sales, and purchases with ease. The system is built for usability, security, and scalability, giving business owners real-time insights and full control over their inventory.',
      image: '📋',
      tags: ['Django', 'Vue.js', 'Tailwind CSS', 'PostgreSQL'],
      links: {
        live: '#',
        github: 'https://github.com/aha05/Inventory',
      },
    },
    {
      title: 'QuizHub',
      description:
        "QuizHub is a scalable, full-stack quiz management platform built with a React + TypeScript frontend and Spring Boot backend. It's designed with clean architecture, easy to maintain, extend, and integrate into enterprise or educational env't. The platform enables users to take quizzes, track their quiz history, view rankings on a leaderboard, and manage profiles.",
      image: '📝',
      tags: ['Spring Boot', 'React', 'TypeScript', 'Java', 'MySQL'],
      links: {
        live: '#',
        github: 'https://github.com/aha05/QuizHub',
      },
    },
    {
      title: 'Laravel Developer',
      description:
        'Developed a Human Resource Management System (HRMS) for Dilla University using the Laravel framework. The system streamlines HR processes, including employee information management, leave tracking, reporting, announcements, job postings, online registration, and user activity tracking. Designed with secure authentication and authorization, ensuring efficient management and user accessibility.',
      image: '🧑‍💼',
      tags: ['Laravel', 'MySQL', 'RESTful API'],
      links: {
        live: '#',
        github: 'https://github.com/aha05/duhrms',
      },
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in full-stack development and creative problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden bg-secondary/30 border-[hsl(var(--accent)/0.1)] hover:border-[hsl(var(--accent)/0.3)] transition-all duration-200 group"
              >
                {/* Project Header with Image */}
                <div className="h-40 bg-gradient-to-br from-[hsl(var(--accent)/0.2)] to-[hsl(var(--accent)/0.05)] border-b border-[hsl(var(--accent)/0.1)] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-accent/10 text-[hsl(var(--accent))] border-accent/30 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {/* <Link to={project.links.live}>
                      <Button size="sm" variant="outline" className="w-full gap-2 border-border hover:bg-[hsl(var(--secondary))] bg-transparent">
                        <ExternalLink size={16} /> View Live
                      </Button>
                    </Link> */}
                    <Link to={project.links.github}>
                      <Button size="sm" variant="outline" className="w-full gap-2 border-border hover:bg-[hsl(var(--secondary)/0.5)] bg-transparent">
                        <Github size={16} /> Code
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
