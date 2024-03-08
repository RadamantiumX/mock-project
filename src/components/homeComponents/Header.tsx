

export default function Header () {
   
  const tags = [
    {
      id: "#tag1",
      name: "Some item"
    },
    {
      id: "#tag2",
      name: "Another item"
    },
    {
      id: "#tag3",
      name: "One more item"
    },
    {
      id: "#tag4",
      name: "This is another"
    },
    {
      id: "#tag5",
      name: "One more item added"
    },
    {
      id: "#tag6",
      name: "This is the item that was added"
    },
    {
      id: "#tag7",
      name: "Another, another item added"
    }

  ]
  

  return (
    <header className="header w-full h-20">
      <div className="flex flex-row justify-center gap-5 mt-2">
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

