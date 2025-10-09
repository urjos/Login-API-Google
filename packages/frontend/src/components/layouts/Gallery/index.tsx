import data from "../../../data.json";

export default function Gallery() {
  return (
    <>
      <div className="flex justify-center w-full mt-20">
        <div className="grid grid-cols-1 pr-5 pl-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          <div className="max-h-1/4 grid gap-4">
            {data
              .filter((item, index) => index % 3 === 0)
              .map((item) => (
                <>
                  <div
                    key={item.id}
                    className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-"
                  >
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={item.image}
                      alt=""
                    />
                    <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
                      <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
                      <div className="relative z-10 flex flex-col">
                        <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                          {item.name}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
          <div className="max-h-1/4 grid gap-4 pr-5 pl-5 md:pr-0 md:pl-0 sm:pl-0 sm:pr-0">
            {data
              .filter((item, index) => index % 3 === 1)
              .map((item) => (
                <>
                  <div
                    key={item.id}
                    className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-"
                  >
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={item.image}
                      alt=""
                    />
                    <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
                      <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
                      <div className="relative z-10 flex flex-col">
                        <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                          {item.name}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
          <div className="max-h-1/4 grid gap-4 pr-5 pl-5 md:pr-0 md:pl-0 sm:pl-0 sm:pr-0">
            {data
              .filter((item, index) => index % 3 === 2)
              .map((item) => (
                <>
                  <div
                    key={item.id}
                    className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-"
                  >
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={item.image}
                      alt=""
                    />
                    <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
                      <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
                      <div className="relative z-10 flex flex-col">
                        <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                          {item.name}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
