import { useContext } from "react";
import { Carousel } from "./carousel/carousel";
import { TextContext } from "./textContent/textContent";

export const Products = () => {
  const { dynamicText } = useContext(TextContext);

  return (
    <div id="products">
      <div className="bg-primary flex items-center lg:flex-row flex-col  text-white 2xl:py-11 pb-11">
        <div className="2xl:px-16 lg:p-4 p-8 2xl:w-2/6 w-full">
          <div className="space-y-4 py-4">
            <h1 className="2xl:text-h3 text-h4">{dynamicText.title}</h1>
            <p className="text-p1">{dynamicText.subtitle}</p>
          </div>
          {dynamicText?.description?.map((characteristic) => (
            <div key={characteristic.id}>
              <span className="text-p1">{characteristic.type}:</span>{" "}
              <span className="text-p2">{characteristic.value}</span>
            </div>
          ))}
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
