import { Videos } from "../components/displayComponents/Videos";
import {SkeletonLoader} from "../components/commonComponents/SkeletonLoader"; 
import { useHomeVideos } from "../customsHooks/homeHooks";
import { useRange, useQuery } from "../customsHooks/customsHooks";
import { Pagination } from "../components/commonComponents/Pagination";
import { Spinner } from "../components/commonComponents/Spinner";

export default function Home() {
  const query = useQuery()
  const currentPage = query.get('page')
  const {isLoading, eporner } = useHomeVideos(currentPage === null ? 1 : parseInt(currentPage))
  const { rangePages } = useRange(1, Math.round(eporner.total_pages))
  return (
    <main>
      {eporner.length !== 0 ? <Videos source={eporner?.videos} /> : <Spinner/>}
      {isLoading ? <SkeletonLoader /> : null} 
      {eporner.length !== 0 && <Pagination itemsPage={rangePages} currentPage={currentPage === null ? 1: parseInt(currentPage)} optParam={null}/>}
    </main>
  );
}
