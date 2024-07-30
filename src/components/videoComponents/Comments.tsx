// Comments.tsx
import { CommentArticle } from "./CommentArticle"
import { PostCommentForm } from "./PostCommentForm"
import { usePosts } from "../../customsHooks/videoHooks"
import { useParams } from "react-router-dom"

export const Comments = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id }: any = useParams()
  const { token, data } = usePosts(id)

  return (
    <section className="flex flex-col mt-5 mb-20">
      <div className="flex flex-col p-5 glass">
        <PostCommentForm title={'Comment'} isAuthenticated={!!token} />

        {data.posts?.length > 0 ? (
          <>
            {data.posts.map((item: { id: number; nickname: string; content: string; createdAt: string }) => (
              <div key={item.id} className="mb-4">
                <CommentArticle id={item.id} created={item.createdAt} nick_name={item.nickname} content={item.content} />
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center mt-5 ml-4 space-y-1 text-xl sm:flex-row sm:items-start sm:space-x-4 sm:text-1xl">
            <h6 className="opacity-30">No comments yet... Be the first</h6>
          </div>
        )}
      </div>
    </section>
  )
}
