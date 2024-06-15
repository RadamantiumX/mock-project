import { Link } from "react-router-dom";

interface Props{
    tag: string
    fill: string
}

export const TagCard:React.FC<Props> = ({tag, fill}) => {
  return (
    <Link to={`/photos?tag=${tag.toLowerCase()}`} className={`border rounded-md px-2 bg-${fill}`}>
      
      {tag}
    </Link>
  );
};
