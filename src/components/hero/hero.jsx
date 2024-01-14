import React from 'react'
import './Hero.css'
import Marca from '../../assets/img/marca.jpg';

const Hero = () => {
    return (

        <div className='boxHero'>
            <div className='textoHero'>
                <p className='pHero'>Bolsos</p>
                <p className='pHero'>sintéticos</p>
                <p className='pHero'>para</p>
                <p className='pHero'>mujeres</p>
                <p className='pHero'>reales</p>
            </div>

            <div className='boxImgHero'>
                <img className='imgHero' src={Marca} alt="" />
            </div>
        </div>

    )
}

export default Hero