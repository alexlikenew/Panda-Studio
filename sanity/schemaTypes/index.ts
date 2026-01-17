import { type SchemaTypeDefinition } from 'sanity'
import { postType } from "@/sanity/schemaTypes/blogType";
import { knowledgeBaseType } from "@/sanity/schemaTypes/knowledgeBaseType";
import author from "@/sanity/schemaTypes/author";
import category from "@/sanity/schemaTypes/category";
import { socialReel } from "@/sanity/schemaTypes/socialReel";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, author, category, knowledgeBaseType, socialReel],
}
