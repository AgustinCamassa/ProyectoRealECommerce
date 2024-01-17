import "./Preguntas.css";

const Preguntas = () => {
  return (
    <div className="contenedor-acordeon" id="qya">
      <h2>Preguntas Frecuentes</h2>

      <div className="acordeon">
      
        <input
          type="radio"
          name="acordeon"
          id="btn-acordeon1"
          className="btn-acordeon"
        />
        <label htmlFor="btn-acordeon1">
          ¿Qué recomendaciones puedo seguir para cuidar y mantener mi bolso en
          buen estado?
          <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-90v30h440v-30H260Zm0-60h440v-580H260v580Zm0-640h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z" />
              </svg>
        </label>
        
        <div className="contenido-acordeon">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet perspiciatis dolorum aspernatur similique corrupti tenetur
            laboriosam beatae unde, a, molestias animi id natus quasi. Aut
            magnam explicabo delectus iste?
          </p>
        </div>
      </div>

      <div className="acordeon">
        <input
          type="radio"
          name="acordeon"
          id="btn-acordeon2"
          className="btn-acordeon"
        />
        <label htmlFor="btn-acordeon2">¿Ofrecen bolsos personalizados?</label>
        <div className="contenido-acordeon">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet perspiciatis dolorum aspernatur similique corrupti tenetur
            laboriosam beatae unde, a, molestias animi id natus quasi. Aut
            magnam explicabo delectus iste?
          </p>
        </div>
      </div>

      <div className="acordeon">
        <input
          type="radio"
          name="acordeon"
          id="btn-acordeon3"
          className="btn-acordeon"
        />
        <label htmlFor="btn-acordeon3">
          ¿Ofrecen bolsos veganos o sin materiales de origen animal?
        </label>
        <div className="contenido-acordeon">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet perspiciatis dolorum aspernatur similique corrupti tenetur
            laboriosam beatae unde, a, molestias animi id natus quasi. Aut
            magnam explicabo delectus iste?
          </p>
        </div>
      </div>

      <div className="acordeon">
        <input
          type="radio"
          name="acordeon"
          id="btn-acordeon4"
          className="btn-acordeon"
        />
        <label htmlFor="btn-acordeon4">
          ¿Qué tipos de bolsos se encuentran en la tienda?
        </label>
        <div className="contenido-acordeon">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet perspiciatis dolorum aspernatur similique corrupti tenetur
            laboriosam beatae unde, a, molestias animi id natus quasi. Aut
            magnam explicabo delectus iste?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
