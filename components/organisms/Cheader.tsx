import React from 'react'
import Abutton from '../atoms/Abutton'
import Asvg from '../atoms/Asvg'
const Cheader = () => {
  return (
    <div className="o-container o-container--md w-2/3">
      <Abutton href="/">
        <Asvg name="logowhite"/>
      </Abutton>
    </div>
  )
}

export default Cheader
