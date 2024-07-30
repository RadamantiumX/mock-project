interface Props{
    title: string
}

export const PageHeader:React.FC<Props> = ({title}) => {
  return (

    <h1 className="text-3xl font-bold textTitleVideo">{title}</h1>

  )
}
