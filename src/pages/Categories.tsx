import { VideosResults } from "../components/searchComponents/VideosResults"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { NotResults } from "../components/commonComponents/NotResults"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getEpornerSource } from "../redux/epornerSources/sourceSlice"
import { LoadButton } from "../components/commonComponents/LoadButton"

type Params = {
  category: string
}

export default function Categories() {
  const [counter, setCounter] = useState<number>(7)
  const { category } = useParams<Params>()
  const replaceSpace = category?.replace(/ /gi, "") // Replace white spaces for unify the string 

  const dispatch = useAppDispatch()
  const eporner = useAppSelector(state => state.source.data)

  const handleResults = () =>{
    setCounter(counter + 7)
  }
  
  useEffect(()=>{ 
    const payload = replaceSpace?.concat(" ", counter.toString())
    // Prevent EXTRA typing ♻
    if (category !== undefined ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(getEpornerSource(payload as any))
    
  }

  },[category, counter]) // ✅Component data is refreshed when "category" is updated
  return (
    <main>
     <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl text-center sm:text-left ml-5 mt-9"><span className="font-bold text-pink-600">{category}</span> Videos</h1>
      {
        eporner?.length !== 0 ? 
        <div className="mt-8">
          <VideosResults source={eporner} />
          <LoadButton onClick={handleResults} title={'Load more videos...'} />
        </div>
        : <NotResults />
      }
    </main>
  )
}
/**
 * ❗ Estas son todas las categorias
 * 
 * Anal
 * Japanese
 * HD Porn 1080p
 * Teen
 * Asian
 * Milf
 * Big tits
 * VR Porn
 * Ebony
 * Gay
 * Amateur
 * Lesbian
 * Shemale
 * Mature
 * BBW
 * POV
 * Creampie
 * Interracial
 * Hentai
 * Big Ass
 * Threesome
 * Hardcore
 * Homemade
 * Latina
 * Blowjob
 * Indian
 * BDSM
 * Orgy
 * Vintage
 * Big Dick
 * Blonde
 * Masturbation
 * Group Sex
 * Cumshot
 * Petite
 * Toys
 * Public
 * Fat
 * Massage
 * Webcam
 * Double Penetration
 * Lingerie
 * Squirt
 * Brunnete
 * Older man
 * Redhead
 * Office
 * Outdoor
 * Handjob
 * Bukkake
 * Nurses
 * Bondage
 * Footjob
 * Fisting
 * Small Tits
 * Uniform
 * Striptease
 * Bisexual
 * Housewife
 * Doctor
 * ASMR
 * 
 */