import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Django', 'Spring Boot', 'Laravel', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub'],
    },
    {
      category: 'Other',
      skills: ['REST APIs', 'Authentication', 'Performance Optimization'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Skills & Technologies</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and methodologies I've mastered to deliver high-quality solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.category}
                className="p-6 bg-secondary/30 border-accent/10 hover:border-[hsl(var(--accent)/0.3)] transition-all duration-200"
              >
                <h4 className="text-lg font-semibold text-white mb-4">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-accent/10 text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.2)] border-accent/30 font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Proficiency Bars */}
          <Card className="p-8 bg-secondary/30 border-accent/10">
            <h4 className="text-lg font-semibold text-white mb-6">Proficiency Levels</h4>
            <div className="space-y-6">
              {[
                { label: 'Frontend Development', value: 90 },
                { label: 'Full Stack Development', value: 95 },
                { label: 'Backend Architecture', value: 95 },
                { label: 'DevOps & Deployment', value: 80 },
              ].map((skill) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{skill.label}</span>
                    <span className="text-xs text-muted-foreground">{skill.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-[hsl(var(--accent)/0.7)] rounded-full transition-all duration-500"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
