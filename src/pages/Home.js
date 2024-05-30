import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import MobileLanding from "../assets/mobile-landing.jpeg";
import DesktopLanding from "../assets/desktop-landing.jpeg";
import "../css/Home.css";

export default function Home() {
  const PhoneNumber = '9103462300';
  const handleButtonClick = () => {
    window.location.href = `tel:${PhoneNumber}`;
  }
  return (
    <div className={`h-dvh lg:h-[100vh]`}>
      <Alert/>
      <div className={`flex flex-col lg:flex-row pt-16 lg:px-24 lg:justify-between lg:items-center h-full`}>
        <img src={MobileLanding} className={`lg:hidden h-[40%] object-cover`} />
        <div className={`h-3/4 px-8 lg:px-0 flex flex-col justify-evenly md:items-center lg:w-1/2`}>
          <div className={`space-y-6 md:w-2/3 lg:w-full`}>
            <h1 className={`text-3xl md:text-4xl lg:text-[3.5vw] font-semibold text-center lg:text-start lg:tracking-wide lg:leading-snug`}>Delicious Chinese Food Ready in Minutes</h1>
            <h2 className={`hidden lg:inline-block text-lg`}>Craving Chinese food? From wok-tossed <strong><i>Chicken with Broccoli</i></strong> to glazed <strong><i>Sesame Chicken</i></strong>, we have a diverse menu of amazing dishes for you to explore! Once you’ve decided, give us a call at <strong>910-346-2300</strong>!</h2>
            <h2 className={`text-center lg:hidden`}>Craving Chinese Food? Click the <strong><i>CALL US</i></strong> button below to call and place your order now!</h2>
          </div>
          <div className={`flex flex-col space-y-6 md:space-y-6 lg:space-y-0 md:w-2/3 lg:w-full`}>
            <button onClick={handleButtonClick} className={`lg:hidden py-3 rounded-2xl bg-dark text-white font-bold`}>CALL US</button>
            <Link to="/menu" className={`py-3 border-2 border-dark rounded-2xl font-bold lg:w-1/2 text-center`}>VIEW MENU</Link>
          </div>
        </div>
        <img title="Sesame Chicken" draggable="false" src={DesktopLanding} className={`hidden lg:inline w-1/3 self-center opacity-85 rounded-2xl`} />
      </div>
    </div>
  )
};