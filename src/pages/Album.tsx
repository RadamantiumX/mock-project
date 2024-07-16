import { Link, useParams } from 'react-router-dom';
import { useAlbumContent } from '../customsHooks/photosHooks';
import { PicCard } from '../components/albumComponents/PicCard';
import { ArrowRight } from '../components/icons/ArrowRight';

interface RouteParams {
  album: string;
  tag: string;
}

export const Album: React.FC = () => {
  const { album, tag } = useParams<RouteParams>();
  const { pics, title } = useAlbumContent(tag, album);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div className="col-span-2 p-4">
        <ol className="flex items-center mt-5 mb-10 whitespace-nowrap">
          <li className="inline-flex items-center">
            <Link
              to="/photos?tag=all&page=1"
              className="flex items-center text-2xl text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-pink-600 dark:focus:text-pink-600"
            >
              Photo
            </Link>
           <ArrowRight/>
          </li>
          <li className="inline-flex items-center">
            <Link
              to={`/photos?tag=${tag.toLowerCase()}&page=1`}
              className="flex items-center text-2xl text-gray-500 hover:text-pink-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-pink-600 dark:focus:text-pink-600"
            >
              {tag}
            <ArrowRight/>
            </Link>
          </li>
          <li className="inline-flex items-center text-2xl font-semibold text-gray-800 truncate dark:text-neutral-200" aria-current="page">
            {title}
          </li>
        </ol>
        <div className="grid grid-cols-3 gap-5 md:grid-cols-4">
          {pics.map((item, key) => (
            <PicCard preview={item.preview} title={title} key={key} />
          ))}
        </div>
      </div>
      <aside className="col-span-1 p-4">
        
      </aside>
    </div>
  );
};

export default Album;
