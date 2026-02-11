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
              <h3 className="text-3xl sm:text-4xl font-bold text-white">Who I Am</h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
               I am a Full Stack Developer with over 3+ years of hands-on experience in designing, developing, and maintaining web applications. I specialize in backend development with frameworks like Django, Node.js, Express.js, Spring Boot and Laravel, while also building modern, responsive frontends using JavaScript frameworks such as React, Vue, and TypeScript. My expertise lies in creating well-structured, scalable backend systems and seamlessly integrating them with user-friendly, interactive interfaces. I am passionate about writing clean, maintainable code, optimizing application performance, and delivering robust solutions that meet business and user requirements. I enjoy collaborating with cross-functional teams, learning new technologies, and continuously improving development workflows to create high-quality digital experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">3+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">12+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
