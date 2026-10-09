import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gashawfentaye0@gmail.com',
      href: 'mailto:gashawfentaye0@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 906 843 038',
      href: 'tel:+251906843038',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: '#',
    },
  ]

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Let's Work Together</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6">Contact Information</h4>
              
              <div className="w-full flex flex-wrap gap-5">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="w-92 flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-accent/10 hover:border-accent/30 hover:bg-secondary/50 transition-all duration-200 group"
                  >
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-200">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                      <p className="text-base text-white break-all">{info.value}</p>
                    </div>
                  </a>
                )
              })}
              </div>

              {/* Social Links */}
              <div className="gird md:grid-cols-2">
              <div className="pt-6 space-y-4 w-100">
                <h4 className="flex text-sm font-semibold text-white uppercase tracking-wide">Follow Me</h4>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border hover:bg-[hsl(var(--secondary)/0.5)] hover:border-[hsl(var(--accent)/0.3)] bg-transparent"
                    >
                      <a href={social.href}>{social.label}</a>
                    </Button>
                  ))}
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
