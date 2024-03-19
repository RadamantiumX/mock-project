import { Link } from "react-router-dom"

export const NotResults = () => {
  return (
    <section className="h-screen w-full">
      <div className="flex flex-col items-center justify-center"> 
        <h2 className="text-5xl">Not Results founded</h2>
        <Link to="/home">Return to main page</Link>
     </div> 
    </section>
  )
}
