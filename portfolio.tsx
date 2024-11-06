'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Award, Briefcase, FileText, Github, Linkedin, Mail, MapPin, Phone, Trophy, User } from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("about")
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Cover Image */}
      <div className="relative h-[40vh] bg-gradient-to-b from-primary/10 to-background">
        <div 
          className="absolute inset-0 opacity-60 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-06-28%20144145-S7NM6NkbJ053jQCuYYLMyxgoERoYEe.png')",
            backgroundPosition: "center 60%"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Profile Section */}
      <div className="container relative -mt-32 px-4">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-48 h-48 rounded-full border-4 border-background overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-06-13%20090452-CwjM1ab07MU7UPm245f3tQgHqT1lDq.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold">SRISIVASUBBRAMANYAN BS</h1>
            <div className="flex flex-wrap gap-2 mt-2 text-muted-foreground">
              <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> sivasubbu421@gmail.com</span>
              <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> 6380463345</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Tiruchirappalli, India</span>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/srisivasubbramanyan-bs-330a24238" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" /> Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid w-full md:w-auto grid-cols-4 h-auto gap-4">
            <TabsTrigger value="about" className="flex gap-2">
              <User className="w-4 h-4" /> About
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex gap-2">
              <Briefcase className="w-4 h-4" /> Experience
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex gap-2">
              <Trophy className="w-4 h-4" /> Projects
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex gap-2">
              <Award className="w-4 h-4" /> Achievements
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[60vh] mt-6 pr-4">
            <TabsContent value="about">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed">
                    Innovative SDE with a Bachelor's Degree in Computer Science Engineering. Research Intern at DST Government of India.
                    Skilled in Machine Learning, CAD Design, Materials Testing, and Prototype Development. Strong focus on Deep Learning,
                    Web Development and has won numerous Awards and Hackathons with a strong communication skill set and natural
                    leadership qualities.
                  </p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Matlab", "Machine Learning", "Deep Learning", "HTML", "React", "CSS", "IoT", 
                        "Image Processing", "Figma", "Flutter", "Full Stack", "Prompt Engineering", "Research", "LaTeX"
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience">
              <div className="space-y-6">
                {[
                  {
                    title: "Data Science Intern",
                    company: "Coapps.AI",
                    period: "Dec 2023 - May 2024",
                    location: "Chennai, Tamil Nadu, India",
                    description: "Worked on forecasting energy demand using IoT data for smart grid analytics. Gained expertise in data visualization, machine learning, and deep learning, focusing on AI applications in the energy sector."
                  },
                  {
                    title: "AIML Research Intern",
                    company: "National Institute of Technology",
                    period: "Aug 2022 - Jul 2023",
                    location: "Tiruchirappalli, Tamil Nadu, India",
                    description: "Worked on IoT, Cybersecurity, DBMS, and Deep learning projects, leading to a paper presentation at the IEEE International Conference."
                  },
                  // Add more experiences...
                ].map((exp, idx) => (
                  <Card key={idx}>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period} • {exp.location}</p>
                      <p className="mt-2">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid gap-6">
                {[
                  {
                    title: "Myocardial Infarction Prediction and Prevention Using AI/ML",
                    achievement: "SRM Project Expo – 1st Prize 🥇 | Rs 25,000/-"
                  },
                  {
                    title: "Impending Myocardial Infarction Prediction and Prevention",
                    achievement: "IIIT Sri City Hackathon – 3rd Prize 🥉 | Rs 1,00,000/-"
                  },
                  {
                    title: "FarmSense: An AI-based System for Agriculture",
                    achievement: "Temenos Hackathon– 2nd Prize 🥈 | Rs 30,000/-"
                  },
                  // Add more projects...
                ].map((project, idx) => (
                  <Card key={idx}>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground mt-2">{project.achievement}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Awards & Recognition</h3>
                    <div className="space-y-2">
                      <p>• Young Achiever Award - Aram Foundation (May 2024)</p>
                      <p>• Patent: System and Method for Detection of Myocardial Infarction (MI)</p>
                      <p>• Multiple IEEE Publications</p>
                    </div>

                    <h3 className="text-xl font-semibold mt-6 mb-4">Leadership Roles</h3>
                    <div className="space-y-2">
                      <p>• President - Fine Arts and Literary Association SRMIST</p>
                      <p>• President & Member IQAC SRMUNIVERSITY</p>
                      <p>• Campus Ambassador FESTEMBER NITT-Public Relations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  )
}