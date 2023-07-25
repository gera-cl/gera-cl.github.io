'use client'

import Home from "../sections/home";
import About from "../sections/about";
import Resume from "../sections/resume";
import Portfolio from "../sections/portfolio";
import Contact from "../sections/contact";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  )
}
