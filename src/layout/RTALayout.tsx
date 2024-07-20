import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Logo from "../assets/project/logo.png";
import "./rtaLayout.scss";
import RTA from "../assets/project/rta-2.gif"
import { FormattedMessage } from "react-intl";

export default function RTALayout() {
  const { age, setAge } = useStateContext();


  if (age) {
    return <Navigate to="/" />;
  }

  const handleAccess = () => {
    setAge('ok');
  };

  return (
    <div
      x-transition
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full min-h-screen px-4 py-5"
    >
      <div className="w-full max-w-[570px] rounded-[20px] bg-black dark:bg-dark-2 py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <div className="mb-4 mx-auto"> {/* Contenedor para centrar el logo */}
          <img src={Logo} alt="Logo DirtyHub" aria-labelledby="Vanilla Leak Logo" />
        </div>
        <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-pink-600 sm:text-2xl">
          <FormattedMessage id="rta.layout.age" defaultMessage="Are you older than 18?"/>
        </h3>
        <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-pink-600"></span>
        <p className="mb-10 text-base leading-relaxed text-body-color text-white">
          <FormattedMessage id="rta.layout.msg" defaultMessage="This website is designed for an adult audience and may contain material that is not suitable for minors. By continuing, you certify that you are at least the minimum age required in your jurisdiction to access adult content and that you are willing to view such content responsibly."/>
        </p>

        <div className="flex flex-wrap -mx-3">
          <div className="w-1/2 px-3">
            <button
              onClick={handleAccess}
              className="block w-full p-3 text-base font-medium text-center transition border rounded-md border-stroke text-dark dark:text-white hover:border-pink-600 hover:bg-pink-600 hover:text-white"
            >
              <FormattedMessage id="rta.layout.button" defaultMessage="Enter"/>
            </button>
          </div>
          <div className="w-1/2 px-3">
            <button
              className="block w-full p-3 text-base font-medium text-center text-white transition border rounded-md border-primary bg-primary hover:bg-blue-dark hover:border-pink-600 hover:bg-pink-600"
            >
              <a href="https://www.google.com/">No</a>
            </button>
          </div>
        </div>
        <a href="https://www.rtalabel.org/index.php?content=parents" target="blanck">
          <div className="mx-auto mt-7 flex items-center justify-center">
            <img src={RTA} alt="RTA logo" title="This is a mandatory logo for Adults pages" />
          </div>
        </a>
      </div>
    </div>
  );
}
