import { Videos } from "../components/displayComponents/Videos";
import { LoadButton } from "../components/commonComponents/LoadButton";
import SkeletonLoader from "../components/commonComponents/SkeletonLoader"; 
import { useHomeVideos } from "../customsHooks/customsHooks";

export default function Home() {

  const {isLoading, eporner, handleResults} = useHomeVideos()
 
  return (
    <main>
      <Videos source={eporner} />
      {isLoading ? <SkeletonLoader /> : null} 
      <LoadButton onClick={handleResults} title={"Load more Videos.."} />
    </main>
  );
}
