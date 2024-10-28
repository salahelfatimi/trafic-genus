import Footer from "@/components/footer/page";
import Saction2 from "./pages/saction2/page";
import Saction3 from "./pages/saction3/page";
import Testimonials from "./pages/testimonials/page";
import Header from "./pages/Topheader/page";
export  default async function  Home() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
  <div className=" overflow-x-hidden">
    <Header/>
    <Testimonials/>
    <Saction2/>
    <Saction3/>
    <Footer/>
  </div>
  );
}
