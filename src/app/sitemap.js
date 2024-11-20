

export default async function sitemap() {
 

    return [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}appel`,
        lastModified: new Date(),
      }
      ,
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}boutique`,
        lastModified: new Date(),
      }
      ,
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}mentions-legales`,
        lastModified: new Date(),
      }
      ,
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}conditions-generales-de-vente`,
        lastModified: new Date(),
      }
      ,
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}clause-de-non-responsabilite`,
        lastModified: new Date(),
      }
      
    ];
  }