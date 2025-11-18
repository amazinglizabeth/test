import brand1 from "../assets/images/leftbrands.png";
import brand2 from "../assets/images/rightbrands.png";

export default function BrandSection({ onGetStarted }) {
  return (
    <section className="w-full flex justify-center px-8 md:px-10 py-12 md:py-20">
      <div className="relative max-w-6xl w-full bg-[#071033] rounded-2xl p-8 sm:p-12 py-4 lg:p-16 overflow-hidden">
        {/* Left & Right decorative image groups */}
        <img
          src={brand1}
          alt="brands-left"
          className="pointer-events-none absolute left-[-3] top-1/2 -translate-y-1/2 w-20 sm:w-20 md:w-30 lg:w-42 opacity-90 transform -translate-x-1/4 sm:-translate-x-1/3"
          style={{ filter: "brightness(0.95)" }}
        />

        <img
          src={brand2}
          alt="brands-right"
          className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 w-20 sm:w-20 md:w-30 lg:w-42 opacity-90 transform translate-x-1/4 sm:translate-x-1/3"
          style={{ filter: "brightness(0.95)" }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-l text-center text-white">
          <p className="text-xs tracking-wider uppercase text-slate-300 mb-4">
            Shop from top brands
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Shop like a pro with
            <span className="block">the CredPal app</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-l mx-auto mb-8">
            Discover top brands, flexible payment options and exclusive credit
            rewards all in one place
          </p>

          <div>
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-700 transition-shadow shadow-md text-white text-sm sm:text-base cursor-pointer"
            >
              Get Started
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile adjustments: smaller decorative images and subtle overlay to avoid crowding text */}
        <div className="absolute inset-0 bg-linear-to-t from-[#071033]/90 to-transparent pointer-events-none sm:hidden" />
      </div>
    </section>
  );
}
