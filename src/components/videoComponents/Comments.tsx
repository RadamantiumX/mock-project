/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommentArticle } from "./CommentArticle"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getPostsSource } from "../../redux/postSources/postsSlice"
import { getReplysSource } from "../../redux/replySources/replysSlice"
import { useEffect } from "react"
import { useStateContext } from "../../contexts/ContextProvider"
import { SingInButton } from "./SingInButton"
import { PostCommentForm } from "./PostCommentForm"

export const Comments = () => {
  const { videoId, token }: any = useStateContext()
  const data: any = useAppSelector(state => state.posts.data)
  
  const dispatch = useAppDispatch()

  useEffect(() => { 
    dispatch(getReplysSource())

    if (videoId) {
      dispatch(getPostsSource(videoId))
    }
  }, [videoId])

  return (
    <section className="flex flex-col mt-5 mb-20">
    <div className="flex flex-col p-5 glass">
      {data.posts?.length > 0 ? (
        data.posts.map((item: { id: number; nickname: string; content: string; createdAt: string }) => (
          <div key={item.id} className="mb-4">
            <CommentArticle id={item.id} created={item.createdAt} nick_name={item.nickname} content={item.content} />
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center ml-4 space-y-1 text-lg sm:flex-row sm:items-start sm:space-x-4 sm:text-2xl">
          <h5 className="opacity-30">No comments yet... Be the first </h5>
          {token ? <PostCommentForm title={'Comment'}/> : <SingInButton/>}
        </div>
      )}
    </div>
  </section>
  
  )
}
