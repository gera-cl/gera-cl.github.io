import Resume from "./home/resume";
import About from "./home/about";
import Portfolio from "./home/portfolio";
import Contact from "./home/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  )
}
