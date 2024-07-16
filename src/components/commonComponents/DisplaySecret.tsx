import { EyeOff } from "../icons/EyeOff"
import { EyeOn } from "../icons/EyeOn"

interface Props{
    set: boolean
    unSet: boolean
    handleDisplay:()=>void
}

export const DisplaySecret:React.FC<Props> = ({set, unSet, handleDisplay}) => {
  return (
    <button onClick={handleDisplay} title="Show or hide password">{set && <EyeOn/>}{unSet && <EyeOff/>}</button>
  )
}
