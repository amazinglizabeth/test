import Card from "../assets/images/card.png";

const CardSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-3 py-10 md:py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Card Image */}
        <div className="relative flex justify-center lg:justify-start">
          <img
            src={Card}
            alt="credpal card"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Text Content */}
        <div className="pl-0 lg:pl-8 space-y-4">
          {/* Logo/Brand */}
          <div className="flex justify-center lg:justify-start items-center space-x-1">
            <span className="text-md sm:text-l font-thin text-center  text-blue-700">
              CREDPAL CARD
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Take Pay in 4 anywhere
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-md text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0 text-left">
            Spread purchases from your favourite brands with Credpal.
            <br />
            You can pay in 4 with your Credpal card anywhere
            <br />
            mastercard is accepted.
          </p>

          {/* Learn More Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition cursor-pointer text-sm sm:text-base">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
