import React, { FC } from 'react'
import Abutton from '../atoms/Abutton'

interface Asset {
  url: string
  title: string
}
interface Props {
  field: {
    medialink: string
    button: string
    heading: string
    description: string
    media: Asset[]
  }
}

const CmainProject:FC<Props> = ({field: {
  media
}}) => {
  return (
    <article className="c-main-project o-container o-container--lg my-10">
      <Abutton href="https://github.com/wiktorkujawa" passHref={true} target="_blank" className="mb-5 overflow-hidden">
        {
          media && media.length ?
        <div className="o-aspect-ratio o-aspect-ratio--4:3 w-full">
          <img loading="lazy" className="o-aspect-ratio__content object-cover hover:scale-125 duration-500" src={media[0]?.url} alt={media[0]?.title}/>
        </div>
        : null
        }
      </Abutton>
      <Abutton target="_blank" passHref={true} className="mt-10 uppercase hover:text-red-hover hover:bg-opacity-50 dark:text-white text-eerie-black dark:bg-eerie-black bg-white-smoke rounded border-1 dark:bg-accent-dark bg-accent-light py-2 text-center items-center justify-center" href="https://github.com/wiktorkujawa">Check out my github projects</Abutton>
    </article>
  )
}

export default CmainProject
