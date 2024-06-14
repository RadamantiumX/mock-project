interface Props{
  title: string
  preview: string
}

export const AlbumCard:React.FC<Props> = ({title, preview}) => {
  return (
    <article>
       <div>
          <h4>{title}</h4>
          <img src={preview} alt={`${title} image`} title={`This is a Vanilla Leak image -${title}-`}/>
       </div>
    </article>
  )
}
