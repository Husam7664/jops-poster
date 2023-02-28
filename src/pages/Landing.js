import React from 'react'
import {Logo} from '../components'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Testing'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
           <Logo />
        </nav>
        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>job <span>tracking</span> app </h1>
                <p>
                I'm baby photo booth iPhone lyft twee authentic, hella yes plz meggings man bun drinking vinegar.
                Blue bottle literally twee art party wayfarers cardigan.
                </p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img'/> 
        </div>


    </Wrapper>
  )
}



export default Landing
