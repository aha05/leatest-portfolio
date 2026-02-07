import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Experience() {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description:
        'Leading a team of developers to build scalable web applications. Architected microservices infrastructure and mentored junior developers.',
      achievements: ['Led migration to modern stack', 'Improved performance by 40%', 'Managed team of 5+ developers'],
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2021 - 2023',
      description:
        'Developed and maintained multiple client-facing web applications. Implemented real-time features and optimized database queries.',
      achievements: ['Built 15+ production applications', 'Reduced load time by 50%', 'Established CI/CD pipeline'],
      tags: ['React', 'Express', 'MongoDB', 'Docker'],
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Studio',
      period: '2020 - 2021',
      description:
        'Created responsive user interfaces and interactive experiences. Collaborated with designers to bring concepts to life.',
      achievements: ['Launched 8+ projects', 'Improved SEO score to 98', 'Implemented accessibility standards'],
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Figma'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider">Professional Journey</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional roles and the impact I've made in each position
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={exp.company}
                className="p-6 bg-secondary/30 border-[hsl(var(--accent)/0.1)]  hover:text-[hsl(var(--accent)/0.3)] transition-all duration-200 relative"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-[hsl(var(--accent)/0.5)] to-transparent" />
                )}

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left - Role Info */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-[hsl(var(--accent))] font-medium text-sm">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.period}</p>
                  </div>

                  {/* Middle - Description */}
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-[hsl(var(--foreground))]">Key Achievements:</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] border-text-[hsl(var(--accent)/0.3)] text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
