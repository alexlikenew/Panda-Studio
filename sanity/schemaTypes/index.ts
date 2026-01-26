import { type SchemaTypeDefinition } from 'sanity'
import { postType } from "@/sanity/schemaTypes/blogType";
import { knowledgeBaseType } from "@/sanity/schemaTypes/knowledgeBaseType";
import author from "@/sanity/schemaTypes/author";
import category from "@/sanity/schemaTypes/category";
import { socialReel } from "@/sanity/schemaTypes/socialReel";
import pricing from "@/sanity/schemaTypes/pricing";
import { seoSection } from "@/sanity/schemaTypes/seoSection";

import voucher from "@/sanity/schemaTypes/voucher";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, author, category, knowledgeBaseType, socialReel, pricing, seoSection, voucher],
}
