import Expert from "@/components/pages/home/expert/page";
import Header from "@/components/pages/home/header/page";
import Saction_2 from "@/components/pages/home/saction-2/page";
import Saction_3 from "@/components/pages/home/saction-3/page";
import ButtonUp from "@/components/tools/buttonUp";



export  default  function  Home() {
  return (
  <div className=" overflow-x-hidden">
    <ButtonUp/>
    <Header/>

    <Saction_2/>
    
    <Saction_3/>
    
  </div>
  );
}
