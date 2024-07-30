
import { MessageCircle } from "../icons/MessageCircle"
import { useParams } from "react-router-dom"
import { useNewPost } from "../../customsHooks/videoHooks"
import { SingInButton } from "./SingInButton"

interface Props {
  title: string
  isAuthenticated: boolean
}

export const PostCommentForm: React.FC<Props> = ({ title, isAuthenticated }) => {
  const { id } = useParams()
  const { handleSubmit, content, setContent } = useNewPost(id)

  return (
    <div id="commentsContainer" className="w-full p-2 pt-4 mx-auto rounded shadow-lg md:w-1/2 sm:ml-4">
      <div className="flex flex-col">
        <div>
          <h2 className="flex flex-row gap-1 font-semibold"><MessageCircle /> {title} </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="p-3 mt-3">
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded resize-none"
          placeholder={`Write your ${title.toLowerCase()} here...`}
        ></textarea>
        <div className="flex justify-between mx-3 mt-3">
          <div>
            {isAuthenticated ? (
              <button
                type="submit"
                className="w-full px-4 py-1 font-light text-white bg-gray-800 rounded md:w-auto hover:bg-gray-700"
              >
                Submit
              </button>
            ) : (
              <div className="flex items-center">
                <SingInButton />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
