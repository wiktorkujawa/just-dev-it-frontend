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

const Mproject:FC<Props> = ({field: {
  heading,
  button,
  media,
  medialink,
  description
}}) => {
  return (
    <article className="m-project">
      <h2 className="text-h3 text-center mb-5 dark:text-white text-eerie-black">{ heading }</h2>
      <Abutton href={medialink} passHref={true} target="_blank" className="mb-5 overflow-hidden">
        {
          media && media.length ?
        <div className="o-aspect-ratio o-aspect-ratio--4:3 w-full">
          <img loading="lazy" className="o-aspect-ratio__content object-cover hover:scale-125 duration-500" src={media[0]?.url} alt={media[0]?.title}/>
        </div>
        : null
        }
      </Abutton>
        <div className="mx-4">
      <p className="mb-5 text-p3 dark:text-white text-eerie-black">{description}</p>
      <Abutton target="_blank" passHref={true} className=" hover:text-red-hover hover:bg-opacity-50 dark:text-white text-eerie-black dark:bg-eerie-black bg-white-smoke rounded border-1 dark:bg-accent-dark bg-accent-light py-2 w-full text-center items-center justify-center" href={button}>Full Story</Abutton>
      </div>
    </article>
  )
}

export default Mproject
