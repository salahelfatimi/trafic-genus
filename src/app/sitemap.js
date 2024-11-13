

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
      
    ];
  }