import { type SchemaTypeDefinition } from 'sanity'
import { postType } from "@/sanity/schemaTypes/blogType";
import { knowledgeBaseType } from "@/sanity/schemaTypes/knowledgeBaseType";
import author from "@/sanity/schemaTypes/author";
import category from "@/sanity/schemaTypes/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, author, category, knowledgeBaseType],
}
