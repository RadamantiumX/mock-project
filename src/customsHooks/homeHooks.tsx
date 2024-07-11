/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getEpornerSource } from "../redux/epornerSources/sourceSlice";

// Hay q pasarle la pagina
export const useHomeVideos = (page:any) => {
    const [counter, setCounter] = useState<number>(12);
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const dispatch = useAppDispatch();
    const eporner = useAppSelector((state) => state.source.data);
  
    const handleResults = () => {
      setIsLoading(true); 
      setCounter(counter + 10);
    };
  
    useEffect(() => {
      dispatch(getEpornerSource(page)).then(() => {
        setIsLoading(false); 
      });
    }, [counter]);
  
    return {isLoading, eporner, handleResults}
  }