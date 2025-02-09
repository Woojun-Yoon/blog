'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import siteMetadata from '@/data/siteMetadata'

const Comments = ({ slug }: { slug: string }) => {
  if (!siteMetadata.comments?.provider) {
    return null
  }
  return (
    <>
      <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
    </>
  )
}

export default Comments
