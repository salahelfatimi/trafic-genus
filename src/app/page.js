import ButtonUp from "@/components/buttonUp";
import Header from "./pages/Home/Topheader/page";
import Saction2 from "./pages/Home/saction2/page";
import Saction3 from "./pages/Home/saction3/page";


export  default  function  Home() {
  return (
  <div className=" overflow-x-hidden">
    <ButtonUp/>
    <Header/>
    <Saction2/>
    <Saction3/>
   
  </div>
  );
}
