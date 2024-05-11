/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
    id: string,
    default_thumb: string,
    title: string
}

export const VideoFavCard:React.FC<Props> = ({id, default_thumb, title}) => {
  return (
    <article className="m-2">
        <div className="flex flex-row gap-5" key={id}>
            <img className="border rounded-md" src={default_thumb} alt={title} />
            <div className="flex flex-col">
            <h5 className="text-justify">{title}</h5>
            <p>1 month ago</p>
            </div>
        </div>
    </article>
  )
}
