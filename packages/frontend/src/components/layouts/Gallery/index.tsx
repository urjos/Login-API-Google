import data from "../../../data.json";
export default function Gallery() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  max-w-6xl">
        <div className="grid gap-4">
          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  {data[0].name}
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  {data[0].price}
                </span>
              </div>
            </div>
          </div>

          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>

          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>

          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>

          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>

          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>

          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>

          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>

          <div className="relative group hover:scale-104 transition-transform duration-300 cursor-pointer easy-in-out span-c-hover:opacity-">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col p-5 items-start justify-end rounded-lg">
              {/* Fondo semitransparente */}
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-25 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              {/* Texto visible al hacer hover */}
              <div className="relative z-10 flex flex-col">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Product
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300">
                  Price
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
