import { Link } from "react-router-dom";
import { Eye } from "../icons/Eye";

interface Props {
    name: string;
    photo: string;
    views: string;
    url: string;
}

export const CardsModels: React.FC<Props> = ({ name, photo, views, url }) => {
    // Get the slice of URL name
    const lastSlashOfURL = url.lastIndexOf('/');
    const modelNameSlice = url.slice(lastSlashOfURL + 1);

    return (
        <div className="flex flex-col items-center">
            <div className="bg-white shadow-md rounded-xl overflow-hidden duration-200 hover:scale-105 hover:shadow-xl w-64 h-auto mb-2">
                <Link to={`/model-index/${modelNameSlice}`}>
                    <img src={photo} alt="Product" className="object-cover rounded-t-xl w-full h-96" />
                </Link>
            </div>
            <div className="px-4 py-3 w-72">
    <span className="flex items-center">
        <span className="text-gray-400 uppercase text-sm mr-2">{views}</span>
        <Eye size={'w-4 h-5'} /> 
    </span>
    <p className="text-lg font-bold text-white truncate block capitalize">{name}</p>
</div>

        </div>
    );
};