export default function Contact() {
  const PhoneNumber = '9103462300';
  const handleButtonClick = () => {
    window.location.href = `tel:${PhoneNumber}`;
  }
  const businessHours = [{'Day': 'Monday - Thursday', 'Hour': '11:00am - 9:30pm'}, {'Day': 'Friday & Saturday', 'Hour': '11:00am - 10:00pm'}, {'Day': 'Sunday', 'Hour': 'Noon - 9:30pm'}];
  return (
    <div className={`w-screen h-dvh lg:h-[100vh] bg-mobileContacts lg:bg-desktopContacts bg-cover bg-center flex justify-center lg:justify-end`}>
      <div className={`w-full mt-16 px-8 lg:w-1/2 text-white`}>
        <div className={`h-full flex flex-col items-center justify-evenly`}>
          <table className={`border-collapse w-full`}>
            <thead>
              <tr>
                <th colSpan="2" className={`text-2xl py-4 text-center`}>Hours</th>
              </tr>
            </thead>
            <tbody>
              {businessHours.map((day, index) => (
                <tr key={index} className={`text-sm md:text-base`}>
                  <td className={`px-3 lg:px-6 py-2 text-right`}>{day.Day}</td>
                  <td className={`px-3 lg:px-6 py-2`}>{day.Hour}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={`w-full flex flex-col items-center`}>
            <h1 className={`text-2xl py-4 text-center font-bold`}>Telephone</h1>
            <button onClick={handleButtonClick} className={`lg:hidden w-full md:w-2/3 lg:w-2/3 py-3 rounded-2xl border-white border-2 text-white font-bold`}>910 346 2300</button>
            <div className={`text-sm md:text-base hidden lg:flex gap-x-12`}>
              <p className={`underline underline-offset-4 decoration-gold decoration-4`}>910 346 2300</p>
              <p className={`underline underline-offset-4 decoration-gold decoration-4`}>910 346 2377</p>
            </div>
          </div>
          <div className={`w-full flex flex-col items-center`}>
            <h1 className={`text-2xl py-4 text-center font-bold`}>Location</h1>
            <p className={`text-center text-sm md:text-base`}>3085 Richlands Hwy Jacksonville, NC 28540</p><p className={`hidden lg:block`}>(Walgreens Shopping Center)</p>
            <iframe title="Golden China Google Map" className={`w-full md:w-2/3 lg:h-[200px] rounded-lg`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5125.984396237309!2d-77.47734199044748!3d34.75483945624227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9121da155a04f%3A0x9cd40c02681fb373!2sGolden%20China%20Restaurant!5e0!3m2!1sen!2sus!4v1717122011881!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
};