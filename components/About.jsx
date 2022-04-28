import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="items-center justify-between overflow-hidden border lg:flex">
                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                  <span className="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.tecblic.com/about-us/"
                    >
                      {" "}
                      About Us
                    </a>
                  </span>
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                    Brilliant Toolkit to Build Nextgen Website Faster.
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    The central purpose is to zero in on teaching participants
                    on the most proficient method to best safeguard
                    exceptionally weak business applications with intelligent
                    board conversations and roundtables driven by informed
                    authorities. With more noteworthy and more significant
                    outcomes by conveying ideal client work on the grounds that
                    at Tecblic, we don't compromise quality and the long
                    stretches of heritage we are supporting.
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative z-10 inline-block">
                    <img
                      src="/images/about/about-image.svg"
                      alt="image"
                      className="mx-auto lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About