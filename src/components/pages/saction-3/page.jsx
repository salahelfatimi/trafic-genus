'use client'
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

export default function Saction3(){
    const [clickNum,setClickNum]=useState(0)
    const [clickShow,setclickShow]=useState(0)
        const Etapes=[
            {id:0,image:'/saction3/etapes/Audit.png', title:'Audit' ,description:"Nous analysons ensemble les résultats pour pouvoir faire les ajustements nécessaires pour l’augmentation de votre taux de conversion."},
            {id:1,image:'/saction3/etapes/Réalisation.png',  title:'Réalisation' ,description:"L'équipe d'experts que nous avons mobilisée conçoit le projet en accord avec la stratégie que nous avons préalablement définie et conformément à vos exigences. Nous maintenons un contact régulier tout au long de la réalisation du projet afin de vous tenir informé de son avancement et de répondre à toutes les questions que vous pourriez avoir."},
            {id:2,image:'/saction3/etapes/Livraison.png',  title:'Livraison et ajustements' ,description:"Une fois le tout finalisé, on vous livre le projet à temps pour votre lancement. Nous restons ouverts à toute suggestion de modification. Notre priorité absolue est votre satisfaction."},
            {id:3,image:'/saction3/etapes/Lancement.png',  title:'Lancement' ,description:"C’est le jour J, nous mettons en place votre tunnel de vente ou site internet pour que votre lancement soit à 100% réussi."},
            {id:4,image:'/saction3/etapes/résultats.png',  title:'Suivi des résultats' ,description:"Nous analysons ensemble les résultats pour pouvoir faire les ajustements nécessaires pour l'augmentation de votre taux de conversion."},

        ]
        const filterText=Etapes.find((ele) => ele.id == clickNum);
        const handleClick = () => {
            const section = document.querySelector('#sactionEtapes');
            if (section) {
                const sectionTop = section.offsetTop;
                const offset = window.innerHeight / 2 - section.offsetHeight / 2;
                window.scrollTo({
                    top: sectionTop - offset,
                    behavior: 'smooth',
                });
            }
        };
        function scrollToSection(e) {
            e.preventDefault(); 
            const targetSection = document.querySelector('#sactionEtapes');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

        }
     return (
        <div className=" flex flex-col bg-black  ">
            {/* saction 1 */}
            <div className=" relative pb-20">
             <div className="rounded-full-css bg-[#F2FD01] w-full rotate-180 h-16 bottom-0 absolute z-10 "></div>
                <div className="  container flex flex-col items-center justify-center gap-20">
                        <div className=" flex flex-col items-center justify-center  ">
                            <div className="  w-screen overflow-hidden">
                                <p className=" font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">Les 5 étapes pour mener à bien votre PROJET</p>
                            </div>
                            <h2 className=" text-center lg:text-4xl text-2xl font-bold  text-white">Les 5 étapes pour mener à bien votre PROJET </h2>                     
                        </div>  
                        <div className=" container">
                            <div className="grid grid-cols-1 md:grid-cols-1 2xl:grid-cols-5 items-center justify-center text-center gap-8">
                                {Etapes.map((step, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {scrollToSection(e),setClickNum(index);}}
                                        className={`${clickNum === index? "bg-black text-white border-[#F2FD01] border-4 shadow-2xl": "bg-[#F2FD01] text-black"} duration-700 cursor-pointer font-bold hover:bg-black border-[#F2FD01] border-4 hover:text-white rounded-xl p-4`}>
                                        Étape {index + 1} : {step.title}
                                    </button>
                                
                                ))}
                            </div>
                        </div>
                        <div id="sactionEtapes" className=" container flex flex-col lg:flex-row gap-8 items-center justify-center py-6">
                            <Image src={filterText.image} width={500} height={500} alt="trafic genius"  className=" lg:w-1/3"   title="trafic genius"/>
                            <div className="bg-black flex flex-col justify-center items-center rounded-2xl shadow-2xl gap-4 p-4 border-4 border-[#F2FD01] ">
                                <h3 className=" text-white text-4xl text-center font-bold ">{filterText.title}</h3>
                                <p className="  text-center   text-white  text-sm lg:text-base">{filterText.description}</p>
                            </div>
                        </div>    
                </div>
            </div>
            {/* saction 2 */}
            <div className="bg-[#F2FD01]     flex flex-col justify-center items-center pb-10">
                <div   className="z-10 bg-[url('/BACKGROUND.jpg')] bg-cover border-[#F2FD01] border-8 shadow-2xl gap-10 rounded-3xl p-6 lg:p-20 w-fit flex flex-col justify-center items-center">
                    <h4 className="  text-[#fff]  font-bold text-center lg:text-4xl text-2xl">PRÊT POUR DÉCOLLER ENSEMBLE ?</h4>
                    <Link href={'/appel'} target="_blank" >
                        <button className="cssbuttons-io-button ">
                            RÉSERVEZ VOTRE APPEL
                            <div className="icon">
                                <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
            {/* saction 3 */}
            <div className=" bg-[#F2FD01]">
                <div className=" container relative flex flex-col gap-16 items-center justify-center  pb-10 ">
                    <div className=" ">
                        <div className=" flex flex-col ">
                            <div className="  w-screen overflow-hidden">
                                <p className=" font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">trafic genius trafic genius</p>
                            </div>
                            <h2 className=" text-center lg:text-4xl text-2xl font-bold  text-black">Ensemble on développe de votre entreprise AVEC</h2>                     
                        </div>
                    </div>
                    <div className=" container flex flex-col gap-20  ">
                        <div className=" flex flex-col lg:flex-row  gap-20 justify-between items-start  ">
                            <div className=" relative  flex flex-col w-full ">
                            <h4 className={` bg-white  text-sm font-bold p-6 ${clickShow==1?' rounded-t-3xl':'rounded-3xl'}  flex flex-row justify-between items-center shadow-2xl border-4 border-black`}>Réactivité{clickShow==1?<X onClick={()=>(setclickShow(0))}  className=" cursor-pointer"/>:<ChevronDown onClick={()=>(setclickShow(1))}  className=" cursor-pointer"/>}</h4>
                            <p className={` top-20 lg:absolute z-10 rounded-b-3xl leading-loose font-medium  bg-white p-6  ${clickShow==1?' block border-x-4 border-b-4 border-black':' hidden '} `}>
                                    Nous sommes conscients que votre temps est précieux et votre réussite est cruciale pour vous. <br /><br /> 
                                    C&apos;est pourquoi nous avons mis en place un système efficace et réunit une équipe d&apos;experts talentueux et dévoués pour donner vie à votre projet en un temps record, sans compromettre la qualité.<br /><br /> 
                                    Nous sommes passionnés par la création de solutions exceptionnelles qui répondent à vos besoins uniques, tout en veillant à ce que votre projet soit livré dans les meilleurs délais possible. <br /><br /> 
                                    Avec nous, vous pouvez être sûr d&apos;obtenir des résultats qui dépassent vos attentes et vous propulsent vers le succès.
                                </p>
                            </div>
                            <div className="  relative flex flex-col  w-full ">
                                <h4 className={` bg-white  text-sm font-bold p-6 ${clickShow==2?' rounded-t-3xl':'rounded-3xl'}  flex flex-row justify-between items-center shadow-2xl border-4 border-black`}>Innovation{clickShow==2?<X onClick={()=>(setclickShow(0))}  className=" cursor-pointer"/>:<ChevronDown onClick={()=>(setclickShow(2))}  className=" cursor-pointer"/>}</h4>
                                <p className={`top-20 lg:absolute z-10 rounded-b-3xl leading-loose font-medium  bg-white p-6 ${clickShow==2?' block border-x-4 border-b-4 border-black':'hidden'} `}>
                                    Nous sommes conscients que votre temps est précieux et votre réussite est cruciale pour vous.<br /><br />
                                    Chez nous, l&apos;innovation est au cœur de notre approche. Nous sommes constamment à la recherche des dernières technologies et méthodes pour offrir à nos clients les solutions les plus performantes.<br /><br />
                                    Notre engagement envers l&apos;excellence nous pousse à investir continuellement dans la recherche et le développement, pour que nos clients puissent bénéficier des avancées les plus récentes dans leur domaine.
                                </p>
                            </div>
                        </div>
                       
                        <div className=" flex flex-col lg:flex-row  gap-20 justify-between items-start ">
                            <div className=" relative  flex flex-col w-full ">
                            <h4 className={` bg-white  text-sm font-bold p-6 ${clickShow==3?' rounded-t-3xl':'rounded-3xl'}  flex flex-row justify-between items-center shadow-2xl border-4 border-black`}>Confiance{clickShow==3?<X onClick={()=>(setclickShow(0))}  className=" cursor-pointer"/>:<ChevronDown onClick={()=>(setclickShow(3))}  className=" cursor-pointer"/>}</h4>
                                <p className={`top-20 lg:absolute z-10 rounded-b-3xl leading-loose font-medium  bg-white p-6  ${clickShow==3?' block border-x-4 border-b-4 border-black':' hidden '} `}>
                                    Nous sommes une agence à taille humaine et nous sommes fiers de maintenir cette proximité avec tous nos clients.<br /><br />
                                    En tant que véritable partenaire au sein de votre entreprise, nous défendons vos intérêts et mettons tout en œuvre pour assurer votre réussite.<br /><br />
                                    Nous sommes disponibles à tout moment pour répondre à vos questions, vous conseiller et vous accompagner. <br /><br />
                                    N&apos;hésitez pas à nous contacter par e-mail ou par téléphone, nous sommes là pour vous aider.         
                                </p>
                            </div>
                            <div className=" relative  flex flex-col  w-full ">
                                <h4 className={` bg-white  text-sm font-bold p-6 ${clickShow==4?' rounded-t-3xl':'rounded-3xl'}  flex flex-row justify-between items-center shadow-2xl border-4 border-black`}>Satisfaction{clickShow==4?<X onClick={()=>(setclickShow(0))}  className=" cursor-pointer"/>:<ChevronDown onClick={()=>(setclickShow(4))}  className=" cursor-pointer"/>}</h4>
                                <p className={`top-20 lg:absolute z-10 rounded-b-3xl leading-loose font-medium  bg-white p-6 ${clickShow==4?' block border-x-4 border-b-4 border-black':'hidden'} `}>
                                Nous mettons un point d&apos;honneur à être transparents dans notre manière de travailler et à vous tenir informés de l&apos;avancement de votre projet à chaque étape.<br /><br />
                                Notre objectif est de vous accompagner dans la réalisation de vos objectifs, en vous offrant des solutions sur mesure qui répondent à vos besoins spécifiques.<br /><br />
                                Nous croyons en une relation de confiance avec nos clients, basée sur une communication ouverte et honnête. <br /><br />
                                C&apos;est ainsi que nous construisons des partenariats durables et fructueux.            
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* saction 4 */}
            <div className="bg-[#F2FD01] relative ">
            <div className="rounded-full-css bg-black w-full rotate-180 h-16 bottom-0 absolute z-10 "></div>
                <div className=" container flex flex-col gap-20   pb-20">
                    <div className=" flex flex-col items-center justify-center  ">
                        <div className="  w-screen overflow-hidden">
                            <p className=" font-sans  text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">UNIQUEMENT POUR LES ENTREPRENEURS MOTIVÉS</p>
                        </div>
                        <h2 className=" text-center lg:text-4xl text-2xl font-bold  text-black">UNIQUEMENT POUR LES ENTREPRENEURS MOTIVÉS </h2>                     
                    </div>  
                    <div className=" container flex flex-col-reverse lg:flex-row-reverse justify-center items-center">
                        <div className=" text-left   lg:w-[70%] font-light text-sm  lg:text-xl bg-[#000] text-white  rounded-xl p-6   shadow-2xl">
                            <p>
                                Nous sommes passionnés par ce que nous faisons et nous croyons que notre passion transparaît dans notre travail. Nous sommes toujours à la recherche de nouvelles opportunités pour améliorer et développer nos compétences, afin de fournir à nos clients les solutions les plus innovantes et les plus performantes. <br /><br />

                                Chez Trafic Genius, nous sommes fiers de notre culture d&apos;entreprise axée sur la collaboration et le partage des connaissances. <br /><br />

                                Nous aimons travailler en équipe pour partager nos idées et trouver les meilleures solutions pour nos clients.     <br /><br />
                            </p>
                        </div>
                        <div className=" rounded-2xl  ">
                            <Image src={'/saction3/light.png'} className=" cursor-pointer  hover:grayscale-0  grayscale hover:rotate-12 duration-700" width={250} height={500} alt="trafic genius"    title="trafic genius"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* saction 5 */}
            <div className=" container relative  flex flex-col justify-center items-center  pb-10">
                <div className="z-10 bg-[url('/BACKGROUND.jpg')] bg-cover border-8 shadow-2xl border-[#F2FD01]  gap-10 rounded-3xl p-6 lg:p-20  flex flex-col justify-center items-center">
                    <h4 className="  text-[#fff]  text-center lg:text-4xl text-2xl  font-bold">Boostez votre entreprise grâce à notre expertise en scaling</h4>
                    <div className=" border-t-4 border-[#F2FD01] w-full"></div>
                    <p className="  text-sm  text-white  text-center lg:text-2xl">Prenez contact et échangeons ensemble sur votre projet
                    </p>
                    <Link href={'/appel'} target="_blank" >
                    <button className="cssbuttons-io-button ">
                        RÉSERVEZ VOTRE APPEL
                        <div className="icon">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </button>
                    </Link>
                </div>
               
            </div>
            <div className=" bg-black">
                <div className="  pb-10 md:container">
                    <div className=" flex flex-col items-center justify-center  ">
                        <div className="  w-screen overflow-hidden">
                            <p className=" font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">UNIQUEMENT POUR LES ENTREPRENEURS MOTIVÉS</p>
                        </div>
                        <h2 className=" text-center lg:text-4xl text-2xl font-bold  text-white">UNIQUEMENT POUR LES ENTREPRENEURS MOTIVÉS </h2>                     
                    </div>  
                    <div className="  ">
                     <div className=" p-8">
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-t-4 border-x-4  border-[#000] shadow-2xl py-10 border-b-4 rounded-t-3xl p-4 " open>
                            <summary className="lg:text-xl text-base  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            Est-ce que vous pouvez me montrer d&apos;autres exemples de tunnels de vente ou sites Internet que vous avez réalisés ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs  leading-6 text-black ">
                            <p>Oui, si vous le souhaitez nous pouvons vous présenter d&apos;autres exemples de tunnels de vente ou sites Internet que ceux qui figurent sur cette page. Il suffit de prendre contact avec nous en cliquant sur l&apos;un des boutons « Prendre contact maintenant » et nous vous ferons parvenir nos dernières réalisations.</p>
                            </div>
                        </details>
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-x-4  border-[#000] shadow-2xl py-10 border-b-4  p-4 " >
                            <summary className="lg:text-xl  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            Est-ce que vous pouvez vous occuper du copywriting de mon tunnel de vente ou de mon site Internet ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs  leading-6 text-black ">
                            <p>Oui, nous pouvons vous fournir un tunnel de vente ou site Internet complet de A à Z y compris avec le copywriting. Si c&apos;est ce que vous souhaitez, nous pouvons en parler ensemble lors de votre appel stratégique offert.</p>
                            </div>
                        </details>
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-x-4 border-[#000] shadow-2xl  py-10 border-b-4 p-4 " >
                            <summary className="lg:text-xl  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            Quels sont vos tarifs ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs  leading-6 text-black ">
                            <p>Nos tarifs sont adaptés aux différentes demandes de nos clients. Pour en savoir plus, nous vous invitons à prendre contact avec nous directement. Nous serons ravis de répondre à toutes vos questions.</p>
                            </div>
                            
                        </details>

                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-x-4 border-[#000] shadow-2xl py-10 border-b-4  p-4 " >
                            <summary className="lg:text-xl  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            En combien de temps êtes-vous capable de me livrer ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs  leading-6 text-black ">
                            <p>En moyenne, nous pouvons vous livrer dans un délai de 7 à 15 jours ouvrés en fonction du nombre de pages et de la complexité de votre projet.</p>
                            </div>
                        </details>
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-b-4 border-x-4 border-[#000] shadow-2xl rounded-b-3xl   p-4 " >
                            <summary className="lg:text-xl  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            Comment faire pour vous contacter ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs leading-6 text-black ">
                            <p>Pour nous contacter, vous pouvez cliquer sur l&apos;un des boutons « Prendre contact maintenant » que vous trouverez sur cette page. Après avoir rempli un court formulaire, nous reviendrons vers vous dans les plus brefs délais.</p>
                            </div>
                        </details>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     )
}