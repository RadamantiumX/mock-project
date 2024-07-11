
interface Props {
    preview: string
    title: string | undefined
    key: number
}
export const PicCard:React.FC<Props> = ({preview, title, key}) => {
  return (
    <article>
        <div>
           <img src={preview} alt={`${title} Nº${key}`} title={`This is a Vanilla Leak Image for: ${title}`}/>
        </div>
    </article>
  )
}
