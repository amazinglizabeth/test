import PayCard from "../assets/images/paycard.png";

const ShoppingSection = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8 md:px-10 lg:px-3 py-12 md:py-15">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content Section */}
        <div className="space-y-4 text-center lg:text-left">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start items-center">
            <span className="text-sm sm:text-md text-blue-700 font-semibold">
              SHOP WITH CREDPAL
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Shopping, simplified
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
            One app to find, shop, and pay your way — CreditPal connects you to
            the best brands, flexible payments, and real-time tracking of your
            favourite products, all in one place.
          </p>

          {/* Learn More Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition text-sm sm:text-base">
              Learn More →
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={PayCard}
            alt="pay card"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingSection;
