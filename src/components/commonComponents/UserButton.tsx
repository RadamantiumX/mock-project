export const UserButton = (props: {onClick:()=>void, nickname: string | null}) => {
  return (
    <div>
    <img className="rounded-full" src={`https://ui-avatars.com/api/?name=${props.nickname}&background=0D8ABC&color=fff`} alt="User Avatar" title="Avatar for Vanilla Leak User"/>
    <button onClick={props.onClick}>Logout</button>
    </div>
  )
}


