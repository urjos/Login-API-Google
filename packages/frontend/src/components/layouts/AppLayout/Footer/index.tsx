export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-md m-4">
      <div className="flex w-full justify-between mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gallery™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-col items-start text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 lg:flex-row lg:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
