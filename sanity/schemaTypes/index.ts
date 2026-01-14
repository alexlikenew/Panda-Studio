import { type SchemaTypeDefinition } from 'sanity'
import { postType } from "@/sanity/schemaTypes/blogType";
import { knowledgeBaseType } from "@/sanity/schemaTypes/knowledgeBaseType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, knowledgeBaseType],
}
