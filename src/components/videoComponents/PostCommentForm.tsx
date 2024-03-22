export const PostCommentForm = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-2xl">Make a Comment</h3>
      <form className="flex flex-col w-5/6">
        <textarea className="border rounded-md bg-gray-600 p-2" name="comment" id="" cols={30} rows={4} placeholder="Write your comment here...">
        </textarea>
        <button className="border rounded-md bg-red-700 mt-4 font-bold hover:bg-red-600">Send</button>
       </form>
    </section>
  )
}
