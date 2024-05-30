import { useEffect, useRef, useState } from "react";

export default function Alert() {
  const alertRef = useRef(null);
  const [isOpen, setIsOpen] = useState();
  const businessHours = {
    Sunday: {openHour: 12, openMin: 0, closeHour: 21, closeMin: 30},
    Monday: {openHour: 11, openMin: 0, closeHour: 21, closeMin: 30},
    Tuesday: {openHour: 11, openMin: 0, closeHour: 21, closeMin: 30},
    Wednesday: {openHour: 11, openMin: 0, closeHour: 21, closeMin: 30},
    Thursday: {openHour: 11, openMin: 0, closeHour: 21, closeMin: 30},
    Friday: {openHour: 11, openMin: 0, closeHour: 22, closeMin: 0},
    Saturday: {openHour: 11, openMin: 0, closeHour: 22, closeMin: 0}
  }
  useEffect(() => {
    const currDay = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    const currDateAndTime = new Date();

    const { openHour, openMin, closeHour, closeMin } = businessHours[currDay];
    const openTime = new Date();
    openTime.setHours(openHour, openMin, 0);
    const closeTime = new Date();
    closeTime.setHours(closeHour, closeMin, 0);

    setIsOpen(currDateAndTime >= openTime && currDateAndTime < closeTime);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const alertDiv = alertRef.current;
      if (alertDiv) {
        alertDiv.classList.add('hideAlert');
        console.log('here');
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div ref={alertRef} role="alert" className={`mt-[68px] py-1 bg-gold fixed w-full`}>
      <div className={`text-center`}>{isOpen ? 'We are currently open!' : <>We are currently closed. <br className={`md:hidden`}/> Check our business hours in Contact!</>}</div>
    </div>
  )
};