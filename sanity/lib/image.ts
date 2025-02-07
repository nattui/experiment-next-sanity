import { dataset, projectId } from "@/sanity/env"
import createImageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

const builder = createImageUrlBuilder({ dataset, projectId })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
