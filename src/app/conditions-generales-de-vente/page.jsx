import { Poppins } from "next/font/google";

const poppins = Poppins ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });
export const generateMetadata = {
    title: "TRAFIC GENIUS | Conditions générales de vente",
    alternates: {
      canonical: "/conditions-generales-de-vente",
    },
    openGraph: {
      title: "TRAFIC GENIUS | Conditions générales de vente",
      description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/conditions-generales-de-vente`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "TRAFIC GENIUS | Conditions générales de vente",
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
export default function ConditionsGeneralesDeVente(){
    return(
        <div className={`${poppins.className}  container  px-4 py-8 bg-black`}>
        <h2 className="text-3xl font-bold text-center text-[#EFFF00] mb-6">
          Conditions Générales de Vente
        </h2>

        <div className="space-y-6 text-white text-center ">
          <div>
            <h2 className="text-2xl font-semibold">1 – Portée et application des présentes dispositions</h2>
            <p>
              Les présentes Conditions Générales de Vente (ci-après « les Conditions ») régissent les relations contractuelles entre la société TRAFIC GENIUS (ci-après « l&apos;AGENCE ») et tout cocontractant, professionnel ou non-professionnel, désigné comme « le CLIENT ». Elles définissent les droits et obligations de chaque partie dans le cadre de la prestation de services par l&apos;AGENCE.
            </p>
            <p>
              Les présentes Conditions prévalent sur toute autre condition, sauf dérogation expresse et écrite de l&apos;AGENCE. L&apos;AGENCE se réserve le droit de modifier les présentes Conditions à tout moment, sous réserve d&apos;en informer le CLIENT. La validation d&apos;une commande ou d&apos;une prestation par le CLIENT vaut acceptation sans réserve des présentes Conditions, y compris si celles-ci diffèrent de ses propres conditions générales d&apos;achat.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">2 – Engagements contractuels</h2>
            <p>
              Toute commande de prestation signée entre le CLIENT et l&apos;AGENCE constitue un engagement ferme et définitif. Les termes de ce contrat, incluant la nature des prestations, les délais, et les conditions financières, sont réputés acceptés par les deux parties.
            </p>
            <p>
              Toute modification postérieure à la signature doit faire l&apos;objet d&apos;un accord écrit entre le CLIENT et l&apos;AGENCE, avec ajustement des délais et/ou du prix si nécessaire. En cas de rétractation après livraison, le CLIENT sera tenu de régler les frais engagés ainsi qu&apos;une indemnité de résiliation fixée à 10 % du montant total hors taxes. Toute annulation à moins de sept (7) jours avant l&apos;exécution de la prestation entraîne une pénalité de 50 % du montant total hors taxes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">3 – Tarification et révision des tarifs</h2>
            <p>
              Les prix des prestations sont fixés dans le devis validé par les deux parties. Tous les tarifs sont exprimés en euros hors taxes et ne comprennent pas les éventuels frais annexes (frais de déplacement, hébergement, etc.) qui seront facturés séparément si nécessaire.
            </p>
            <p>
              Les devis sont valables pendant une durée de trente (30) jours à compter de leur date d&apos;émission. Passé ce délai, l&apos;AGENCE se réserve le droit de modifier ses tarifs.
            </p>
            <p>
              L&apos;AGENCE se réserve le droit de réviser ses tarifs annuellement, en fonction notamment de l&apos;inflation ou de la variation des coûts. Toute modification tarifaire sera communiquée au CLIENT par écrit, avec un préavis d&apos;au moins trente (30) jours avant leur entrée en vigueur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">4 – Périmètre des prestations et modifications</h2>
            <p>
              Les prestations incluent uniquement les éléments spécifiés dans le devis. Toute demande de modification ou d&apos;ajout par le CLIENT en dehors du périmètre initial défini dans le devis fera l&apos;objet d&apos;une facturation supplémentaire, à un tarif horaire de 120 € HT, avec un minimum de facturation d&apos;une heure. Aucune modification ne sera effectuée sans l&apos;accord écrit préalable du CLIENT.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">5 – Modalités de règlement</h2>
            <p>
              Le règlement des prestations s&apos;effectue selon les modalités prévues au devis ou au contrat. Le paiement peut être réalisé par un lien de paiement sécurisé, virement bancaire ou chèque. En cas de retard de paiement excédant trente (30) jours à compter de la date d&apos;échéance, des pénalités de retard seront appliquées, calculées sur la base de trois (3) fois le taux d&apos;intérêt légal. Une indemnité forfaitaire de 40 € pour frais de recouvrement sera également due.
            </p>
            <p>
              L&apos;AGENCE se réserve le droit de suspendre ou de résilier le contrat en cas de non-paiement, sans que cela n&apos;entraîne un droit à compensation pour le CLIENT. En cas de suspension des prestations due à un retard de paiement, les délais initialement convenus pourront être prolongés d&apos;une durée équivalente au temps de suspension.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">6 – Obligations réciproques</h2>
            <h3 className="text-xl font-semibold">6.1 Obligations de l&apos;AGENCE</h3>
            <p>
              L&apos;AGENCE s&apos;engage à fournir les prestations conformément au devis ou au contrat signé avec le CLIENT. Elle est soumise à une obligation de moyens, impliquant la mise en œuvre de tous les efforts nécessaires pour atteindre les résultats convenus. L&apos;AGENCE se réserve le droit de suspendre ses obligations en cas de force majeure, telles que définies par le Code civil français.
            </p>
            <h3 className="text-xl font-semibold">6.2 Obligations du CLIENT</h3>
            <p>
              Le CLIENT s&apos;engage à fournir à l&apos;AGENCE toutes les informations et documents nécessaires à la réalisation des prestations. Il garantit l&apos;exactitude des informations fournies. En l&apos;absence de validation ou de coopération du CLIENT dans les délais impartis, l&apos;AGENCE pourra considérer les livrables comme acceptés ou suspendre le projet. Toute suspension ou annulation du projet en raison du défaut de coopération du CLIENT entraînera des pénalités.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">7 – Livraison et validation des prestations</h2>
            <p>
              L&apos;AGENCE s&apos;engage à respecter les délais de livraison définis dans le contrat. Le CLIENT dispose de dix (7) jours à compter de la réception des livrables pour signaler toute non-conformité. Passé ce délai, les livrables sont considérés comme conformes.
            </p>
            <p>
              Pour les projets numériques, un procès-verbal de recette est établi à la fin des tests et validé par le CLIENT. En cas de non-validation, le CLIENT doit notifier ses objections par écrit dans un délai de quarante-huit (48) heures, faute de quoi le procès-verbal sera considéré comme accepté.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">8 – Limitation de responsabilité</h2>
            <p>
              La responsabilité de l&apos;AGENCE est limitée à 10 % du montant total du contrat en cas de préjudice résultant directement de la prestation. En aucun cas, l&apos;AGENCE ne pourra être tenue responsable des dommages indirects, tels que la perte de chiffre d&apos;affaires ou d&apos;opportunités, sauf en cas de faute lourde ou intentionnelle.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">9 – Sécurité des livrables numériques</h2>
            <p>
              L&apos;AGENCE s&apos;engage à livrer des projets numériques conformes aux standards de sécurité en vigueur à la date de livraison. Après livraison, le CLIENT est responsable de la mise à jour et du maintien des systèmes de sécurité. L&apos;AGENCE ne saurait être tenue responsable des failles de sécurité ou des attaques survenues après la livraison, sauf si un contrat de maintenance est signé.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">10 – Contrat de maintenance</h2>
            <p>
              Un contrat de maintenance peut être proposé au CLIENT pour assurer la mise à jour, le suivi et la sécurité des projets numériques livrés. Ce contrat fera l&apos;objet d&apos;une proposition distincte, avec des modalités spécifiques.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">11 – Conservation des fichiers</h2>
            <p>
              L&apos;AGENCE ne conserve les fichiers de travail que pendant trois (3) mois après la livraison du projet, sauf accord contraire spécifié par écrit. La conservation des fichiers au-delà de cette période peut faire l&apos;objet de frais d&apos;archivage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">12 – Droits d&apos;auteur et propriété intellectuelle</h2>
            <p>
              Les livrables réalisés par l&apos;AGENCE restent la propriété de l&apos;AGENCE jusqu&apos;au paiement intégral de toutes les factures émises. Les fichiers sources demeurent la propriété exclusive de l&apos;AGENCE et ne seront transmis au CLIENT que moyennant un supplément convenu. L&apos;AGENCE se réserve le droit d&apos;apposer sa signature sur les créations, sauf demande expresse du CLIENT.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">13 – Droit de publicité</h2>
            <p>
              Sauf opposition expresse du CLIENT, l&apos;AGENCE se réserve le droit de mentionner les projets réalisés dans le cadre de sa communication commerciale, en ligne ou sur support physique.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">14 – Confidentialité</h2>
            <p>
              Les parties s&apos;engagent à préserver la confidentialité de toutes les informations échangées dans le cadre de la réalisation des prestations, tant pendant qu&apos;après l&apos;exécution du contrat.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">15 – Protection des données personnelles</h2>
            <p>
              Le CLIENT s&apos;engage à respecter la réglementation en vigueur en matière de protection des données personnelles, y compris le RGPD. L&apos;AGENCE garantit la confidentialité et la sécurité des données qui lui sont transmises dans le cadre de la prestation, conformément aux exigences légales.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">16 – Sous-traitance</h2>
            <p>
              L&apos;AGENCE se réserve le droit de sous-traiter tout ou partie des prestations, sous sa responsabilité, sans que cela ne modifie les termes du contrat. L&apos;AGENCE demeure responsable vis-à-vis du CLIENT de l&apos;exécution des prestations confiées aux sous-traitants.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">17 – Non-sollicitation de personnel</h2>
            <p>
              Le CLIENT s&apos;interdit de solliciter ou d&apos;embaucher un employé de l&apos;AGENCE pendant une période de deux (2) ans après la fin du contrat, sous peine de dédommagement fixé à un montant égal à six (6) mois du salaire brut de l&apos;employé concerné.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">18 – Résiliation anticipée</h2>
            <p>
              En cas de non-respect par l&apos;une des parties de ses obligations contractuelles, le contrat pourra être résilié de plein droit par la partie lésée. La résiliation prendra effet quinze (15) jours après la réception d&apos;une mise en demeure restée infructueuse, sauf si la partie en défaut remédie à la situation pendant ce délai.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">19 – Loi applicable et juridiction compétente</h2>
            <p>
              Les présentes Conditions sont soumises au droit marocain et français. Tout litige relatif à leur exécution ou interprétation sera de la compétence exclusive du Tribunal de Commerce de Marrakech et Nanterre, sauf disposition légale impérative contraire.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">19 – Loi applicable et juridiction compétente</h2>
            <p>
              Les présentes Conditions sont soumises au droit marocain et français. Tout litige relatif à leur exécution ou interprétation sera de la compétence exclusive du Tribunal de Commerce de Marrakech et Nanterre, sauf disposition légale impérative contraire.
            </p>
          </div>
        </div>
      </div>

    )
}