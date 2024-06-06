import { useEffect, useState } from "react"
interface Props {
    id?: string 
}

export const Frame:React.FC<Props> = ({ id }) => {
  const [redtubeId, setRedtubeId] = useState("")

  useEffect(()=>{
    if(id?.includes("redtube")){
        const arrayId = id.split("redtube")
        setRedtubeId(arrayId[0])
    }
  },[redtubeId])
  return (
    <div className="relative overflow-hidden" style={{ maxWidth: "1150px", width: "100%" }}>
            <div style={{ paddingBottom: "54.25%", position: "relative" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full desktop-height"
                src={!id?.includes("redtube")?`https://eporner.com/embed/${id}`: `https://embed.redtube.com/?id=${redtubeId}`}
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;gamepad;geolocation;layout-animations"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
  )
}


