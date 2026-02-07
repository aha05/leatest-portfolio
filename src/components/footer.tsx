import { Separator } from '@/components/ui/separator'
import { Link } from "react-router-dom"

export function Footer() {
  const currentYear = new Date().getFullYear()

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
              <Link to="#about" className="text-muted-foreground hover:text-[hsl(var(--foreground))]  text-sm transition-colors">
                About
              </Link>
              <Link to="#skills" className="text-muted-foreground hover:text-[hsl(var(--foreground))]  text-sm transition-colors">
                Skills
              </Link>
              <Link to="#projects" className="text-muted-foreground hover:text-[hsl(var(--foreground))] text-sm transition-colors">
                Projects
              </Link>
              <Link to="#contact" className="text-muted-foreground hover:text-[hsl(var(--foreground))] text-sm transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Follow</h4>
            <div className="flex gap-3">
              {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((social) => (
                <Link
                  key={social}
                  to="#"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-[hsl(var(--secondary))] text-muted-foreground hover:text-[hsl(var(--accent))] transition-all duration-200 text-sm"
                >
                  {social.charAt(0)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
