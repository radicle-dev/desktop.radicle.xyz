import type { Post } from "$lib/types";

async function getPosts() {
  let posts: Post[] = [];

  const paths = import.meta.glob("/src/posts/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const post = { ...metadata, slug } satisfies Post;
      posts.push(post);
    }
  }

  posts = posts.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

  return posts;
}

const xml = (posts: Post[]) => `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
      <title>Radworks • Blog</title>
      <atom:link href="https://radicle.xyz/desktop/feed.xml" rel="self" type="application/rss+xml"/>
      <link>https://radicle.xyz/desktop/blog</link>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <description>News and updates from Radworks</description>
      <generator>JavaScript</generator>
${posts
  .map(
    post => `<item>
        <title>${post.title}</title>
        <link>https://radicle.xyz/desktop/blog/${post.slug}</link>
        <description>${post.description}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>`,
  )
  .join("\n")}
  </channel>
</rss>`;

export async function GET() {
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=600",
    "Content-Type": "application/xml",
  };

  const posts = await getPosts();
  return new Response(xml(posts), { headers });
}

export const prerender = true;
