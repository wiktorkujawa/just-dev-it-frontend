import React, { FC } from 'react'
import DOMPurify from 'dompurify'

interface Props {
  field: {
    copy: string
  }
}
const Cwysiwyg: FC<Props> = ({field: { copy }}) => {
  return (
    <div className="c-wysiwyg my-12 o-container o-container--xl" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(copy)}}/>
  )
}

export default Cwysiwyg
