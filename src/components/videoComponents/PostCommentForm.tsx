export const PostCommentForm = () => {
  return (
    <>
<div id="commentsContainer" className="w-full md:w-1/2 p-2 pt-4 rounded shadow-lg mx-auto sm:ml-4">
  <div className="flex">
    <div>
      <h2 className="font-semibold"><i className="fa-regular fa-comment mr-2 ml-3"></i> Comment <span className="font-bold">19</span> </h2>
    </div>
  </div>
  <div className="mt-3 p-3">
    <textarea className="border p-2 rounded w-full" placeholder="Write your comment here..."></textarea>
  </div>
  <div className="flex justify-between mx-3">
    <div>
      <button className="w-full md:w-auto px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button>
    </div>
    <div></div>
  </div>
</div>

    </>
  )
}
