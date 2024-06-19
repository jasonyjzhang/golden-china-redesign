export default function Card({name, price, spicy}) {
  return (
    <div className={`w-full lg:w-2/3 p-2 flex justify-between items-center bg-slate-100`}>
        {
          <h1 className={`m-2 ${spicy && 'text-[#FF3403]'}`}>{name} {spicy && ' 🌶️'}</h1>
        }
        <div className={`flex space-x-6 m-2`}>
          {
            Array.isArray(price) ? (
              <>
                <h2>{price[0]}</h2>
                <h2>{price[1]}</h2>
              </>
            ) : (
              <h2>{price}</h2>
            )
          }
        </div>
    </div>
  )
};