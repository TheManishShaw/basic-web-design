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
              Don't take our word for it... Read what our customers feel about
              our products!
            </p>
          </div>
        </div>
      </div>
      <div class="container grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 ">
        <div class="   text-gray-900">
          <div className=" mt-2">
            <img
              src="/images/portfolio/product1.png"
              alt=" random imgee"
              class="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
            />
            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-3 rounded-lg shadow-lg">
                <h4 class=" text-xl font-semibold uppercase leading-tight truncate text-center">
                  Website 1
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div class="   text-gray-900">
          <div className=" mt-2">
            <img
              src="/images/portfolio/product1.png"
              alt=" random imgee"
              class="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
            />
            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-3 rounded-lg shadow-lg">
                <h4 class=" text-xl font-semibold uppercase leading-tight truncate text-center">
                  Website 1
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="   text-gray-900">
          <div className=" mt-2">
            <img
              src="/images/portfolio/product2.png"
              alt=" random imgee"
              class="w-full h-80 object-cover object-center rounded-lg shadow-md motion-safe:hover:scale-105 transition ease-in-out duration-700 ..."
            />
            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-3 rounded-lg shadow-lg">
                <h4 class=" text-xl font-semibold uppercase leading-tight truncate text-center">
                  Website 1
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
