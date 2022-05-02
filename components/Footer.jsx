import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-800">
     
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
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