import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/project/logo.png"

interface Props {
  image: string;
  category: string;
}

export const CategoryCard: React.FC<Props> = ({ image, category }) => {
  const [imgSrc, setImgSrc] = useState(image);

  const handleError = () => {
    setImgSrc(""); // Cambia la imagen a una cadena vacía para mostrar el mensaje de error
  };

  return (
    <div className="relative block max-w-sm mx-auto mt-3 mb-4 transition group">
      <Link to={`/categories/${category}`} className="block">
        <div className="relative overflow-hidden shadow aspect-w-2 aspect-h-1 rounded-2xl">
          <div>
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={`Image for ${category}`}
                title={`This is the ${category} image`}
                loading="lazy"
                className="object-cover object-center w-full h-48"
                onError={handleError}
              />
            ) : (
              <div className="flex flex-col max-w-md p-4 text-center h-30">
                <img src={Logo}/>
                <p className="text-2xl font-bold md:text-2xl dark:text-white">
                  Sorry, image not available.
                </p>
             
              </div>
            )}
            <div className="absolute bottom-0 left-0 p-2 mb-1 ml-2 text-sm font-bold text-white">
              {category}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
