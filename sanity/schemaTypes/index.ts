import { type SchemaTypeDefinition } from 'sanity'
import {postType} from "@/sanity/schemaTypes/blogType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType],
}
