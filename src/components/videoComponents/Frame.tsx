interface Props {
    id?: string 
}

export const Frame:React.FC<Props> = ({ id }) => {
  return (
    <div className="relative overflow-hidden" style={{ maxWidth: "1150px", width: "100%" }}>
            <div style={{ paddingBottom: "54.25%", position: "relative" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full desktop-height"
                src={`https://eporner.com/embed/${id}`}
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
  )
}


