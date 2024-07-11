/* eslint-disable @typescript-eslint/no-explicit-any */
type ActionProps = {
    setError: any
    message: string
}

export const AlertSignal:React.FC<ActionProps> = ({setError, message}) => {
  return (
    <div className="alert">
  <span onClick={()=>setError('')} className="closebtn" title="Close Alert">&times;</span> 
  <strong>Error!</strong> {message}
</div>
  )
}
