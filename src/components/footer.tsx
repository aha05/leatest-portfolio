import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()
    const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/aha05',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gashaw-fentaye-1b38b82b4/?originalSubdomain=et',
    },
  ]

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Portfolio</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Full-stack developer creating elegant solutions to complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Quick Links</h4>
            <nav className="space-y-2 flex flex-col">
              <a href="#about" className="text-muted-foreground hover:text-[hsl(var(--foreground))]  text-sm transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-[hsl(var(--foreground))]  text-sm transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-[hsl(var(--foreground))] text-sm transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-[hsl(var(--foreground))] text-sm transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Follow</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-[hsl(var(--secondary))] text-muted-foreground hover:text-[hsl(var(--accent))] transition-all duration-200 text-sm"
                >
                  {social.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
