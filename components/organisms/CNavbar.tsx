import React, { FC, useEffect, useState } from 'react'
import Abutton from '../atoms/Abutton'

interface MenuItem {
  text: string, 
  href: string
}

interface Props {
  currentTab: string
}

const items: MenuItem[] = [
  {
    text: 'Info & Projects',
    href:'/'
  },
  {
    text:'Skills & Knowledge',
    href:'/skills'
  },
  {
    text:'Experience & Education',
    href:'/experience'
  }
]

const CNavbar:FC<Props> = ({currentTab}) => {

  const [ darkMode, setDarkMode ] = useState(true)

  useEffect(() => {
    setDarkMode(window.matchMedia("(prefers-color-schema: dark)").matches)
  }, [])

  useEffect(() => {
    darkMode ?
    document.querySelector('.main')?.classList.add('dark')
    : document.querySelector('.main')?.classList.remove('dark')
  }, [darkMode])
  return (
    <div className="flex items-stretch justify-between c-navbar">
      <div className="md:flex w-full text-eerie-black bg-white-smoke dark:text-white dark:bg-eerie-black hidden">
      {
        items.map(({text, href}) => {
          return <Abutton className={` ${currentTab === href ? 'bg-pink-hover':''} py-4 hover:opacity-50 text-center flex-1 justify-center items-center px-4 uppercase`} key={href} href={href}> {text} </Abutton>
        })
      }
      </div>
      <div className="flex gap-x-8 px-8 py-4 md:w-auto w-full dark:bg-mine-shaft bg-white justify-between items-center">
      <Abutton 
            className="fill-current hover:opacity-50" 
            href="https://github.com/wiktorkujawa/" 
            target="_blank" 
            rel="noreferrer" 
            iconName="github"
          />
      <Abutton 
        className="fill-current hover:text-linkedin" 
        href="https://www.linkedin.com/in/wiktor-kujawa-110bb2194/" 
        target="_blank" 
        rel="noreferrer" 
        iconName="linkedin"
      />
      <Abutton onClick={() => setDarkMode(!darkMode)} className="fill-current" iconName={darkMode ? 'sun': 'moon'} />

      </div>
    </div>
  )
}

export default CNavbar
