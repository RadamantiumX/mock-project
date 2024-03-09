import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <main>
         <h1>404 - NOT FOUND</h1>
         <Link to="/">To main page</Link>
        </main>
    )
}