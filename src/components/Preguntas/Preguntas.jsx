import React from 'react'
import './Preguntas.css'

const Preguntas = () => {
    return (
        <div className='contenedor-acordeon'>
            <h2>Preguntas Frecuentes</h2>

            <div className='acordeon'>
                <input type="radio" name='acordeon' id='btn-acordeon1' className='btn-acordeon' />
                <label for="btn-acordeon1">
                    ¿Qué recomendaciones puedo seguir para cuidar y mantener mi bolso en buen estado?
                </label>
                <div className='contenido-acordeon'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet perspiciatis dolorum aspernatur similique corrupti tenetur laboriosam beatae unde, a, molestias animi id natus quasi. Aut magnam explicabo delectus iste?</p>
                </div>
            </div>

            <div className='acordeon'>
                <input type="radio" name='acordeon' id='btn-acordeon2' className='btn-acordeon' />
                <label for="btn-acordeon2">
                    ¿Ofrecen bolsos personalizados?
                </label>
                <div className='contenido-acordeon'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet perspiciatis dolorum aspernatur similique corrupti tenetur laboriosam beatae unde, a, molestias animi id natus quasi. Aut magnam explicabo delectus iste?</p>
                </div>
            </div>

            <div className='acordeon'>
                <input type="radio" name='acordeon' id='btn-acordeon3' className='btn-acordeon' />
                <label for="btn-acordeon3">
                    ¿Ofrecen bolsos veganos o sin materiales de origen animal?
                </label>
                <div className='contenido-acordeon'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet perspiciatis dolorum aspernatur similique corrupti tenetur laboriosam beatae unde, a, molestias animi id natus quasi. Aut magnam explicabo delectus iste?</p>
                </div>
            </div>

            <div className='acordeon'>
                <input type="radio" name='acordeon' id='btn-acordeon4' className='btn-acordeon' />
                <label for="btn-acordeon4">
                    ¿Qué tipos de bolsos se encuentran en la tienda?
                </label>
                <div className='contenido-acordeon'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet perspiciatis dolorum aspernatur similique corrupti tenetur laboriosam beatae unde, a, molestias animi id natus quasi. Aut magnam explicabo delectus iste?</p>
                </div>
            </div>

        </div>
    )
}

export default Preguntas