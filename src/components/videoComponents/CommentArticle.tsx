interface Props {
   id: number;
   nick_name: string;
   comment: string;   
}

export const CommentArticle: React.FC<Props>=  ({id, nick_name, comment}) => {
  return (
    <article
      className="flex flex-col text-left mt-2 mb-2 border rounded-md p-1"
      key={id}
    >
      <h5>
        <span className="font-bold text-red-600">Posted by:</span>{" "}
        <span className="italic">{nick_name}</span>
      </h5>
      <p>
        <span className="font-bold text-red-600">Comment:</span> {comment}
      </p>
    </article>
  );
}


