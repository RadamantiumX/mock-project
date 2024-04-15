import { Link } from "react-router-dom"
import Logo from "../../assets/project/logo.png"


export default function Footer() {
  return (
    <footer  className="bg-black">
      <div className="max-w-screen-xl mx-auto ">
        <div className="border-t-2 border-gray-500 "></div>
      </div>
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Link style={{ width: "16rem" }} to="/"><img src={Logo} alt="Logo DirtyHub" /></Link>
            </div>

            <p
              className="max-w-md mx-auto mt-6 leading-relaxed text-center font-medium text-white sm:max-w-xs sm:mx-0 sm:text-left"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4"
          >
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">VanillaLeak</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a className="text-white transition hover:text-white/75" href="/">
                      Category
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="/">
                      Stuff
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="/">
                      Locates
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="/">
                      About
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Legal</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a className="text-white transition hover:text-white/75" href="/">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="/">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 "> </div>
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-400">
            <span className="block sm:inline"></span>
            <span>&middot;</span>
          </p>
          <p className="mt-8 text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; 2024 Lorem
          </p>
        </div>

      </div>
    </footer>
  )
}
