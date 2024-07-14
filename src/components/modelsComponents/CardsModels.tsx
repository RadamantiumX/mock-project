import { Link } from "react-router-dom";
import { Eye } from "../icons/Eye";

interface Props {
    name: string;
    photo: string;
    views: string;

}

export const CardsModels: React.FC<Props> = ({ name, photo, views }) => {


    return (
        <>
            <Link to={`/model-index/${name}`} className="hover:scale-100" reloadDocument>
                <article className="relative flex flex-col justify-end max-w-sm px-8 py-6 mx-auto overflow-hidden transition-transform duration-300 ease-in-out transform w-60 h-80 isolate rounded-2xl hover:scale-105">
                    <img src={photo} alt="Vanilla Leak Model Photo" className="absolute inset-0 object-cover w-full h-full" title={`${name} profile photo`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-xl font-bold text-white">{name}</h3>
                    <div className="z-10 overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
                        <span className="flex items-center">
                            <span className="mr-2 text-sm text-gray-400 uppercase">{views}</span>
                            <Eye size={'w-4 h-5'} />
                        </span>
                    </div>
                </article>
            </Link>
        </>
    );
};