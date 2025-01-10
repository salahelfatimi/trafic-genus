import * as React from "react";
export const EmailTemplate = ({
  fullName,
  email,
  Phone,
  comment,
}) => (
  <div>
    <p><strong>Nom complet : </strong>{fullName}</p>
    <p>Vous avez reçu un message de contact intéressé par vos services sur le site Trafic genius :</p>
    <div>
      <p><strong>Email : </strong>{email || "Email non fourni par le client"}</p>
      <p><strong>Téléphone : </strong>{Phone || "Téléphone non fourni par le client"}</p>
      <p><strong>Message : </strong>{comment || "Aucun message fourni par le client"}</p>
    </div>
   
  </div>
);
