import { Link } from 'react-router-dom'
import Logo from '../../assets/project/logo.png'
interface Props{
    name: string | undefined
    cover: string | undefined
    about: string | undefined
    avatar: string | undefined
    height: string | undefined
    weight: string | undefined
    gender: string | undefined
}

export const ModelCardIndex:React.FC<Props> = ({name, cover, about, avatar, height, weight, gender}) => {
  return (
    <>
    {name !== undefined ? (
    <section className="relative pt-40 pb-24">
        <>
            <img src={cover} alt={`${name} cover`} title={`${name} cover image from PORN-HUB`} className="absolute top-0 left-0 z-0 object-cover w-full h-60"/>
            <div className="relative z-10 w-full px-6 mx-auto max-w-7xl md:px-8">
                <div className="flex items-center justify-center mb-5 sm:justify-start">
                    <img src={avatar} alt={`${name} profile image`} title={`${name} profile image from PORN-HUB`} className="w-32 h-32 border-4 border-white border-solid rounded-full"/>
                </div>
                <div className="flex flex-col items-center justify-center mb-5 sm:flex-row max-sm:gap-5 sm:justify-between">
                    <div className="block text-center sm:text-left">
                        <h3 className="mb-1 text-4xl font-bold text-gray-300 font-manrope">{name}</h3>
                        <div className="mx-auto max-w-prose sm:mx-0">
                            <p className="text-base font-normal leading-7 text-gray-500">{about}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 max-sm:flex-wrap max-sm:justify-center">
                    <button  className="px-6 py-3 text-sm font-semibold leading-6 text-gray-700 transition-all duration-500 rounded-full bg-stone-100 hover:bg-stone-200 hover:text-gray-900">{gender}</button>
                    <button  className="px-6 py-3 text-sm font-semibold leading-6 text-gray-700 transition-all duration-500 rounded-full bg-stone-100 hover:bg-stone-200 hover:text-gray-900">{height}</button>
                    <button  className="px-6 py-3 text-sm font-semibold leading-6 text-gray-700 transition-all duration-500 rounded-full bg-stone-100 hover:bg-stone-200 hover:text-gray-900">{weight}</button>
                </div>
            </div>
        </>
</section>
    ) : (
      <div className="py-2 my-0 mb-8 overflow-visible bg-black">
      <div className="flex flex-col items-center text-center text-white">
        <img src={Logo}/>
        <h2 className="text-2xl font-bold lg:text-4xl">Not Available</h2>
        
        <Link className="mt-8 rounded-md bg-white px-5 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-200 transition focus:outline-none focus:ring focus:border-blue-300"
          to="/models?page=1">Continue exploring more models</Link>
      </div>
    </div>
    )}


    </>

  )
}
