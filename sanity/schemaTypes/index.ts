import { type SchemaTypeDefinition } from "sanity"
import { authorType } from "./authorType"
import { blockContentType } from "./blockContentType"
import { categoryType } from "./categoryType"
import { post } from "./post"
import { postType } from "./postType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, post],
}
