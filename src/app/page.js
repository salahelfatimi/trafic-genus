import Footer from "@/components/footer/page";
import Saction2 from "./pages/saction2/page";
import Saction3 from "./pages/saction3/page";
import Testimonials from "./pages/testimonials/page";
import Header from "./pages/Topheader/page";
import ButtonUp from "@/components/buttonUp";
export  default  function  Home() {
  return (
  <div className=" overflow-x-hidden">
    <ButtonUp/>
    <Header/>
    {/* <Testimonials/> */}
    <Saction2/>
    <Saction3/>
    <Footer/>
  </div>
  );
}
