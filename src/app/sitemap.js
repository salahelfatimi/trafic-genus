export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Define base URL
  let dynamicPaths = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&per_page=100`
    );

    if (response.ok) {
      const posts = await response.json();
      dynamicPaths = posts.map((post) => ({
        url: `${baseUrl}/blogs/${encodeURIComponent(
          post.title.rendered.trim().replace(/[/%\s]+/g, "-")
        )}/${post.id}`,
        lastModified: new Date(post.modified),
      }));
    } else {
      console.error("Failed to fetch posts. Response not OK.");
    }
  } catch (error) {
    console.error("Failed to fetch posts for the sitemap:", error);
  }

  return [
    { url: `${baseUrl}`, lastModified: '2024-08-10T09:18:15.131Z' },
    { url: `${baseUrl}/appel`, lastModified: '2024-08-10T09:18:15.131Z'},
    { url: `${baseUrl}/boutique`, lastModified: '2024-08-10T09:18:15.131Z' },
    { url: `${baseUrl}/mentions-legales`, lastModified: '2024-08-10T09:18:15.131Z' },
    { url: `${baseUrl}/conditions-generales-de-vente`, lastModified: '2024-08-10T09:18:15.131Z' },
    { url: `${baseUrl}/clause-de-non-responsabilite`, lastModified: '2024-08-10T09:18:15.131Z' },
    { url: `${baseUrl}/blogs`, lastModified: '2024-11-10T09:18:15.131Z' },
    { url: `${baseUrl}/confirme-rendez-vous`, lastModified: '2024-08-10T09:18:15.131Z' },
    { url: `${baseUrl}/accompagnement`, lastModified: '2025-01-10T09:18:15.131Z' },
    ...dynamicPaths,
  ];
}
