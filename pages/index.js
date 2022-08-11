import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Contact from "./contact";
import HomePage from "./homePage";
import Service from "./service";
import Work from "./work"

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Service />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}