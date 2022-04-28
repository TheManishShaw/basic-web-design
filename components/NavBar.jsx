import Link from 'next/link';
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, {useState} from 'react'

const NavBar = () => {
   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-black">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link href={"/"}>
                <a className="navbar-logo block w-full py-5">
                  <img
                    src="/images/logo-2.png"
                    alt="logo"
                    className="header-logo w-full"
                  />
                </a>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={handleClick}
                  id="navbarToggler"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  {!nav ? (
                    <MenuIcon className="w-5 text-zinc-100" />
                  ) : (
                    <XIcon className="w-5 text-zinc-100" />
                  )}
                </button>
              </div>

              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <nav
                  id="navbarCollapse"
                  className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
                >
                  <ul className="blcok lg:flex">
                    <li className="group relative"></li>
                    <li className="group relative">
                      <Link href={"#about"}>
                        <a className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12">
                          About
                        </a>
                      </Link>
                    </li>

                    <li className="group relative">
                      <Link href={"#contact"}>
                        <a className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12">
                          Contact
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <ul
                    className={
                      !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"
                    }
                  >
                    <li className="border-b-2 py-3 border-zinc-300 w-full">
                      <Link href={"#about"}>
                        <a className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12">
                          About
                        </a>
                      </Link>
                    </li>

                    <li className="border-b-2 py-3 border-zinc-300 w-full">
                      <Link href={"#contact"}>
                        <a className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12">
                          Contact
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;