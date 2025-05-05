import AboutMe from "../about_me/about_me"
import ContactUs from "../contactus/contact_us"
import Proyects from "../projects/projects"
import Services from "../services/services"
import Banner from "./components/banner"

function Home() {

  return (
    <>
      <Banner/>      
      <Proyects/>
      <Services/>      
      <AboutMe/>
      <ContactUs/>
    </>
  )
}

export default Home
