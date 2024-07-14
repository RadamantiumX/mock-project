import { Link, useLocation } from "react-router-dom";

interface Props {
  tag: string;
  fill: string;
}

export const TagCard: React.FC<Props> = ({ tag }) => {
  const location = useLocation();
  const isSelected = location.search.includes(`tag=${tag.toLowerCase()}`);

  return (
    <Link
      to={`/photos?tag=${tag.toLowerCase()}&page=1`}
      rel="noopener noreferrer"
      className={`flex items-center p-2 space-x-3 pl-5 rounded-md ${isSelected ? "bg-white text-black" : ""}`}
    >
  
      <span>{tag}</span>
    </Link>
  );
};
