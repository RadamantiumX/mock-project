/**
 * 
 * @param props 
 * @returns void
 * 
 * Recived click event in this component ▶
 */

export const LoadButton = (props: {onClick:()=>void}) => {
  return (
    <div className="flex flex-col items-center mb-10">
        <button className="border rounded-md bg-red-700 p-2" onClick={props.onClick}>
            More Videos...
        </button>
    </div>
  )
}


