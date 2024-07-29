import { Link } from "react-router-dom";
import { useVideoTags } from "../../customsHooks/videoHooks";

interface Props {
    limited: string[];
}

export const Tags: React.FC<Props> = ({ limited }) => {
    const { maxTagsToShow, toggleShowAllTags, showAllTags } = useVideoTags()

    return (
        <>
        <div className="flex flex-wrap justify-start md:justify-start">
            {limited?.map((str, index) => (
                <div key={index} className={`mr-2 mb-8 md:mb-6 mt-3 ${!showAllTags ? (index >= maxTagsToShow ? 'hidden md:block' : '') : ''}`}>
                    <div className="rounded-md bg-pink-600 px-2 py-1 my-[-1.8rem] md:my-[-2.3rem] hover:bg-pink-700 transition duration-300 ease-in-out">
                        <Link to={`/search/${str}`} className="text-white text-xs md:text-sm">{str}</Link>
                    </div>
                </div>
            ))}
        </div>
   
        <div className="md:hidden"> 
            {limited.length > maxTagsToShow && (
                <button onClick={toggleShowAllTags} className="bg-pink-600 rounded-md p-2 text-white ">
                    {showAllTags ? 'Mostrar menos' : `Mostrar más (${limited.length - maxTagsToShow} más)`}
                </button>
            )}
        </div>
        </>
    );
};
