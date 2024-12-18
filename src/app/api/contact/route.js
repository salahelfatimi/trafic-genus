
import { EmailTemplate } from "@/components/emailTemplateResend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, tele, comment} = body;
    const data = await resend.emails.send({
      from: `${fullName}<onboarding@traficgenius.com>`,
      to: "trafic.gen.team@gmail.com",
      subject: 'Le client a contacté via la page de contact.',
      react: EmailTemplate({
        fullName: fullName,
        comment: comment,
        email: email,
        Phone: tele,
       
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
