'use client'

import {  Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import {  useState } from "react";

export default function Form(){
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      tele: "",
      comment: "",
    });
    const sendEmail = async (e) => {
      e.preventDefault();
      setValidation(true);
      if (formData.fullName && formData.tele && formData.email) {
        setIsLoading(true);
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (response.status === 200) {
            setFormData({
              fullName: "",
              email: "",
              tele: "",
              comment: "",
            });
            setValidation(false);
            setIsLoading(false);
          }
        } catch {
            setIsLoading(false);
        }
      }
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({...formData,[name]: value,});
    };
      return(
          <div className=" pt-20 ">
              <div className="  ">
                  <div className=" container flex flex-col lg:flex-row items-center justify-center  ">
                    <div className=" border-4 rounded-2xl border-[#F2FD01] w-full  h-[70vh] " style={{  position: "relative" ,  }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12296.627856992523!2d-8.0144598!3d31.6323711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeff7e9c6abab%3A0xdf6ac8be9ef4de51!2sTrafic%20Genius!5e1!3m2!1sen!2sma!4v1733148570331!5m2!1sen!2sma"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className=" border-4 rounded-xl"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                      <form className=" w-full  flex flex-col gap-4 p-6 " onSubmit={sendEmail}>
                        <h2 className="text-[#F2FD01] text-2xl font-bold">Contactez-nous</h2>
                          <div className=" flex flex-col lg:flex-row gap-4">
                              <div className=" w-full">
                                  <input value={formData.fullName} onChange={handleInputChange} type="text" name='fullName' className={` ${!formData.fullName && validation && "border-red-500 placeholder:text-red-500 "} bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium   `} placeholder=' nom et Prénom ' />
                                  <p className="text-red-500 text-xs font-medium pl-3">
                                      {!formData.fullName && validation &&
                                          "Veuillez saisir votre  nom et Prénom"}
                                  </p>
                              </div>
                              <div className=" w-full">
                                  <input value={formData.tele} onChange={handleInputChange} type="tele" name='tele' className={` ${!formData.tele && validation && "border-red-500 placeholder:text-red-500 "} bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  `} placeholder=' Téléphone' />
                                  <p className="text-red-500 text-xs font-medium pl-3">
                                      {!formData.tele && validation &&
                                          "Veuillez saisir votre Téléphone"}
                                  </p>
                              </div>
                          </div>
                          <div className=" w-full">
                              <input value={formData.email} onChange={handleInputChange} type="email" name='email' className={` ${!formData.email && validation && "border-red-500 placeholder:text-red-500 "} bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  `} placeholder=' E-mail' />
                              <p className="text-red-500 text-xs font-medium pl-3">
                                  {!formData.email && validation &&
                                      "Veuillez saisir votre E-mail"}
                              </p>
                          </div>                        
                          <textarea value={formData.comment} onChange={handleInputChange} className='bg-[#EFEFEF] w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  '  placeholder=' Comment' name="comment" id="comment" cols={30} rows={6}></textarea>
                          <button disabled={isLoading} type="submit" className=' bg-[#F2FD01] border-2 hover:text-[#F2FD01] duration-700 hover:bg-black border-[#F2FD01] text-black font-medium text-sm items-center justify-center rounded-full w-full  py-3 px-2 flex gap-1'><Mail className=" h-5"/>  {isLoading? "Envoi en cours...": "Envoyer"}</button>
                          <h4 className=" text-xs text-center text-white">Pas besoin de remplir le formulaire. Contactez-nous directement sur WhatsApp.</h4>
                          <Link href={"https://wa.me/+212703945314?text=Bonjour, je suis intéressé(e) par vos services trafic genius . Pourriez-vous me fournir plus d'informations, s'il vous plaît ?"} target="_blank"   className=' text-center bg-[#00A884] border-2 hover:text-[#00A884] duration-700 hover:bg-black border-[#00A884] text-white font-medium text-sm items-center justify-center rounded-full w-full flex gap-1 py-3'><MessageSquare className=" h-5"/> Envoyer sur Whatsapp</Link>

                      </form>
                    </div>
              </div>
         
          </div>
      )
  }