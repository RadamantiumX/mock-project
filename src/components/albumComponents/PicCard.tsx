import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  preview: string;
  title: string | undefined;
  key: number;
}

export const PicCard: React.FC<Props> = ({ preview, title, key }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-md">
        <div className="relative">
          <img
            className="h-auto max-w-full transition-transform duration-300 transform rounded-lg cursor-pointer hover:scale-110"
            src={preview}
            alt={`${title} Nº${key}`}
            title={`This is a Vanilla Leak Image for: ${title}`}
            onClick={() => setOpen(true)}
          />
        </div>
      </article>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: preview }]}
      />
    </>
  );
};
