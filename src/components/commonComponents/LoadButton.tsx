/**
 * 
 * @param props 
 * @returns void
 * 
 * Recived click event in this component ▶
 */

export const LoadButton = (props: {onClick:()=>void, title: string}) => {
  return (

    <div style={{marginBottom:"6rem"}} className="flex justify-center ">
    <button 
      type="button" 
      className="ml-4 text-white bg-[#dd2471] hover:bg-[#dd2471]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#dd2471]/80 dark:focus:ring-[#dd2471]/40 mr-2 mb-2"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  </div>
  
    // <div style={{marginBottom:"9rem"}} className="flex flex-col items-center ">
    //     <button className="border rounded-md bg-red-700 p-2" onClick={props.onClick}>
    //         {props.title}
    //     </button>
    // </div>
  )
}


