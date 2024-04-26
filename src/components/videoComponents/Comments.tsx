import { CommentArticle } from "./CommentArticle"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getPostsSource } from "../../redux/postSources/postsSlice"
import { useEffect } from "react"

export const Comments = () => {
  const posts = useAppSelector( state => state.posts.data )
  const dispatch = useAppDispatch()
  const MOCK_DATA = [
  {id:58,nick_name:"droulston0",comment:"mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus"},
  {id:97,nick_name:"fcrumpton1",comment:"eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum"},
  {id:98,nick_name:"wleman2",comment:"diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in"},
  {id:98,nick_name:"rmeo3",comment:"duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim"},
  {id:49,nick_name:"oeverly4",comment:"duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus"},
  {id:24,nick_name:"gfiddiman5",comment:"maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede"},
  {id:100,nick_name:"fgianinotti6",comment:"erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate"},
  {id:67,nick_name:"hlearman7",comment:"et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien"},
  {id:65,nick_name:"morr8",comment:"enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem"},
  {id:35,nick_name:"mmclagan9",comment:"libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu"}
]
useEffect(()=>{
  dispatch(getPostsSource('yRqakpnxc6e'))
},[])
  return (
    <section className="flex flex-col  mt-5 mb-5">
        <div className="flex flex-col">
           {
             MOCK_DATA.length > 0 ? MOCK_DATA.map((item)=> (
               <CommentArticle id={item.id} nick_name={item.nick_name} comment={item.comment} /> 
             )): <h5>No comments yet... Be the first 😎</h5>
           }
        </div>
    </section>
  )
}


