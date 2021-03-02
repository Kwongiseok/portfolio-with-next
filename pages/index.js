import Navbar from "../components/navbar/navbar.tsx";
import BodyHome from "../components/home/home.tsx";
import About from "../components/about/about.tsx";
import Skills from "../components/skills/skills.tsx";
import Work from "../components/work/work.tsx";
import Testimonials from "../components/testimonials/testimonials.tsx";
import Contact from "../components/contact/contact.tsx";
import ArrowUpBtn from "../components/arrow-up-Btn/ArrowUpBtn.tsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <BodyHome />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
      <ArrowUpBtn />
    </>
  );
}
