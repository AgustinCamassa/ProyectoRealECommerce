import hero from "../../assets/hero.png";
export const Hero = () => {
  return (
    <div className="container bg-primary flex items-center lg:flex-row flex-col  text-white p-0 rounded-xl rounded-t-none sm:rounded-t-xl">
      <h1 className="2xl:text-h1 text-h4 2xl:p-8 lg:p-4 p-8">
        Bolsos sintéticos para mujeres reales
      </h1>
      <div className="lg:h-64 2xl:h-full h-96 w-full bg-cover bg-center 2xl:p-0 lg:p-4 p-0">
        <img
          className="h-full w-full object-cover rounded-xl 2xl:rounded-l-none lg:rounded-t-xl rounded-t-none"
          src={hero}
          alt="portada"
        />
      </div>
    </div>
  );
};
