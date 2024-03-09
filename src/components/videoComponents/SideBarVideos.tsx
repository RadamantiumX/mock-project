
export const SideBarVideos = () => {
   
  const relatedVideos = [
    { 
        title: "Video-1",
        src: "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-play-video-icon-graphic-design-template-vector-png-image_530837.jpg"
    },
    { 
        title: "Video-2",
        src: "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-play-video-icon-graphic-design-template-vector-png-image_530837.jpg"
    },
    { 
        title: "Video-3",
        src: "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-play-video-icon-graphic-design-template-vector-png-image_530837.jpg"
    },
    { 
        title: "Video-4",
        src: "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-play-video-icon-graphic-design-template-vector-png-image_530837.jpg"
    },
    { 
        title: "Video-5",
        src: "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-play-video-icon-graphic-design-template-vector-png-image_530837.jpg"
    },
    { 
        title: "Video-6",
        src: "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-play-video-icon-graphic-design-template-vector-png-image_530837.jpg"
    },
    { 
        title: "Video-7",
        src: "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-play-video-icon-graphic-design-template-vector-png-image_530837.jpg"
    },

  ]  

  return (
    <aside>
        <h3>Related Videos</h3>
        <div>
            {relatedVideos.map((video,index) => (
                <article key={index}>
                    <img className="size-60 border-gray-600 rounded-md" src={video.src} alt={video.title} />
                    <h4>{video.title}</h4>
                </article>
            ))}
        </div>
    </aside>
  )
}

