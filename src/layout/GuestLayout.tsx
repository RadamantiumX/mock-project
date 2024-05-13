import { Outlet} from "react-router-dom";
import NavBar from "../components/layoutComponents/NavBar";
import Footer from "../components/layoutComponents/Footer";
import { useStateContext } from "../contexts/ContextProvider";
import { Notifications } from "../components/layoutComponents/Notifications";
import RTALayout from "./RTALayout";
import "./guestLayout.scss";

export default function GuestLayout() {
  const { age, notification } = useStateContext();

 
  if (!age) {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
        {notification && <Notifications notification={notification} />}
        <div className="overlay" /> 
        <div className="modal-container">
          <RTALayout /> 
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      {notification && <Notifications notification={notification} />}
    </>
  );
}
