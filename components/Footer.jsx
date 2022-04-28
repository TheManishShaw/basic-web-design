import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.tecblic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="/images/logo-2.png"
              className="mr-4 h-10"
              alt="Flowbite Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tecblic.vercel.app/"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Tecblic
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://react-portfolio-mocha-beta.vercel.app/"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Basic Landing page
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://portfolio-puce-one-65.vercel.app/"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tecblic.com/contact/"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a
            href="https://Tecblic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Tecblic™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default Footer;