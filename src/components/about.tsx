import { Card } from '@/components/ui/card'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="hidden md:block">
            <Card className="aspect-square bg-gradient-to-br from-[hsl(var(--accent)/0.1)] to-[hsl(var(--accent)/0.05)] border-accent/20 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="text-6xl">💻</div>
                  <p className="text-muted-foreground">Building the future with code</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-mono text-accent uppercase tracking-wider">About Me</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">Who I Am</h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack developer with 5+ years of experience building digital products that matter. My passion lies in creating seamless user experiences backed by robust, scalable architecture.
              </p>

              <p>
                My journey in tech started with a fascination for how things work. Over the years, I've evolved from a curious learner to someone who loves solving complex problems with elegant solutions. I've worked across various industries—from startups to established enterprises—always focusing on delivering value.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying at the forefront of web development trends.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">5+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">50+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">30+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
