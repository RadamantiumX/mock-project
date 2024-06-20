import { VideosResults } from "../components/searchComponents/VideosResults"
import { useParams } from "react-router-dom"
import { NotResults } from "../components/commonComponents/NotResults"
import { LoadButton } from "../components/commonComponents/LoadButton"
import { useVideosForCategory } from "../customsHooks/customsHooks"

type Params = {
  category: string
}

export default function Categories() {
  const { category } = useParams<Params>()

  const {eporner, handleResults} = useVideosForCategory(category)
  
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