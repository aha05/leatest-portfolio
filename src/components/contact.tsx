'use client'

import React from "react"

import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission logic would go here
    setSubmitted(true)
    setFormState({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider">Get In Touch</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Let's Work Together</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6">Contact Information</h4>

              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-accent/10 hover:border-accent/30 hover:bg-secondary/50 transition-all duration-200 group"
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

              {/* Social Links */}
              <div className="pt-6 space-y-4">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Follow Me</h4>
                <div className="flex gap-3">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <Button
                      key={social}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border hover:bg-[hsl(var(--secondary)/0.5)] hover:border-[hsl(var(--accent)/0.3)] bg-transparent"
                    >
                      {social}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-secondary/30 border-accent/10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-[hsl(var(--secondary)/0.5)] border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--accent))]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-[hsl(var(--secondary)/0.5)] border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--accent))]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground block mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="bg-[hsl(var(--secondary)/0.5)] border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--accent))]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-[hsl(var(--secondary)/0.5)] border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--accent))]"
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-[hsl(var(--accent)/0.9)] text-accent-foreground">
                  Send Message
                </Button>

                {submitted && (
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm text-center">
                    Thanks for reaching out! I'll get back to you soon.
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
