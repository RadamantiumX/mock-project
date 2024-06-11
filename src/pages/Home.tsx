import { useEffect, useState } from "react";
import { Videos } from "../components/displayComponents/Videos";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getEpornerSource } from "../redux/epornerSources/sourceSlice";
import { LoadButton } from "../components/commonComponents/LoadButton";
import SkeletonLoader from "../components/commonComponents/SkeletonLoader"; 

export default function Home() {
  const [counter, setCounter] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const dispatch = useAppDispatch();
  const eporner = useAppSelector((state) => state.source.data);

  const handleResults = () => {
    setIsLoading(true); 
    setCounter(counter + 10);
  };

  useEffect(() => {
    dispatch(getEpornerSource(counter)).then(() => {
      setIsLoading(false); 
    });
  }, [counter]);

  return (
    <main>
      <Videos source={eporner} />
      {isLoading ? <SkeletonLoader /> : null} 
      <LoadButton onClick={handleResults} title={"Load more Videos.."} />
    </main>
  );
}
