import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/blog/',
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  }
}
