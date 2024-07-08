import moment from "moment";
import { ActionsButtons } from "./ActionsButtons";
import { useCurrentUser } from "../../customsHooks/videoHooks";

interface Props{
   user: boolean,
   id: number,
   created: string | null,
   _nickname: string | null,
   content: string | null
}

export const ResponseArticle:React.FC<Props> = ({ id, created, _nickname, content}) => {
  const { currentUser } = useCurrentUser(_nickname)
 
  return (
<>
<article className="relative flex antialiased" key={id} id="article-response">
  <div className="container px-0 mx-auto">
    <div className="flex-col w-full py-4 mx-auto sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm ">
      <div className="flex flex-row flex-wrap">
        <img className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full ml-3" alt="Noob master's avatar" src="https://quarantine.doh.gov.ph/wp-content/uploads/2016/12/no-image-icon-md.png" />
        <div className="flex-col mt-1">
          <div className="flex items-center flex-1 px-4 font-bold leading-tight text-white">{_nickname}
            <span className="ml-2 text-xs font-normal text-gray-500">{moment(created, "YYYYMMDD hhmmss").fromNow()}</span>
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="px-2 ml-2 text-sm sm:text-lg font-medium leading-loose text-white-300 overflow-wrap break-word block max-w-xl">
                {content}
              </div>
            </div>
          </div>
          <ActionsButtons path={'response'} id={id}  handleFormResponse={null} currentUser={currentUser} responses={[]} showArticle={null} setShowArticle={null}/>        
        </div>
      </div>
     
    </div>
   
  </div>
  
</article>
    </>
  );
}


