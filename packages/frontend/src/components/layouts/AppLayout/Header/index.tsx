import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../../../../contexts/SessionContext";

export type HeaderProps = {
  onLogout: () => void;
};

export const Header = ({ onLogout }: HeaderProps) => {
  const { session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const avatarImg = session
    ? session.picture ||
      `https://ui-avatars.com/api/?name=${session.name || "Default User"}`
    : null;

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <header>
      <nav className="sticky top-0 z-50 bg-whiteorder-gray-200 px-4 lg:px-8 py-2.5 bg-gray-700">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Gallery
            </span>
          </Link>

          <div className="flex items-center lg:order-2 gap-3">
            {avatarImg && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className={`flex text-sm bg-gray-800 rounded-full hover:scale-110 ease-in-out duration-200 hover:cursor-pointer 
                    ${
                      isDropdownOpen &&
                      "scale-110 focus:ring-4 focus:ring-gray-600"
                    }
                    ${!isDropdownOpen && "focus:ring-0 focus:ring-gray-600"}
                    `}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={avatarImg}
                    alt="user photo"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 origin-top-left mt-3 w-35 bg-white shadow-md ring-1 ring-gray-300 ring-opacity-50 border-0 ring-opacity-5 focus:outline-none z-50 hover:cursor-pointer">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 min-h-max hover:rounded-md"
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
            <div className="hidden lg:flex flex-col items-start text-xs text-white">
              <p>Welcolme,</p>
              <p>{session?.name}</p>
            </div>

            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden 
              hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 
                    111.414 1.414L11.414 10l4.293 4.293a1 1 0 
                    01-1.414 1.414L10 11.414l-4.293 4.293a1 1 
                    0 01-1.414-1.414L8.586 10 4.293 
                    5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 
                    110 2H4a1 1 0 01-1-1zM3 10a1 1 0 
                    011-1h12a1 1 0 110 2H4a1 1 
                    0 01-1-1zM3 15a1 1 0 011-1h12a1 1 
                    0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent 
                  lg:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                  lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 
                  lg:dark:hover:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                  lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 
                  lg:dark:hover:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                  lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 
                  lg:dark:hover:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                  lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 
                  lg:dark:hover:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                  lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 
                  lg:dark:hover:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
