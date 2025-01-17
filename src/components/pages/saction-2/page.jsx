import FetchText from "@/components/tools/fetchText"
import { CirclePlus, Facebook, FileChartColumnIncreasing, Laptop, NotebookPen, Presentation, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Expert from "../expert/page"

export default function Saction2(){
    const website =[
        {title:'Trafic Genus',image:'Nj3d-Marrakech.png',url:'https://nj3d-marrakech.com'},
        {title:'Trafic Genus',image:'saveurs-de-sprairies.png',url:'https://saveursdesprairies.com'},
        {title:'nextlevelgroup',image:'dayaf-&-Co.png',url:'https://www.dayafandco.com'},
        {title:'3pebatiment',image:'French-O-Paname.png',url:'https://www.french-opaname.com'},
        {title:'3pebat-ecoenergie',image:'Elhabri-Concept.png',url:'https://elhabriconcept.com'},
        {title:'nextlevelgroup',image:'nextlevelgroup.png',url:'https://nextlevelgroup.fr'},
        {title:'3pebatiment',image:'3pebatiment.png',url:'https://3pebatiment.fr/accueil-3pebat'},
        {title:'3pebat-ecoenergie',image:'3pebat-ecoenergie.png',url:'https://3pebat-ecoenergie.fr'},
        {title:'skyline-immo',image:'skyline-immo.png',url:'https://skyline-immo.com'},
        {title:'leyane',image:'leyane.png',url:'https://leyane.com'},
    ]
    return (
        <div className=" ">
            {/* saction 5 */}
            <div className="flex flex-col justify-between pb-20 items-center gap-20 bg-[#F2FD01] relative ">
            <div className="rounded-full-css bg-black w-full rotate-180 h-16 bottom-0 absolute z-10 "></div>
            <div className="flex-col flex items-center">
                <div className="w-screen overflow-hidden">
                <p className="font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">
                    Voici un aperçu de ce que nous sommes prêts à vous offrir !
                </p>
                </div>
                <h2 className=" container text-xl md:text-4xl lg:text-6xl font-black text-black  text-center uppercase ">
                    Voici un aperçu de ce que nous sommes prêts à vous offrir !
                </h2>
            </div>
                <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  items-start justify-center">
                    
                    <div className=" flex flex-col items-center gap-10 justify-center">
                        <div className=" bg-[#F2FD01] p-2 rounded-2xl border-8 border-black  shadow-2xl">
                            <Presentation  size={60} className="" />
                        </div>
                        <div className="  gap-4  flex flex-col justify-center items-center">
                            <h3 className=" 2xl:text-3xl text-lg font-semibold  text-center uppercase">Tunnel de vente</h3>
                            <p className=" text-center  text-xs 2xl:text-sm font-light">Nous sommes des experts en création de tunnels de vente hautement performants.Nous mettons en place des stratégies personnalisées pour capturer l&apos;attention de votre audience, stimuler l&apos;engagement et générer des conversions.Notre approche axée sur les tunnels de vente vous permet d&apos;optimiser chaque étape du parcours d&apos;achat de vos prospects, afin de maximiser vos ventes et votre croissance.</p>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center gap-10 justify-center">
                        <div className=" bg-[#F2FD01] p-2 rounded-2xl border-8 border-black  shadow-2xl">
                            <NotebookPen  size={60} className="" />
                        </div>
                        <div className=" gap-4   flex flex-col justify-center items-center">
                            <h3 className=" 2xl:text-3xl text-lg font-semibold text-center uppercase">Sites internet</h3>
                            <p className=" text-center  text-xs 2xl:text-sm font-light">Chez trafic genius trafic genius, nous sommes spécialisés dans la conception et le développement de sites web personnalisés pour répondre aux besoins uniques de nos clients. Que vous souhaitiez créer un site vitrine pour présenter votre entreprise, un site e-commerce pour vendre vos produits en ligne, ou tout autre type de site web, nous sommes là pour vous aider.</p>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center gap-10 justify-center">
                        <div className=" bg-[#F2FD01] p-2 rounded-2xl border-8 border-black  shadow-2xl">
                            <Target  size={60} className="" />
                        </div>
                        <div className="  gap-4  flex flex-col justify-center items-center">
                            <h3 className="2xl:text-3xl text-lg font-semibold text-center uppercase">Applications Web et Mobile</h3>
                            <p className=" text-center  text-xs 2xl:text-sm font-light">Nous comprenons l&apos;importance des applications web et mobiles dans le monde numérique d&apos;aujourd&apos;hui. Chez trafic genius trafic genius, nous nous spécialisons dans la création d&apos;applications sur mesure qui répondent aux besoins uniques de nos clients. Que vous souhaitiez développer une application pour votre entreprise, une plateforme de commerce électronique, une application de service à la clientèle ou toute autre idée innovante, nous sommes là pour vous aider à concrétiser votre vision.</p>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center gap-10 justify-center">
                        <div className=" bg-[#F2FD01] p-2 rounded-2xl border-8 border-black  shadow-2xl">
                            <Laptop  size={60} className="" />
                        </div>
                        <div className=" gap-4   flex flex-col justify-center items-center">
                            <h3 className=" 2xl:text-3xl text-lg font-semibold text-center uppercase">Automatisation</h3>
                            <p className=" text-center  text-xs 2xl:text-sm font-light">Nous comprenons l&apos;importance d&apos;optimiser votre processus de marketing automatisé. C&apos;est pourquoi nous offrons des fonctionnalités avancées d&apos;automatisation pour maximiser l&apos;efficacité et les résultats de votre tunnel. Grâce à nos automatisations bien pensées, vous pouvez simplifier vos tâches, économiser du temps et offrir une expérience personnalisée à chaque étape du parcours de votre audience.</p>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center gap-10 justify-center">
                        <div className=" bg-[#F2FD01] p-2 rounded-2xl border-8 border-black  shadow-2xl">
                            <Facebook  size={60} className="" />
                        </div>
                        <div className=" gap-4   flex flex-col justify-center items-center">
                            <h3 className=" 2xl:text-3xl text-lg font-semibold text-center uppercase">Facebook et Instagram Ads</h3>
                            <p className=" text-center  text-xs 2xl:text-sm font-light">Nous sommes des experts en publicités Facebook et Instagram, et nous savons comment tirer le meilleur parti de ces puissantes plateformes publicitaires. Que vous souhaitez accroître votre notoriété, générer des leads qualifiés ou augmenter vos ventes, nos services de publicités sur Facebook et Instagram peuvent vous aider à atteindre vos objectifs marketing.</p>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center gap-10 justify-center">
                        <div className=" bg-[#F2FD01] p-2 rounded-2xl border-8 border-black  shadow-2xl">
                            <FileChartColumnIncreasing  size={60} className="" />
                        </div>
                        <div className=" gap-4  flex flex-col justify-center items-center">
                            <h3 className=" 2xl:text-3xl text-lg  font-semibold text-center uppercase">Accompagnement</h3>
                            <p className=" text-center  text-xs 2xl:text-sm font-light">Notre  approche de l&apos;accompagnement se caractérise par une approche complète et personnalisée qui vise à vous soutenir à chaque étape de votre projet. Nous croyons en l&apos;importance de comprendre vos besoins spécifiques, de vous fournir des conseils d&apos;experts et de travailler en étroite collaboration avec vous pour atteindre vos objectifs.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* saction 6 */}
            <div className=" space-y-20 pb-10 bg-black">
                <div className="flex-col flex items-center ">
                    <div className="w-screen overflow-hidden">
                        <p className=" font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee ">Tunnel de vente</p>
                    </div>
                        <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase  container">Tunnel de vente</h2>
                </div>
                <div>
                    <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Image src={'/saction2/projectweb.png'} className=" hover:rotate-45 duration-700" width={500} height={500} alt="trafic genius"    title="trafic genius"/>
                        <div className=" flex flex-col justify-center gap-20">
                            <p className="  text-xs lg:text-base flex  gap-4 text-white "><CirclePlus  size={50} />Spécialisés en funnel building depuis plusieurs années, nous nous engageons à vous délivrer ce qu&apos;il y a de meilleur, au plus proche de la perfection.</p>
                            <p className="   text-xs lg:text-base flex  gap-4 text-white"><CirclePlus size={50} />Attirez l&apos;attention de vos visiteurs, transformez-les en clients et augmentez votre chiffre d&apos;affaires grâce à un tunnel de vente professionnel à haute rentabilité.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* saction 7 */}
            <div className="">
                <div className=" flex gap-28 flex-col justify-center items-center bg-black pb-20 relative">
                <div className="rounded-full-css bg-[#F2FD01] w-full rotate-180 h-16 bottom-0 absolute z-10 "></div>
                    <div className="flex-col flex items-center">
                        <div className="w-screen overflow-hidden">
                            <p className="font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">Imaginez votre projet sous son meilleur JOUR</p>
                        </div>
                            <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase  container">Imaginez votre projet sous son meilleur JOUR </h2>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-20 ">
                        {website.map((ele,index)=>(
                            <div key={index} className="relative">
                                <Link target="_blank" href={ele.url}><Image src={'/saction2/eye.gif'}  width={640} height={640} className=" absolute -top-4 border-2 border-[#F2FD01] cursor-pointer  -left-4 z-20 h-10 w-10 rounded-full" alt="trafic genius"    title="trafic genius" unoptimized/></Link>
                                <Image src={`/saction2/website/${ele.image}`} className="relative w-[318px] h-[300px] lg:h-[600px] object-cover  duration-[10000ms] border-4 border-[#F2FD01]  rounded-2xl object-top  hover:object-bottom	" width={318} height={600} alt={ele.title}    title={ele.title}/>
                                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black border-[#F2FD01]  rounded-b-2xl border-b-4 border-x-4">
                                    <Image src={'/TopHeader/logo.png'} className=" w-[150px] py-2" width={500} height={500} alt="trafic genius"    title="trafic genius"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* saction 8 */}
            <div className="bg-[#F2FD01]">
                <div className="flex container flex-col gap-20 pb-10  ">
                    <div className=" ">
                        <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-black  text-center uppercase  container">JETEZ UN COUP D&apos;ŒIL SUR UN DE NOS “REDESIGN“ EXPÉRIENCES, POUR VOIR CE QUE NOUS POUVONS FAIRE                </h2>
                    </div>
                    <div className=" gap-28 flex flex-col lg:flex-row justify-center items-center">
                        <div  className="relative w-[318px]">
                            <Image src={`/saction2/website-REDESIGN/old.png`} className="relative  w-[318px] h-[300px] lg:h-[600px] object-cover  duration-[10000ms] 	  rounded-3xl object-top  hover:object-bottom	" width={318} height={600} alt="trafic genius"    title="trafic genius"/>
                            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black rounded-b-3xl">
                                <Image src={'/TopHeader/logo.png'} className=" w-[150px]" width={500} height={500} alt="trafic genius"    title="trafic genius"/>
                            </div>
                        </div>
                        <Image src={'/saction2/arrow.gif'} className="  rotate-90 lg:rotate-0 w-[200px]" width={500} height={500} alt="trafic genius"    title="trafic genius" unoptimized/>
                        <div  className="relative w-[318px] blur-sm hover:blur-0 duration-1000">
                            <Image src={`/saction2/website-REDESIGN/saveurs-de-sprairies.png`} className="relative   w-[318px] h-[300px] lg:h-[600px] object-cover  duration-[10000ms] 	  rounded-3xl object-top  hover:object-bottom	" width={318} height={600} alt="trafic genius"    title="trafic genius"/>
                            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black rounded-b-3xl">
                                <Image src={'/TopHeader/logo.png'} className=" w-[150px]" width={500} height={500} alt="trafic genius"    title="trafic genius"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* saction 9 */}
            <div className="bg-[#F2FD01]">          
                <div className="flex flex-col gap-20 pb-10  container  ">
                    <div>
                        <div className="flex-col flex items-center">
                            <div className="w-screen overflow-hidden">
                                <p className="font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">SITES INTERNET Sur-mesure                        </p>
                            </div>
                        </div>
                    </div>
                    <div className=" container flex flex-col lg:flex-row items-center justify-around gap-8">
                        <div className=" relative w-[250px] h-[250px] min-w-[250px] min-h-[250px]">
                            <Image className=" relative w-full h-full z-10" src={'/saction2/logodark.png'} width={300} height={300} alt="trafic genius"    title="trafic genius"/>
                            <Image className=" absolute top-0 left-0 w-full h-full z-0 animate-move-smoke" src={'/saction2/smoke.png'} width={300} height={300} alt="trafic genius"    title="trafic genius"/>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-20">
                            <p className="   flex text-xs lg:text-base   gap-2 "><CirclePlus   className=" w-6 min-w-6 h-6"/>Faites de vos rêves une réalité avec un site web interactif au design créatif !</p>
                            <p className=" lg:pl-20     text-xs lg:text-base flex  gap-2"><CirclePlus  className=" w-6 min-w-6 h-6"/>Un site internet unique, personnalisé et avant-gardiste pour vous démarquer pour maximiser votre rentabilité.</p>
                            <p className="    flex text-xs lg:text-base  gap-2"><CirclePlus className=" w-6 min-w-6 h-6" />Nous nous engageons à ce que chacune des pages que nous créons soit parfaitement optimisée pour une expérience utilisateur optimale sur ordinateur et mobile.</p>
                    </div>
                    </div>
                </div>
            </div> 
            {/* saction 10 */}
            <div className="bg-[#F2FD01]  ">
                <div className="flex flex-col gap-20 pb-10 container  ">
                    <div className=" container">
                    <Image src={ '/saction2/laptop.png'} width={1920} height={1080} className=" object-cover " alt="trafic genius"    title="trafic genius"/>
                    </div>
                </div>
            </div>
            {/* saction strip */}
            <div className="bg-[#F2FD01] pb-10 relative ">
            <div className="rounded-full-css bg-black w-full rotate-180 h-20 bottom-0 absolute z-10 "></div>
                <div className=" flex flex-col gap-8 ">
                
                    <div className=" container flex flex-col gap-10 items-center justify-center ">
                        <div className=" text-center text-black">
                            <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-black  text-center uppercase  container">
                                Des solutions spécialement conçues pour vous!
                            </h2>
                            <p className="  font-light lg:text-xl">Nous mettons tout en œuvre pour vous démarquer de vos concurrents et booster les résultats de votre entreprise à leur plein potentiel.                </p>
                        </div>
                        <Link href={'/appel'} target="_blank" >
                                <button className="cssbuttons-io-button ">
                                    Lancez votre projet !
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
                    <Image src={'/saction2/Striiiiiiiipe.png'} width={1920} height={1080} className=" bg-cover w-full   " alt="trafic genius"    title="trafic genius"/>
                
                    
                </div>
            </div>
            <Expert/>
            {/* saction 11 */}
            <div className="bg-gradient-to-b from-[#000]  via-[#000] to-[#000]">
                <div className=" container  flex gap-20 flex-col justify-center items-center  pb-10">
                    <div className="flex-col flex items-center gap-2 justify-center">
                        <div className="w-screen overflow-hidden">
                            <p className=" font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">trafic genius trafic genius , UNE ÉQUIPE DE PROFESSIONNELS À VOS CÔTÉS</p>
                        </div>
                            <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase  container">trafic genius, UNE ÉQUIPE DE PROFESSIONNELLES À  <span className="relative text-primary"> VOS CÔTÉS </span></h2>
                    </div>
                    
                    <div className="  lg:w-[70%]  font-light text-white text-center lg:text-2xl border-[#F2FD01] border-4 p-4 rounded-3xl">
                        <p>
                            Nous sommes la meilleure agence marketing francophone spécialisé dans l&apos;acquisition de Trafic de qualité, avec plus de 3 millions € dépensés en publicité Facebook, et plus de 5000 Leads qualifiés générés en Cold Calling, nous mettrons à votre disposition, une équipe essentiellement composée d&apos;experts selon votre besoin de croissance. <br /><br />

                            De l&apos;imagination à la réalisation de votre projet, nous vous aidons à obtenir plus de prospects afin de réaliser plus de vente, dans un seul et unique objectif, celui de faire plus de profits et vous positionner comme une figure d&apos;autorité respectée sur votre marché.                
                        </p>
                    </div>

                    
                </div>
            </div>
            {/* saction 12 */}
            <div className="bg-black ">          
                <div className="  pb-10  flex flex-col gap-20">
                    <div className="   ">
                        <div className="  w-screen overflow-hidden">
                            <p className=" font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">trafic genius trafic genius</p>
                        </div>
                        <div className="container  relative">
                            <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase  container">Ce qui nous rend unique  aux yeux de nos clients</h2>

                        </div>
                    </div>
                    <div className="z-20">
                        <FetchText/>
                    </div>
                </div>
            </div> 
        </div>
    )
}