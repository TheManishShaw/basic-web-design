
const products = [
  {
    id: 1,
    name: "Tecblic Website",
    href: "#",
    imageSrc: "/images/portfolio/tecblic.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Portfolio Design",
    href: "#",
    imageSrc: "/images/portfolio/portfolio.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Landing page",
    href: "#",
    imageSrc: "/images/portfolio/landing-page.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];

export default function Projects() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only text-black">Products</h2>
        <div className="flex">
          <div className="mx-4 w-full">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Projects
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

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                  width={1000}
                  height={300}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-center text-gray-700">
                {product.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
