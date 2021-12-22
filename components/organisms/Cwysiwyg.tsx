import React, { FC } from 'react'
import DOMPurify from 'dompurify'

interface Props {
  field: {
    idName: string,
    copy: string,
    containerMaxWidth: string
  }
}
const Cwysiwyg: FC<Props> = ({field: { idName, copy, containerMaxWidth }}) => {
  return (
    <div id={idName} className={`c-wysiwyg darkmode-element-text my-12 o-container o-container--${containerMaxWidth}`} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(copy)}}/>
  )
}

export default Cwysiwyg
