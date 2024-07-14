interface Props{
  title: string
  preview: string
}

export const AlbumCard:React.FC<Props> = ({title, preview}) => {
  return (
    <>
 <div className="relative max-w-sm mx-auto rounded-lg shadow-md cursor-pointer">
              <img src={preview} alt={`${title} image`}  title={`This is a Vanilla Leak image -${title}-`} className="object-cover w-full h-auto rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50 rounded-b-lg h-13">
                <h3 className="text-sm font-semibold">{title}</h3>
              </div>
            </div>

    </>
  )
}
