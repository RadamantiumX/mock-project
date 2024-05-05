/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommentArticle } from "./CommentArticle"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getPostsSource } from "../../redux/postSources/postsSlice"
import { getReplysSource } from "../../redux/replySources/replysSlice"
import { useEffect } from "react"
import { useStateContext } from "../../contexts/ContextProvider"


export const Comments = () => {
  const { videoId }:any = useStateContext()
  const data:any = useAppSelector(state => state.posts.data )
  
  const dispatch = useAppDispatch()

useEffect(()=>{ 
  dispatch(getReplysSource())

  if(videoId){
    dispatch(getPostsSource(videoId))
  }

},[videoId])
  return (
    <section className="flex flex-col  mt-5 mb-5">
        <div className="flex flex-col">
           {
             data.posts?.length > 0 ? data.posts.map((item: { id: number; nickname: string; content: string; createdAt: string })=> (
              <div key={item.id}><CommentArticle  id={item.id} created={item.createdAt} nick_name={item.nickname} content={item.content} /> </div>          
             )): <h5 className="ml-5 text-2xl">No comments yet... Be the first 😎</h5>
           }
        </div>
    </section>
  )
}


