import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

// Define the type for our post data
interface Post {
  _id: string
  slug: string
  title: string
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map((post: Post) => (
          <div className="rounded-lg border p-4" key={post._id}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

// Function to fetch posts
async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"] {
      _id,
      title,
      "slug": slug.current
    }`,
  )
}
