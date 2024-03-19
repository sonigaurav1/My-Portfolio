import NavigationBar from "@/components/header/page";
import Home from "@/components/home/page";
import About from "@/components/about/page";
import Projects from "@/components/projects/page";
import Contact from "@/components/contact/page"
import Footer from "@/components/footer/page"
// import '../components/smooth-scroll';

export default function Homepage() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
