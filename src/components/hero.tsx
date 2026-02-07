import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-accent font-mono text-sm">Welcome to my portfolio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                Full Stack Developer & Creative Technologist
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-lg">
                I craft elegant digital experiences by blending thoughtful design with robust engineering. Passionate about building scalable applications and exploring the intersection of code and creativity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#projects">
                <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                  View My Work <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="border-border hover:bg-secondary/50 bg-transparent">
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link
                href="#"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-[hsl(var(--accent))] transition-all duration-200"
              >
                <Github size={20} />
              </Link>
              <Link
                href="#"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-[hsl(var(--accent))] transition-all duration-200"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-[hsl(var(--accent))] transition-all duration-200"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#contact"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-[hsl(var(--accent))] transition-all duration-200"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute inset-0 border border-accent/20 rounded-3xl" />

              {/* Code-like content */}
              <div className="absolute inset-8 bg-secondary/30 rounded-2xl p-6 font-mono text-sm border border-accent/10 overflow-hidden">
                <div className="space-y-4">
                  <div className="text-accent">
                    <span className="text-muted-foreground">const</span> <span>portfolio</span> =
                  </div>
                  <div className="ml-4 space-y-2">
                    <div>
                      <span className="text-muted-foreground">developer</span>: <span className="text-accent">'full-stack'</span>,
                    </div>
                    <div>
                      <span className="text-muted-foreground">passion</span>: <span className="text-accent">'innovation'</span>,
                    </div>
                    <div>
                      <span className="text-muted-foreground">years</span>: <span className="text-accent">5+</span>,
                    </div>
                    <div>
                      <span className="text-muted-foreground">ready</span>: <span className="text-accent">true</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{'}'};</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
