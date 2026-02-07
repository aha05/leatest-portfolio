import { ExternalLink, Github } from 'lucide-react'
import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.',
      image: '🛒',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'TypeScript', 'Tailwind CSS'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, team collaboration features, and intelligent task prioritization.',
      image: '✓',
      tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      title: 'AI Chat Interface',
      description:
        'Modern chat application powered by AI with natural language processing, context awareness, and seamless conversation flow.',
      image: '💬',
      tags: ['Next.js', 'OpenAI', 'WebSocket', 'TypeScript'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Real-time analytics dashboard providing comprehensive insights with interactive visualizations and custom reporting capabilities.',
      image: '📊',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      title: 'SaaS Subscription Platform',
      description:
        'Complete SaaS solution with subscription management, billing automation, user authentication, and role-based access control.',
      image: '🚀',
      tags: ['Next.js', 'PostgreSQL', 'Supabase', 'Vercel'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      title: 'Design System',
      description:
        'Comprehensive design system and component library with documentation, accessibility features, and extensive component variations.',
      image: '🎨',
      tags: ['React', 'Storybook', 'TypeScript', 'Tailwind CSS'],
      links: {
        live: '#',
        github: '#',
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider">Featured Work</h2>
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
                    <Link to={project.links.live}>
                      <Button size="sm" variant="outline" className="w-full gap-2 border-border hover:bg-[hsl(var(--secondary))] bg-transparent">
                        <ExternalLink size={16} /> View Live
                      </Button>
                    </Link>
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
