import React, { FC } from 'react'
import DOMPurify from 'dompurify'

interface Props {
  field: {
    copy: string,
    containerMaxWidth: string
  }
}
const Cwysiwyg: FC<Props> = ({field: { copy, containerMaxWidth }}) => {
  return (
    <div className={`c-wysiwyg text-center my-12 o-container o-container--${containerMaxWidth}`} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(copy)}}/>
  )
}

export default Cwysiwyg
