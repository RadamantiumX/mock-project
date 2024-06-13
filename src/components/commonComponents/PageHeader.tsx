interface Props{
    title: string
}

export const PageHeader:React.FC<Props> = ({title}) => {
  return (
    <div className="flex">
    <h1 className="text-3xl font-bold textTitleVideo">{title}</h1>
   </div>
  )
}
