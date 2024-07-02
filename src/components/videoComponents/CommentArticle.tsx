/* eslint-disable @typescript-eslint/no-explicit-any */
import { Like } from "../icons/Like";
import { Response } from "../icons/Response";
import { ResponsePost } from "../icons/ResponsePost";
import { Trash } from "../icons/Trash";
import moment from "moment";
import { ReponsePostForm } from "./ReponsePostForm";
import { ResponseArticle } from "./ResponseArticle";
import { useShowForm, useShowArticle } from "../../customsHooks/customsHooks";


interface Props {
   id: number;
   created: string;
   nick_name: string;
   content: string;   
}

export const CommentArticle: React.FC<Props>=  ({id, created, nick_name, content}) => {
  const { showForm, handleFormResponse } = useShowForm()
  const { currentUser, responses, showArticle, setShowArticle } = useShowArticle(id, nick_name)

  return (
<>
<article className="relative flex antialiased" key={id} id="article">
  <div className="container px-0 mx-auto">
    <div className="flex-col w-full py-4 mx-auto sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm ">
      <div className="flex flex-row flex-wrap">
        <img className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full ml-3" alt="Noob master's avatar" src="https://quarantine.doh.gov.ph/wp-content/uploads/2016/12/no-image-icon-md.png" />
        <div className="flex-col mt-1">
          <div className="flex items-center flex-1 px-4 font-bold leading-tight text-white">{nick_name}
            <span className="ml-2 text-xs font-normal text-gray-500">{moment(created, "YYYYMMDD hhmmss").fromNow()}</span>
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="px-2 ml-2 text-sm sm:text-lg font-medium leading-loose text-white-300 overflow-wrap break-word block max-w-xl">
                {content}
              </div>
            </div>
          </div>
          <button onClick={handleFormResponse} className="inline-flex items-center px-1 pt-2 ml-1 flex-column" aria-label="button response">
           <Response />
          </button>
          <button className="inline-flex items-center px-1 -ml-1 flex-column" aria-label="button like">
            <Like/>
          </button>
          {currentUser &&<button className="inline-flex items-center px-1 -ml-1 flex-column" aria-label="button trash">
            <Trash/>
          </button>}
          <button onClick={()=>{ !showArticle ? setShowArticle(true) : setShowArticle(false) }} className="inline-flex items-center px-1 -ml-1 flex-column" aria-label="button like">
            <div className="flex flex-row"><ResponsePost/>{responses.length}</div>
          </button>
          
        </div>
      </div>
    </div>
    {showForm && <div className="ms-20"><ReponsePostForm id={id}/></div>}
    {showArticle && responses.length > 0 ? responses.map((item : { id: number; nickname: string; content: string; createdAt: string }) => (<div className="ms-20" key={item.id}><ResponseArticle user={currentUser} id={item.id} created={item.createdAt} _nickname={item.nickname} content={item.content}/></div>)) : <div></div>}
  </div>
  
</article>
    </>
  );
}


