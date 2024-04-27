interface Props{
    notification?: string 
}

export const Notifications:React.FC<Props> = ({notification}) => {
  return (
    <div className="notification">{notification}</div>
  )
}
