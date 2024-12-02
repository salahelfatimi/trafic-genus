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
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/appel`, lastModified: new Date() },
    { url: `${baseUrl}/boutique`, lastModified: new Date() },
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date() },
    { url: `${baseUrl}/conditions-generales-de-vente`, lastModified: new Date() },
    { url: `${baseUrl}/clause-de-non-responsabilite`, lastModified: new Date() },
    { url: `${baseUrl}/blogs`, lastModified: new Date() },
    ...dynamicPaths,
  ];
}
