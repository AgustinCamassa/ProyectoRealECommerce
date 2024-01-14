import React from 'react'
import './About.css'
import Claudia2 from '../../assets/img/Claudia2.jpg';

const About = () => {
    return (

        <div className='boxAbout'>
            <section className='sectionImg'>
                <img className='imgAbout' src={Claudia2} alt="" />
            </section>

            <section className='sectionText'>
                <h2>Sobre el proyecto</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti porro pariatur, quibusdam vel magni quae maxime quo dolorum hic ab ullam aut recusandae placeat dolor odio sed, ex alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quos. Facere excepturi perspiciatis, maiores eligendi voluptatum aliquid molestias a ipsum tempora, debitis non vitae laborum, nulla voluptate magni commodi quam.</p>
                <h2 className='h2About'>@Clabelle.mya</h2>
            </section>
        </div>

    )
}

export default About