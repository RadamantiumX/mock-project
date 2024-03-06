

export default function Header () {
   
  const tags = [
    {
      id: "#tag1",
      name: "tagline-1"
    },
    {
      id: "#tag2",
      name: "tagline-2"
    },
    {
      id: "#tag3",
      name: "tagline-3"
    },
    {
      id: "#tag4",
      name: "tagline-4"
    },

  ]
  

  return (
    <header className="header w-full h-1/5">
      <div className="flex flex-row gap-5 mt-2">
       {
         tags.map((tag, index) => {
           return (
             <div className="border rounded-lg p-1" key={index}>
               <a href={tag.id}>{tag.name}</a>
             </div>
           )
         })
       }
       </div>
    </header>
  )
}

