import React from 'react'
import Abutton from '../atoms/Abutton'
import Asvg from '../atoms/Asvg'
import Logo from '/public/assets/svg/logowhite.svg'
const Cheader = () => {
  return (
    <div className="o-container o-container--md w-2/3">
      <Abutton href="/">
        <Logo/>
      </Abutton>
    </div>
  )
}

export default Cheader
