/* eslint-disable @typescript-eslint/no-explicit-any */
import "./videoSelected.scss";
import { Eye } from "../icons/Eye";
import { LikeVideo } from "./LikeVideo";
import { Frame } from "./Frame";
import { useTruncateTitle, useFetchFav } from "../../customsHooks/videoHooks";
import { ShareButton, LikeButton, CommentsButton } from "./VideoButtons";

interface Props {
  id?: string;
  title?: string;
  views?: number;
}

export const VideoSelected: React.FC<Props> = ({ id, title, views }) => {
  const { filled, innerButton, handleFav, commentsCount } = useFetchFav(id);
  const shortTitle = useTruncateTitle(title); // Use the custom Hook to truncate

  return (
    <>
      <section
        style={{ marginTop: "4rem" }}
        className="lg:mr-10 lg:ml-10 mr-1 ml-1"
      >
        <div className="mt-7 mb-7  h-full relative w-full lg:w-auto mx-auto">
          {" "}
          {/* Modificar clase w-full y agregar lg:w-auto y mx-auto */}
          <h2
            style={{ fontSize: "1.7rem" }}
            className="flex-1 text-xl md:text-2xl font-bold text-gray-100 mb-5 truncate-multiline font-title"
          >
            {shortTitle}
            <span
              style={{ verticalAlign: "middle" }}
              className="mt-1 shrink-0 ml-3 text-sm sm:text-lg inline-flex items-center gap-2"
            >
              <Eye size={"w-6 h-6 "} />
              <span style={{ verticalAlign: "middle" }}>{views}</span>
            </span>
          </h2>
          <Frame id={id} />
          {/* Video Embed */}
          <div className="flex flex-row mb-10 mt-4 items-center  lg:mr-1 lg:ml-1 mr-3 ml-3">
            <CommentsButton count={commentsCount.count}/>
            <div className="ml-3"></div>
            <LikeButton
              handleFav={handleFav}
              filled={filled}
              innerButton={innerButton}
            />
            <div className="border-l border-gray-300 h-6 mx-2"></div>{" "}
            {/* Divider vertical */}
            <ShareButton />
            <div className="border-l border-gray-300 h-6 mx-2"></div>{" "}
            {/* Divider vertical */}
            <LikeVideo videoId={id} />
          </div>
        </div>
      </section>
    </>
  );
};
