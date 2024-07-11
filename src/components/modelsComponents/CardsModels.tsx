import { Link } from "react-router-dom";
import { Eye } from "../icons/Eye";

interface Props {
    name: string;
    photo: string;
    views: string;
    
}

export const CardsModels: React.FC<Props> = ({ name, photo, views }) => {
  

    return (
        <div className="flex flex-col items-center">
            <div className="w-64 h-auto mb-2 overflow-hidden duration-200 bg-white shadow-md rounded-xl hover:shadow-xl">
                <Link to={`/model-index/${name}`} reloadDocument>
                    <img src={photo} alt="Vanilla Leak Model Photo" className="object-cover w-full rounded-t-xl h-96" title={`${name} profile photo`}/>
                </Link>
            </div>
            <div className="px-4 py-3 w-72">
    <span className="flex items-center">
        <span className="mr-2 text-sm text-gray-400 uppercase">{views}</span>
        <Eye size={'w-4 h-5'} /> 
    </span>
    <p className="block text-lg font-bold text-white capitalize truncate">{name}</p>
</div>

        </div>
    );
};