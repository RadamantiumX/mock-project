
interface Props{
    name: string
    photo: string
    views: string
}

export const CardsModels:React.FC<Props> = ({name, photo, views}) => {
  return (
     <>
   <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-2 mt-10 mb-5">
   <div className="flex flex-col items-center">
    <div className="bg-white shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl w-64 h-auto mb-2">
        <a href="#">
            <img src={photo} alt="Product" className="object-cover rounded-t-xl w-full h-96" />
        </a>
    </div>
    <div className="px-4 py-3 w-72 ">
        <span className="text-gray-400 mr-3 uppercase text-xs">{views} Views</span>
        <p className="text-lg font-bold text-white truncate block capitalize">{name}</p>
    </div>
</div>
</section>


     
     </>
  )
}
