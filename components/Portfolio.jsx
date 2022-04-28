import React from 'react'

const Portfolio = () => {
  return (
    <div className=" container xl:px-8 xl:py-10 pb-20 bg-[#f3f4fe]">
      <div className="flex">
        <div className="mx-4 w-full">
          <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Portfolio
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
              Our Designs
            </h2>
            <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
              Dont take our word for it... Read what our customers feel about
              our products!
            </p>
          </div>
        </div>
      </div>
      <div className="container grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 mb-8 ">
        <div className="   text-gray-900">
          <div className=" mt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://rapidion.in/"
            >
              <img
                src="/images/portfolio/product1.png"
                alt=" random imgee"
                className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
              />
              <div className="relative px-4 -mt-16  ">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                    {" "}
                    Rapidion
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="   text-gray-900">
          <div className=" mt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.houseofdal.com/"
            >
              <img
                src="/images/portfolio/product2.png"
                alt=" random imgee"
                className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
              />
              <div className="relative px-4 -mt-16  ">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                    House of Dal
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="   text-gray-900">
          <div className=" mt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://traderg.in/"
            >
              <img
                src="/images/portfolio/product3.png"
                alt=" random imgee"
                className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
              />
              <div className="relative px-4 -mt-16  ">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                    TraderG
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="   text-gray-900">
          <div className=" mt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://encodiq.com/"
            >
              <img
                src="/images/portfolio/product4.png"
                alt=" random imgee"
                className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
              />
              <div className="relative px-4 -mt-16  ">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                    EncodiQ
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="   text-gray-900">
          <div className=" mt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fushiwellbeing.com/"
            >
              <img
                src="/images/portfolio/product5.png"
                alt=" random imgee"
                className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
              />
              <div className="relative px-4 -mt-16  ">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                    Fushi well Being
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="   text-gray-900">
          <div className=" mt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.rapidbevtech.com/"
            >
              <img
                src="/images/portfolio/product6.png"
                alt=" random imgee"
                className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
              />
              <div className="relative px-4 -mt-16  ">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                    Rapid BevTech
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
