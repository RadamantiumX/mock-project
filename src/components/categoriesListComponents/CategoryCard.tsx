import { Link } from "react-router-dom";
import Logo from "../../assets/project/logo.png"; // Ajusta la ruta según la ubicación de tu archivo de imagen

interface Props {
  image: string;
  category: string;
}

export const CategoryCard: React.FC<Props> = ({ image, category }) => {
  return (
    <>
      <div className="relative block max-w-sm mx-auto mt-3 mb-4 transition group">
        <Link to={`/categories/${category}`} className="block">
          <div className="relative overflow-hidden bg-gray-100 shadow aspect-w-2 aspect-h-1 rounded-2xl">
            <div>
              {image ? (
                <img
                  src={image}
                  alt={`image for ${category} sex porn`}
                  title={`This is the ${category} image`}
                  loading="lazy"
                  className="object-cover object-center w-full h-48"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-48 bg-black">
                  <img src={Logo} alt="Logo" className="w-16 h-16" /> {/* Ajusta el tamaño del logo según tus necesidades */}
                </div>
              )}
              <div className="absolute bottom-0 left-0 p-2 mb-1 ml-2 text-sm font-bold text-white">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
