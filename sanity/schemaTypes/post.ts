export const post = {
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      options: {
        maxLength: 96,
        source: "title",
      },
      title: "Slug",
      type: "slug",
    },
    {
      name: "content",
      of: [{ type: "block" }],
      title: "Content",
      type: "array",
    },
  ],
  name: "post",
  title: "Post",
  type: "document",
}
