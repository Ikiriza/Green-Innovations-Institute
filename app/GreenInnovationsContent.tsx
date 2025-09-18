"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Leaf, Zap, Droplets, Sprout, Recycle } from "lucide-react"
import Image from 'next/image'

export default function GreenInnovationsContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const handleScroll = () => setScrollY(window.scrollY)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: [0.1, 0.3, 0.5], rootMargin: "0px 0px -50px 0px" },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (typeof document !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image 
              src="/Logo.png" 
              alt="Green Innovations Logo"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className="text-lg sm:text-xl font-bold text-foreground">Green Innovations Institute</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["home", "about", "services", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary transition-all duration-300 capitalize font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3" : ""}`}
              ></span>
              <span
                className={`absolute top-3 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-3" : ""}`}
              ></span>
            </div>
          </button>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="glass-card border-t border-border/20">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {["home", "about", "services", "contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 capitalize font-medium py-3 px-2 rounded-lg ${isMenuOpen ? "animate-slide-in-left" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section
        ref={heroRef}
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/30 parallax-bg"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div
          className="absolute inset-0 bg-[url('/abstract-green-nature-pattern.jpg')] opacity-5 parallax-bg"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.home ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              Innovating for a{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-glow">
                Sustainable Future
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto text-pretty leading-relaxed px-4">
              Leading environmental research and breakthrough technologies to create a greener, more sustainable world
              for future generations.
            </p>
            <button onClick={() => scrollToSection("about")} className="gradient-button btn-enhanced animate-shimmer">
              Discover Our Mission
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-bounce" />
            <span className="text-xs text-muted-foreground hidden sm:block">Scroll to explore</span>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible.about ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              Pioneering Environmental Solutions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Our institute combines cutting-edge research with practical innovation to address the world's most
              pressing environmental challenges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Environmental Research",
                description:
                  "Advanced studies in climate science, biodiversity, and ecosystem restoration using state-of-the-art technology and methodologies.",
                icon: <Leaf className="w-8 h-8 text-primary" />,
              },
              {
                title: "Innovation Labs",
                description:
                  "Collaborative spaces where scientists and engineers develop breakthrough technologies for renewable energy and sustainable materials.",
                icon: <Zap className="w-8 h-8 text-primary" />,
              },
              {
                title: "Global Partnerships",
                description:
                  "Strategic alliances with universities, governments, and organizations worldwide to scale environmental solutions globally.",
                icon: <Sprout className="w-8 h-8 text-primary" />,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`glass-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${
                  isVisible.about ? "animate-scale-in" : "opacity-0"
                } stagger-${index + 1}`}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty text-sm sm:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible.services ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              Our Green Solutions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Comprehensive environmental services designed to create lasting positive impact across multiple sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Renewable Energy",
                description: "Solar, wind, and innovative clean energy solutions for sustainable power generation.",
                icon: <Zap className="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />,
              },
              {
                title: "Waste Management",
                description:
                  "Advanced recycling technologies and circular economy solutions for zero-waste initiatives.",
                icon: <Recycle className="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />,
              },
              {
                title: "Sustainable Agriculture",
                description: "Precision farming techniques and organic solutions for food security and soil health.",
                icon: <Sprout className="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />,
              },
              {
                title: "Water Conservation",
                description: "Smart water management systems and purification technologies for clean water access.",
                icon: <Droplets className="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`glass-card hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group ${
                  isVisible.services ? "animate-slide-in-left" : "opacity-0"
                } stagger-${index + 1}`}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full group-hover:from-secondary/30 group-hover:to-primary/30 transition-all duration-300 group-hover:rotate-12">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible.contact ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              Join Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Ready to make a difference? Get in touch with our team to explore collaboration opportunities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card
              className={`glass-card transition-all duration-1000 ${isVisible.contact ? "animate-scale-in" : "opacity-0"}`}
            >
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">Name</label>
                      <Input
                        className="bg-input border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                      <Input
                        type="email"
                        className="bg-input border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Subject</label>
                    <Input
                      className="bg-input border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                      placeholder="How can we collaborate?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Message</label>
                    <Textarea
                      className="bg-input border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-primary/50 min-h-32 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button type="submit" className="gradient-button btn-enhanced w-full">
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-pulse-slow">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">Green Innovations Institute</span>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            2024 Green Innovations Institute. Building a sustainable future through innovation and research.
          </p>
        </div>
      </footer>
    </div>
  )
}
