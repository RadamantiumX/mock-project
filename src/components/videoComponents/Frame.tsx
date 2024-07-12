/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEmbed } from "../../customsHooks/videoHooks"
interface Props {
    id?: any 
}

export const Frame:React.FC<Props> = ({ id }) => {
 const { redtubeId } = useEmbed(id) 
 
  return (
    <div className="relative overflow-hidden responsive-width" style={{ maxWidth: "1150px" }}>
    <div style={{ paddingBottom: "54.25%", position: "relative" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full desktop-height"
        src={!id?.includes("redtube") ? `https://eporner.com/embed/${id}` : `https://embed.redtube.com/?id=${redtubeId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; gamepad; geolocation; layout-animations; attribution-reporting; xr-spatial-tracking"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
  )
}


