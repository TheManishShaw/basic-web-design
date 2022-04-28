import React from 'react'

const Portfolio = () => {
  return (
    <div className=" container xl:px-8 xl:py-10 pb-20">
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
            <img
              src="/images/portfolio/product1.png"
              alt=" random imgee"
              className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
            />
            <div className="relative px-4 -mt-16  ">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                  <a href="https://rapidion.in/"> Rapidion</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="   text-gray-900">
          <div className=" mt-2">
            <img
              src="/images/portfolio/product2.png"
              alt=" random imgee"
              className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
            />
            <div className="relative px-4 -mt-16  ">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                  <a href="https://www.houseofdal.com/">House of Dal</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="   text-gray-900">
          <div className=" mt-2">
            <img
              src="/images/portfolio/product3.png"
              alt=" random imgee"
              className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
            />
            <div className="relative px-4 -mt-16  ">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                  <a href="https://traderg.in/">TraderG</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="   text-gray-900">
          <div className=" mt-2">
            <img
              src="/images/portfolio/product4.png"
              alt=" random imgee"
              className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
            />
            <div className="relative px-4 -mt-16  ">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                  <a href="https://encodiq.com/">EncodiQ</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="   text-gray-900">
          <div className=" mt-2">
            <img
              src="/images/portfolio/product5.png"
              alt=" random imgee"
              className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
            />
            <div className="relative px-4 -mt-16  ">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                  <a href="https://fushiwellbeing.com/">Fushi well Being</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="   text-gray-900">
          <div className=" mt-2">
            <img
              src="/images/portfolio/product6.png"
              alt=" random imgee"
              className="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
            />
            <div className="relative px-4 -mt-16  ">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <h4 className=" text-xl font-semibold uppercase leading-tight truncate text-center">
                  <a href="https://www.rapidbevtech.com/">Rapid BevTech</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
