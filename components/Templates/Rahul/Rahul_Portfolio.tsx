import type React from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Skills from "./components/Skills/Skills"
import ExpEdu from "./components/Experience/ExpEdu_Parichay"
import Projects from "./components/Projects/Projects_Parichay"
import Contact from "./components/Contact/Contact"
import "./Portfolio.css"

interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

interface Education {
  institution: string;
  degree: string;
  description?: string;
  date: string;
}

interface Experience {
  company: string;
  role: string;
  description: string;
  date: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

interface UserDetails {
  name: string;
  location: string;
  tagline: string;
  cvURL: string;
  contact: Contact;
  skills: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

export default function Page({userDetails}: {userDetails: UserDetails}) {
  const { name, location, tagline, cvURL, contact, skills } = userDetails

  return (
    <div className="app m-0" id="app">
      <Navbar />
      <Home name={name} location={location} tagline={tagline} cvURL={cvURL} contact={contact} />
      <Skills skills={skills} />
      <ExpEdu userExp={userDetails.experience} userEdu={userDetails.education} />
      <Projects userPrj={userDetails.projects} />
      <Contact name={name} email={contact.email} github={contact.github} linkedin={contact.linkedin} />
    </div>
  )
}


