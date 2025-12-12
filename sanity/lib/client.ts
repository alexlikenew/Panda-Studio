import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "zpw2l61q",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
})
