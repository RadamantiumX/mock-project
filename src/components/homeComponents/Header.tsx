import './header.scss'


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
    
<div className="tags black flex flex-wrap justify-center">
  {tags.map((tag, index) => (
    <div className="mr-1 mb-1" key={index}> 
      <a href={tag.id} className="block px-4 py-2 rounded-full border-2 border-transparent hover:bg-white hover:text-black">
        {tag.name}
      </a>
    </div>
  ))}
</div>

  )
}

