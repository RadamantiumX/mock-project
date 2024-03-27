import { Link } from "react-router-dom";
import Logo from "../assets/project/logoSecundario.png"

export default function NotFound() {
    return (
      <main className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9'" }}>
        <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <img src={Logo} alt="logo" />
          <div className="text-9xl font-bold text-pink-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Oops! Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The page you're looking for seems to have gone on a little adventure. Don't
            worry, we'll help you find your way back home.</p>
          <Link to="/"
            className="inline-block bg-pink-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-pink-700 transition-colors duration-300">
            Go Back Home
          </Link>
        </div>
      </main>
    );
}
