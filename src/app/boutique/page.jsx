
import { BadgeCheck, BadgeInfo } from "lucide-react";
import Image from "next/image"

export const metadata = {
    title: "TRAFIC GENIUS | Votre clé pour réussir votre boutique en ligne",
    description: "Découvrez comment créer une boutique en ligne rentable avec TRAFIC GENIUS . Suivez des stratégies étape par étape pour lancer et développer votre entreprise e-commerce. Commencez dès aujourd'hui et libérez le potentiel de l'entrepreneuriat en ligne !",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`,),
    keywords: ["création de boutique en ligne, entrepreneuriat en ligne, booster votre e-commerce, stratégies de vente en ligne, réussir son e-commerce, conseils pour boutique en ligne, lancer une boutique e-commerce"],
    alternates: {
      canonical: "/boutique",
  
      
    },
    openGraph: {
      title: "TRAFIC GENIUS | Votre clé pour réussir votre boutique en ligne",
      description: "BOOSTEZ VOS VENTES DÈS DEMAIN EN TRANSFORMANT VOTRE SYSTÈME DE VENTE EN AIMANT À CLIENTS !",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "TRAFIC GENIUS | Votre clé pour réussir votre boutique en ligne",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: `TRAFIC GENIUS`,
        }
      ],
      type: "website",
     
    },
  };

export default function Boutique(){
    const bonuses = [
        {
            title: "BONUS OFFERT #1 : Fiche produit clés en main",
            description: [
                "Mon objectif est de vous permettre d’avancer le plus vite possible sans vous prendre la tête avec la technique.",
                "C’est pour cette raison que j’ai décidé de vous offrir une fiche produit clé en main optimisée pour transformer le plus efficacement et rapidement possible vos visiteurs en clients.",
                "C’est les mêmes fiches produit que nos clients d’élite utilisent et qui leur ont permis de générer des centaines de milliers d’euros de vente."
            ],
            value: "197€",
            included: true
        },
        {
            title: "BONUS OFFERT #2 : Recherche de produit Gagnant",
            description: [
                "Découvrez comment utiliser l'outil parfait pour trouver des produits gagnants en e-commerce.",
                "Maximisez votre chiffre d'affaires en trouvant les produits à fort potentiel.",
                "Ne manquez pas cette occasion de propulser votre entreprise vers le succès !"
            ],
            value: "297€",
            included: true
        },
        {
            title: "BONUS OFFERT #3 : Formation à l'incroyable outil VITALS",
            description: [
                "Cet outil va vous permettre de faire des merveilles.",
                "Voulez-vous savoir comment augmenter votre chiffre d'affaires par 3 ?",
                "Découvrez cet outil magique qui fait des merveilles et facilite grandement le développement de votre marque e-commerce."
            ],
            value: "97€",
            included: true
        },
        {
            title: "BONUS OFFERT #4 : Formation à la prise en main de votre boutique e-commerce",
            description: [
                "Pour bien conduire votre véhicule de vente et éviter tout accident dans votre projet.",
                "Nous vous formons à la gestion de votre boutique e-commerce afin que vous soyez totalement indépendant dans sa gestion et vous permettre de développer votre activité et votre projet en toute sérénité."
            ],
            value: "197€",
            included: true
        },
        {
            title: "BONUS OFFERT #5 : Formation E-COMMERCE",
            description: [
                "Embarquez dans votre navire e-commerce avec confiance et tranquillité d'esprit.",
                "Nous vous offrons une formation gratuite pour connaître les indispensables de l'e-commerce.",
                "Prenez le contrôle de votre projet, soyez indépendant et propulsez votre projet en avant sans crainte du naufrage."
            ],
            value: "497€",
            included: true
        },
        {
            title: "BONUS OFFERT #6 : Une session stratégique personnalisée",
            description: [
                "Je sais que beaucoup d'entreprises qui se lancent dans le web souffrent d'un manque d'accompagnement.",
                "C’est pour cette raison que j’ai décidé de programmer une session stratégique personnalisée 1 semaine après la remise de votre boutique pour faire le bilan et vous aider à développer plus vite votre activité.",
                "Grâce à cette session, le taux de réussite de nos clients a atteint les 90 %."
            ],
            value: "197€",
            included: true
        },
        {
            title: "BONUS OFFERT #7 : E-BOOK Stratégie E-Commerce",
            description: [
                "Durant ces dernières années, j’ai développé une synthèse et une ligne conductrice afin de ne jamais oublier qu'est-ce qui est le plus important en e-commerce.",
                "Pour éviter la dispersion et être sûr de consacrer votre temps et énergie de la meilleure des manières, ce E-book sera votre garde-fou et optimisera chacune de vos actions.",
                "C'est grâce à cela que j'ai généré des milliers de ventes en e-commerce et atteint un chiffre d'affaire à 6 chiffres."
            ],
            value: "197€",
            included: true
        },
        {
            title: "BONUS OFFERT #8 : Accès à la communauté des entrepreneurs d’élite sur Facebook",
            description: [
                "Je sais que beaucoup d’entrepreneurs qui se lancent dans le web souffrent de solitude.",
                "C’est pour cette raison que j’ai décidé de créer un groupe Facebook privé pour que vous puissiez rencontrer d’autres entrepreneurs ambitieux et motivés."
            ],
            value: "197€",
            included: true
        }
    ];
    
    const boutique=[
        {id:2,image:"/boutique/website/1.png"},
        {id:3,image:"/boutique/website/2.png"},
        {id:1,image:"/boutique/website/3.png"},
       
        {id:4,image:"/boutique/website/4.png"},
    ]
    const strip=[
        {id:1,image:"/boutique/strip/1.png"},
        {id:2,image:"/boutique/strip/2.png"},
        {id:3,image:"/boutique/strip/3.png"},
        {id:3,image:"/boutique/strip/4.png"},
       
       
    ]
    const steps = [
        {
            title: "Étape 1: Configuration d'une Boutique professionnelle qui fera tomber toutes les barrières techniques.",
            normalPrice: "299€",
            todayPrice: "29€",
            description: [
                "Pouvoir vendre en France et à l'international, cela vous permettra d'explorer tout le potentiel économique de votre marché.",
                "Accepter des paiements en ligne sécurisée et cryptée dans tous vos marchés de vente, vous serez reconnu comme un tiers de confiance et plus personne n'hésitera à acheter chez vous.",
                "Des pages de paiement optimisées pour augmenter vos taux de conversion.",
                "Gestion de commande et méthodes de livraison pour pouvoir délivrer vos clients de la manière la plus simple possible. Diminue de 96% vos temps de gestion pour vous concentrer sur votre cœur d'activité.",
                "Un nom de domaine et un e-mail professionnel afin d'augmenter la confiance de vos clients.",
                "Répondre à toutes les exigences légales pour vendre en toute sérénité."
            ]
        },
        {
            title: "Étape 2: Création d'un Univers de Marque pour transformer de parfaits inconnus en clients",
            normalPrice: "299€",
            todayPrice: "29€",
            description: [
                "Déterminer un positionnement unique et magnétique qui vous permettra de vous démarquer de TOUS vos concurrents.",
                "Méthode secrète pour identifier les désirs et les besoins profonds de votre marché et proposer la solution parfaite pour y répondre (grâce à cette méthode vous allez décupler vos chances de ventes).",
                "Gagner la confiance de vos prospects rapidement et les transformer en client (très peu de personnes utilisent ces méthodes).",
                "Les erreurs de positionnement à ne pas faire pour vendre des produits et comment devenir la référence de votre marché.",
                "Intégration des leviers psychologiques dans votre boutique pour un maximum de ventes.",
                "La méthode infaillible qui vous permettra d’avoir une réputation en or dans votre marché et ainsi d'attirer des clients GRATUITEMENT."
            ]
        },
        {
            title: "Étape 3: Installation des applications indispensables pour multiplier vos ventes par 10 !",
            normalPrice: "399€",
            todayPrice: "39€",
            description: [
                "Les outils les plus avancés pour BOOSTER vos taux de conversion et vos résultats.",
                "Vous permettre de créer des offres pour lesquelles vos clients seront prêts à acheter immédiatement.",
                "Des pages produits qui font 90% du travail à votre place et vous libère du temps pour vous focaliser sur ce que vous aimez faire.",
                "Des outils pour attirer des centaines (voire des milliers) de nouveaux visiteurs chaque jour de façon consistante et automatique.",
                "Le secret de l'urgence pour inciter vos clients à effectuer leur achat aujourd'hui et non demain.",
                "La méthode utilisée par les géants du web (comme Google) pour prendre les bonnes décisions à chaque fois (la pire chose que vous puissiez faire, c’est arrêter une action rentable sans le savoir)."
            ]
        }
    ];
    
    return(
        <div className="bg-black flex flex-col items-center justify-center pt-20">
            <div className="  container flex flex-col gap-8 items-center ">
                {/* saction 2 */}
                <h1 className=" text-2xl lg:text-5xl font-bold text-center text-[#EFFF00] ">Obtenez une Boutique e-commerce clé en main complète pour seulement 97€ (au lieu de 997€)</h1>
                <p className=" text-xl lg:text-3xl font-normal text-center text-white ">Grâce à cette offre, vous allez pouvoir <span className=" underline-offset-4 underline  font-bold">obtenir votre boutique clé en main en moins de 10 jours afin d&lsquo;amener votre business au niveau supérieur...</span></p>
                <h2 className=" text-xl lg:text-3xl font-normal  text-white ">... sans devoir vous casser la tête avec la technique et chercher des tonnes d&lsquo;informations et solutions à vos blocages.</h2>
                <p className=" text-sm lg:text-lg font-normal  text-white ">Si aujourd&lsquo;hui vous voulez mettre le pied à l&lsquo;étrier pour enfin pouvoir vendre vos produits sur une réelle boutique e-commerce, augmenter votre chiffre d&lsquo;affaires ainsi que vos profits et booster votre business en ligne...</p>
                <h2 className=" text-base lg:text-2xl font-normal  text-white  ">...sans devoir subir les fardeaux de la technique, des blocages à répétition, des pertes d&lsquo;argent à investir dans des outils qui ne vous ont apporté que tracas jusqu&lsquo;ici, la dispersion jusqu&lsquo;à vous perdre sur le chemin de l&lsquo;entrepreneuriat et ne plus savoir où est passé votre motivation...</h2>
                <p className=" text-sm lg:text-lg font-normal  text-white text-left w-full">...pourtant vous savez que vous aviez tout pour réussir.</p>
                <h2 className=" text-sm lg:text-lg font-normal  text-white ">C&lsquo;est pour éviter tout ça que je vous propose aujourd&lsquo;hui d&lsquo;éliminer tous ses obstacles en vous donnant la possibilité d&lsquo;obtenir la même boutique que nos clients utilisent et qui leur permet de réaliser <strong className="text-[#EFFF00]">des centaines de ventes chaque jour de façon constante et évolutive.</strong></h2>
                <span className="text-sm lg:text-lg font-normal  text-white text-left w-full ">En voici un rapide aperçu :</span>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items- justify-center">
                    {
                        boutique.map((ele,index)=>(
                        <div key={index} className="relative">
                            <Image src={ele.image} className="relative  w-[318px] h-[300px] lg:h-[600px] object-cover  duration-[10000ms] 	 object-top  hover:object-bottom	" width={318} height={600} alt="trafic genus" title="trafic genus"/>
                          
                        </div>
                        ))
                    }
                </div>
                {/* saction 2 */}
                <span className="text-sm lg:text-lg font-normal  text-white text-left w-full ">Vous vous posez sûrement la question suivante :</span>
                <h2 className=" text-sm lg:text-lg font-normal  text-white text-left w-full">&quot;Pourquoi est-ce que je vous offre une boutique e-commerce clé en main pour seulement 97€ ?&quot;</h2>
                <span className="text-lg font-normal  text-white text-left w-full ">Il y a deux raisons :</span>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="border-2 p-4 rounded-lg flex flex-col gap-4" >
                        <h2 className="text-xl lg:text-3xl font-medium  text-[#EFFF00]">Raison #1 :</h2>
                        <p className="  text-white">Ces boutiques e-commerce ont déjà changé ma vie et celle des entrepreneurs que j&lsquo;ai accompagnés, et j&lsquo;aimerais les partager avec plus de personnes, car je sais que ça va avoir un grand impact positif dans votre vie.</p>
                    </div>
                    <div className="border-2 p-4 rounded-lg flex flex-col gap-4">
                        <h2 className="text-xl lg:text-3xl font-medium  text-[#EFFF00]">Raison #2 :</h2>
                        <p className="  text-white">J&apos;espère vous apporter un maximum de valeur pour que vous envisagiez à l&apos;avenir de rejoindre mes autres programmes d&apos;accompagnement e-commerce. Je crois fermement que l&apos;apport de valeur est le moyen le plus efficace pour construire des relations &quot;gagnant-gagnant&quot; sur le long terme.</p>
                    </div>
                </div>
                <span className="text-lg font-normal  text-white text-left w-full ">Je dois avouer que je suis toujours très content de recevoir les retours des participants de nos formations :</span>
                <div className=" flex flex-col justify-center  gap-20">
                    <Image  src={"/boutique/msg1.png"} width={400} height={300} className="  " alt="trafic genus" title="trafic genus"/>
                    <Image  src={"/boutique/msg2.png"} width={400} height={400} className="" alt="trafic genus" title="trafic genus"/>

                </div>
                {/* saction 3 */}
                <h2 className=" text-xl lg:text-4xl font-bold  text-[#EFFF00] ">Êtes-vous dans l&apos;une de ces situations ?</h2>
                <ul className="list-none space-y-4 text-lg font-medium  text-white">
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous ne savez pas pourquoi vous n&lsquo;arrivez pas à vendre vos produits ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous êtes constamment bloqué à cause de problème technique pour réaliser votre projet ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous avez essayé maintes et maintes fois la création d&lsquo;un site mais cela n&lsquo;a jamais abouti ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous avez un site mais il n&lsquo;est pas du tout optimisé pour la vente en ligne ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous avez du mal à faire décoller votre activité malgré tous les efforts fournis ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous avez l&apos;impression de tourner en rond sans jamais avancer ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous vous sentez perdu par rapport à toutes les possibilités qu&apos;on vous propose tout le temps ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous stagnez dans votre business et vous n&apos;arrivez pas à générer plus de ventes ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous vous sentez épuisé par la charge de travail qu&apos;il faut faire tous les jours sans pouvoir savourer les résultats de votre dur labeur ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Votre chiffre d&lsquo;affaires n&apos;est pas stable et vous n&lsquo;êtes pas rentable ?</li>
                    <li className="flex gap-1  text-xs lg:text-base "><BadgeInfo size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Vous vivez constamment dans la peur de mettre la clef sous la porte ?</li>
                </ul>
                <span className="lg:text-lg font-normal  text-white text-left w-full ">Si vous êtes dans l&apos;une de ces situations, sachez que je comprend ce que vous ressentez.</span>
                <span className="lg:text-lg font-normal  text-white text-left w-full ">Car je suis passé par là !</span>

                {/* saction profile */}

                <h2 className=" text-xl lg:text-4xl font-bold  text-[#EFFF00] ">Je sais ce que ça fait de tout faire pour faire décoller son business sans jamais réussir</h2>
                <div className=" flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
                    <Image  src={"/boutique/alfa.png"} width={400} height={400} className="  " alt="trafic genus" title="trafic genus"/> 

                    <p  className=" text-white text-sm lg:text-lg"> 
                        Bonjour, je m&lsquo;appelle Alvarez Mouko, et je suis spécialisé en gestion de projet et en développement d&lsquo;affaires depuis plusieurs années. <br /><br />

                        Au début de ma carrière, j&apos;ai été attiré par la gestion de projet car je voulais voir l&lsquo;impact direct de mon travail et avoir une influence positive sur les organisations. <br />  <br /> 
                        Je souhaitais optimiser les processus, encadrer des équipes motivées, et, surtout, générer une réelle valeur ajoutée.
                    </p>
                </div>
                <p  className=" text-white text-sm lg:text-lg"> 
                    Mais le chemin n&lsquo;a pas été sans embûches… Je me suis retrouvé à travailler toujours plus, sans voir les résultats escomptés. <br />  <br /> 

                    Je devenais l&apos;esclave des projets. <br />  <br /> 

                    Comment en suis-je arrivé là ? <br />  <br /> 

                    La réponse est simple : <br />  <br /> 

                    En essayant d&lsquo;appliquer les solutions génériques que l&lsquo;on trouve un peu partout : <br />  <br /> 

                    ❌ M&lsquo;embarquer sur des outils et méthodes de gestion qui n&lsquo;étaient pas adaptés à la réalité du projet <br />  <br /> 

                    ❌ Passer mes journées à résoudre des problématiques techniques au lieu de me concentrer sur la stratégie <br />  <br /> 

                    ❌ Investir dans des solutions qui promettaient des gains mais n&lsquo;apportaient pas de résultats concrets <br />  <br /> 

                    ❌ Essayer de mettre en place des stratégies sans réelle vision à long terme <br />  <br /> 

                    ❌ Me perdre dans un océan d&apos;informations sans comprendre comment les utiliser efficacement <br />  <br /> 

                    Finalement, après beaucoup d&apos;efforts et de remises en question, j&apos;ai réussi à concevoir et à mettre en place des projets qui ont atteint leurs objectifs et généré de véritables résultats. <br />  <br /> 

                    J&lsquo;étais plus déterminé que jamais ! <br /> 

                    Aujourd&lsquo;hui, mon but est de créer des stratégies de développement qui aident les entreprises à prospérer, tout en offrant une gestion de projet adaptée aux besoins de chaque organisation. <br />  <br /> 

                    J&apos;ai hâte de continuer à faire évoluer mes compétences et de partager mes connaissances pour aider d&apos;autres projets à réussir. <br /> <br />  
                </p>
               

                {/* saction 4 */}
                <h2 className="text-xl lg:text-4xl font-bold  text-[#EFFF00] text-center ">Rien... je n&lsquo;avais toujours pas vendu 1 seul produit.</h2>
                <p className=" text-white text-sm lg:text-lg">
                    Je dois vous avouer qu&apos;à ce moment-là, j&apos;ai failli abandonner. <br /><br />

                    Je commençais à me dire que “peut-être que je n&lsquo;y arriverais jamais”<br /><br />

                    Mais je voyais bien que les autres y arrivaient.<br /><br />

                    Comment faisait-il pour construire des boutiques aussi professionnelles ? Et certains disaient le faire en quelques jours.<br /><br />

                    Ayant cette question en tête je prends la décision de ne pas lâcher et d&apos;apprendre à faire les choses comme eux.<br /><br />

                    C&lsquo;est là que j&lsquo;ai commencé à prendre la bonne piste.<br /><br />

                    J&lsquo;ai commencé à me former, tester et à côtoyer des entrepreneurs à succès.<br /><br />

                    Je ne parle pas de petits entrepreneurs qui gagnent quelques centaines ou milliers d&apos;euros par mois, mais plutôt des gens qui ont bâti des business qui génèrent des millions.<br /><br />

                    Petit à petit mes compétences se développent et mes ventes augmentaient.<br /><br />

                    Il y avait un monde entre ma première boutique et ma nouvelle boutique e-commerce, pas uniquement sur l&lsquo;aspect esthétique, mais surtout sur l&lsquo;aspect de la conversion...<br /><br />
                </p>

                {/* saction 5 */}

                <h2 className="text-xl lg:text-4xl font-bold  text-[#EFFF00] text-center">Plus j&apos;apprenais à concevoir des boutiques qui vendent, plus mes ventes augmentaient…</h2>
                <p className=" text-white text-sm lg:text-lg">
                    Cette expérience m&apos;a permis de comprendre que le secret c&lsquo;est de concevoir une boutique orientée conversion et non uniquement proposition de produit. <br /><br />

                    Certes, il faut avoir de bonne campagne publicitaire et de bon produit, mais il faut avant tout apprendre comment transformer un total inconnu en client.<br /><br />

                    Sans boutiques e-commerce performante, vous ne pourrez pas avoir des résultats constants et évolutifs.<br /><br />

                    Alors, depuis, je n&apos;ai pas cessé d&apos;apprendre à concevoir des boutique orienté conversion et surtout à tout expérimenter.<br /><br />

                    En appliquant les stratégies de création que j&apos;ai appris, mon business génère aujourd&apos;hui un revenu annuel à 7 chiffres.<br /><br />

                    Et on est bien parti pour atteindre les 8 chiffres l&apos;année prochaine.<br /><br />

                    Au-delà d&apos;aspect financier, ce qui est génial quand vous posséderez une boutique qui vend, c&apos;est que vous allez pouvoir enfin reprendre le contrôle de votre business et vous pourrez vous projeter dans l&apos;avenir avec sérénité.<br /><br />
                </p>

                {/* saction 6 */}
                <div className=" flex flex-col items-center justify-center gap-6 rounded-lg bg-[#4F4F4F] lg:w-[70%] p-4">
                    <h2 className=" text-xl lg:text-4xl font-bold  text-[#EFFF00] ">Imaginez juste un instant…</h2>
                    <ul className="list-none space-y-4 text-lg font-medium  text-white">
                        <li className="flex gap-1  text-xs lg:text-sm "><BadgeCheck size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Avoir une boutique e-commerce prospère qui vous permet de mettre en valeur vos produits et de les vendre auprès de vos clients sans que vous n&lsquo;ayez à sacrifier votre santé ou votre vie personnelle.</li>
                        <li className="flex gap-1  text-xs lg:text-sm "><BadgeCheck size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Avoir chaque jour des centaines de nouvelles ventes en ligne.</li>
                        <li className="flex gap-1  text-xs lg:text-sm "><BadgeCheck size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Impacter positivement la vie de centaines de clients chaque jour grâce à vos produits.</li>
                        <li className="flex gap-1  text-xs lg:text-sm "><BadgeCheck size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />Être reconnu comme la référence de votre marché...</li>
                    </ul>
                </div>

                  {/* saction 7 */}
                  <div className=" flex flex-col items-center justify-center gap-6 rounded-lg  p-4">
                    <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">J&lsquo;ai ensuite conçu des boutiques à plusieurs de mes clients qui ont également eu des résultats incroyables</h2>
                    <p className=" text-white text-sm lg:text-lg">
                        Durant ces dernières années, j&apos;ai conçu des centaines de boutique en ligne pour aider les entrepreneurs dans leurs activités et les amener à générer plus de ventes en ligne. <br /><br />

                        Et surtout, j&apos;ai eu l&apos;opportunité de travailler sur des dizaines de marchés différents.     
                    </p>
                    <span className="lg:text-lg font-normal  text-white text-left w-full underline underline-offset-4">Cela inclut :</span>
                    <p className=" text-white text-sm lg:text-lg">
                        Le textile, la joaillerie, les cosmétiques, les accessoires, l&lsquo;automobile, les appareils électroménagers, le fitness, les jouets, les biens de maison, le bricolage, le jardinage, l&lsquo;hygiène, le rangement, les instruments de musique, la pêche, les produits pour animaux, etc.
                    </p>
                    <h3 className="text-[#EFFF00] w-full text-sm lg:text-lg">Cela m&apos;a permis d&apos;avoir une vision très claire sur ce qui marche et ce qui ne marche pas.</h3>
                    <p className=" text-white text-sm lg:text-lg w-full">J&lsquo;ai permis à mes clients de profiter de cette expérience pour accélérer la croissance de leurs business et obtenir des résultats exceptionnels.</p>
                </div>

                {/* saction 8 */}

                <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">La mauvaise nouvelle c&lsquo;est que cette offre est très limitée...</h2>
                <p className=" text-white text-sm lg:text-lg">
                    Vous comprenez qu&lsquo;à ce prix la beaucoup de monde vont vouloir obtenir leur boutique e-commerce, mais malheureusement, je n&lsquo;ai pas la capacité de produire des boutique e-commerce en ilimité pour tout le monde. <br /><br />

                    Cette offre est limitée à la création de 10 boutiques e-commerces, que je ferais de A à Z pour vous.<br /><br />

                    Premier arrivé, premier servi...  <br /><br /> 
                </p>
                
                {/* saction 8 */}

                <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">Et si je vous créais votre boutique pour vous aider à vendre des centaines de produits chaque jour...</h2>
                <h3 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">...en moins de 10 jours ?</h3>
                <p className=" text-white text-sm lg:text-lg w-full">
                    Je vais créer votre boutique e-commerce qui vous permettra de vendre des produits de manière constante et évolutive... <br /><br />

                    ...et ce même si vous n&lsquo;avez aucune compétence technique et que vous n&lsquo;avais jamais été présent sur le web.<br /><br />

                    Je suis heureux de vous inviter à…
                </p>

                {/* saction 9 */}
                <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">Commander votre Boutique Clé en Main !</h2>
                <h3 className=" text-base lg:text-2xl   text-center text-[#EFFF00] ">En moins de 10 Jours je Crée Votre Boutique clé en main pour vous permettre de vendre des centaines de produits chaque jour.</h3>
                <Image src={"/boutique/webdesgne.png"} height={500} width={500} className=""/>
                <p className=" text-white text-sm lg:text-lg">
                    La boutique que vous êtes sur le point de commander est le résultat de <span className=" font-bold text-[#EFFF00]"> plusieurs années de recherches et de tests sur des dizaines de business dans des dizaines de thématiques différentes. </span><br /><br />

                    Et des centaines de milliers d&apos;euros investis en <span className=" font-bold text-[#EFFF00]">formations, coaching, séminaires et publicité.</span> <br /><br />

                    Cette boutique est drastiquement différente de tout ce que vous avez pu voir ou avoir auparavant, parce que c&apos;est <span className=" font-bold text-[#EFFF00]"> une boutique orientée conversion qui vous permettra de transformer de parfait inconnus en clients.</span><br /><br />

                    Je vais créer votre <span className=" font-bold text-[#EFFF00]">boutique clé en main en moins de 10 jours pour vous aider à commercialiser le plus rapidement possible vos produits.</span> <br /><br />

                    Je vous donne également tous les outils dont vous aurez besoin clé en main ( <span className=" font-bold text-[#EFFF00]">applications, structurent des collections, cas pratique et exemples... etc.</span>)<br /><br />

                    Le but est de vous aider à agir pour commencer à vendre à de nouveaux clients rapidement en vous mettant à disposition votre boutique clé en main configurée et optimisée, et en vous formant <span className=" font-bold text-[#EFFF00]">GRATUITEMENT</span>  pour savoir comment la gérer.<br /><br />
                </p>

                 {/* saction 10 */}
                <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">À qui s&lsquo;adresse cette boutique ?</h2>                
                <p className=" text-white text-sm lg:text-lg">
                    Cette boutique s&apos;adresse aux <span className=" font-bold text-[#EFFF00]">entrepreneurs qui souhaitent avoir leur boutique en ligne pour vendre leur produit </span> sans avoir besoin de se former durant des mois à la conception de site web.<br /><br />

                    Que vous ayez une boutique physique ou non...<br /><br />

                    Vous allez pouvoir recevoir votre boutique et commencer à <span className=" font-bold text-[#EFFF00]">effectuer des centaines de ventes par jour</span> sans sacrifier votre santé et votre vie personnelle et/ou familiale.<br /><br />

                    Que vous soyez déjà présent en ligne ou non, seul à bord de votre entreprise ou une entreprise d&lsquo;une dizaine de personnes cette boutique est faite pour vous.<br /><br />

                    Elle s&apos;adresse aux entrepreneurs qui souhaitent <span className=" font-bold text-[#EFFF00]">développer leurs business en ligne rapidement sans prendre de risques</span>  en s&apos;appuyant sur une boutique e-commerce qui a déjà fait ses preuves.    <br /><br />
                </p>

                {/* saction 11 */}
                <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">Voici ce que vous allez recevoir en commandant votre &quot;Boutique Clé en Main&quot; Aujourd&apos;hui</h2>
                <p className=" text-white text-sm lg:text-lg">
                    Nous allons prendre rendez-vous en ligne afin que nous puissions échanger sur votre projet et que vous puissiez me transmettre toutes les informations nécessaires à la conception de votre boutique en ligne. <br /><br />

                    Voici un descriptif des possibilités que vous allez avoir avec votre boutique en ligne :
                </p>
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                    {steps.map((step, index) => (
                        <div key={index} className="p-6 bg-[#4f4f4f] rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold text-[#EFFF00]">{step.title}</h2>
                            <p className="mt-4 text-base text-white">Tarif normal : <span className="line-through text-red-500">{step.normalPrice}</span></p>
                            <p className="text-lg font-bold bg-[#EFFF00] w-fit px-2 py-1">Aujourd&lsquo;hui : {step.todayPrice}</p>
                            <ul className="mt-6 list-none list-inside space-y-3">
                                {step.description.map((desc, i) => (
                                    <li key={i} className="text-white text-sm flex gap-1"><BadgeCheck size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* saction 12 */}

      
                <div className=" text-white py-20 flex flex-col gap-10 items-center justify-center">
                    <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">Attendez !</h2>
                    <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">Ce n&lsquo;est pas tout...</h2>
                    <p className=" text-white text-sm lg:text-xl">
                        En commandant votre boutique aujourd&apos;hui, vous allez aussi recevoir <span className=" underline underline-offset-4">GRATUITEMENT</span>  8 Bonus d&apos;une valeur de 1876€ :
                    </p>
                    <div className="container mx-auto px-4 gap-10 grid grid-cols-1 lg:grid-cols-2">
                        {bonuses.map((bonus, index) => (
                            <div key={index} className="p-4 bg-[#4f4f4f] rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-[#EFFF00] ">{bonus.title}</h3>
                                <ul className="mt-4 list-disc list-inside space-y-2 text-white pb-6">
                                    {bonus.description.map((desc, i) => (
                                        <li key={i}  className="text-white text-sm flex gap-1"><BadgeCheck size={20} className=" max-w-10 min-w-10 stroke-[#EFFF00] stroke-2 " />{desc}</li>
                                    ))}
                                </ul>
                                <p className="text-base font-bold bg-[#EFFF00] w-fit px-1 py-1 text-black "> Inclus gratuitement (Valeur {bonus.value})</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* saction 13 */}
                 <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">Commandez maintenant votre Boutique clé en main</h2>                
                    <p className=" text-white text-sm lg:text-lg w-full">
                        Nos clients investissent entre 3000 et 9000 euros pour qu’on crée leur boutique en ligne sur mesure. <br /><br />

                        Mais notre objectif est de rendre cette boutique accessible pour vous.<br /><br />

                        C’est pour cette raison que votre investissement, pour commander votre boutique n’est pas de 9000€<br /><br />

                        Ni même de 3000€…<br /><br />

                        Ni même 997         <br /><br />      
                    </p>

                    {/* saction 14 */}

                    <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">
                        Le tarif normal de cette boutique est de <span className=" text-red-600 line-through">97 €</span>  <br /><br />

                        Mais, pendant quelques heures, vous pouvez commander votre boutique et recevoir tous les bonus pour seulement...   
                    </h2>
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-4 items- justify-center">
                        {
                            strip.map((ele,index)=>(
                                <Image key={index} src={ele.image} className="  w-full  " width={300} height={300} alt={'trafic genus'}    title={'trafic genus'}/>
                            ))
                        }
                    </div>

                    {/* saction 15 */}
                    <h2 className=" text-xl lg:text-4xl font-bold  text-center text-[#EFFF00] ">
                    Cette Offre va bientôt être CLÔTURÉE ! <br /><br />

                        <span className=" text-red-500">Tarif normal : <span className=" line-through">97 €</span> </span> <br /><br />


                        Aujourd&lsquo;hui seulement <span className=" text-green-500 underline">0€</span>   <br /><br />          
                    </h2>
                    <Image src={"/boutique/arrowDown.png"} width={500} height={250}/>
                  
                    <button className="cssbuttons-io-button ">
                        CLIQUEZ ICI POUR COMMANDER VOTRE BOUTIQUE                            
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
                    <Image src={"/boutique/payment.png"} width={300} height={150}/>
                    <div className=" ">
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-t-4 border-x-4  border-[#000] shadow-2xl py-10 border-b-4 rounded-t-3xl p-6 " open>
                            <summary className="lg:text-xl  font-bold leading-6 text-[#000] cursor-pointer  select-none">
                            Pour qui est fait cet boutique ?
                            </summary>
                            <div className="mt-3 text-sm    leading-6 text-black ">
                            <p>Cette boutique clé en main est destinée aux personnes qui souhaitent lancer et développer leur activité grâce à la vente de produits en ligne. <br />

                                Que vous soyez dans n&lsquo;importe quel marché ou niche.<br />

                                Que vous ayez des compétences techniques ou non.<br /><br />

                                Ce programme s&lsquo;adresse autant aux solopreneur qu&lsquo;aux entrepreneurs avec une équipe.
                            </p>
                            </div>
                        </details>
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-x-4  border-[#000] shadow-2xl py-10 border-b-4  p-6 " >
                            <summary className="lg:text-xl  font-bold leading-6 text-[#000] cursor-pointer  select-none">
                                Est-ce que ma boutique m&lsquo;appartient une fois la livraison terminée ?
                            </summary>
                            <div className="mt-3 text-sm    leading-6 text-black ">
                            <p>
                                Oui, mais en commandant votre boutique aujourd’hui, vous bénéficiez d’une réduction de 900 € (90%) sur le prix de la boutique. <br /><br />

                                (Cette offre ne restera disponible que pendant quelques jours)
                            </p>
                            </div>
                        </details>
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-b-4 border-x-4 border-[#000] shadow-2xl rounded-b-3xl   p-6 " >
                            <summary className="lg:text-xl  font-bold leading-6 text-[#000] cursor-pointer  select-none">
                                Puis commander en tout temps ma boutique ?
                            </summary>
                            <div className="mt-3 text-sm    leading-6 text-black ">
                            <p>
                                Suite à la commande de votre boutique, nous allons programmer un appel afin que nous puissions échanger sur votre projet et récupérer toutes les informations nécessaires à la conception de votre boutique e-commerce.

                                Une fois la conception de votre boutique terminée, nous vous contacterons afin de vous remettre vos accès et vous former GRATUITEMENT à la prise en main de votre boutique !
                            </p>
                            </div>
                        </details>
                        
                    </div>
                  
    


                

            </div>
        </div>
    )
}