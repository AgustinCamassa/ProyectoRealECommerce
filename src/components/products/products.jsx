import { Carousel } from "./carousel/carousel";

export const Products = () => {
  return (
    <div id="products">
      <div className="bg-primary flex items-center lg:flex-row flex-col  text-white 2xl:py-11 pb-11">
        <div className="2xl:px-16 lg:p-4 p-8 2xl:w-2/6 w-full space-y-4">
          <h1 className="2xl:text-h3 text-h4">Un bolso para cada momento</h1>
          <p className="text-p1">
            Encontrá tu bolso ideal para cada momento especial. Explorá nuestras
            sugerencias y descubrí las opciones que tenemos para vos.
          </p>
        </div>
        <Carousel />
      </div>
      <div className="flex flex-col my-8">
        <button id="btn-primary">COMPRAR AHORA</button>
        <button id="btn-secondary">Consultar Modelos Edición Limitada</button>
      </div>
    </div>
  );
};
