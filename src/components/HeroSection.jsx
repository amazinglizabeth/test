import Home from "../assets/images/Home.png";
import HomeCard from "../assets/images/homeCard.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 px-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Section */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080857] leading-tight">
              Payment at<br className="hidden sm:block" /> your Pace
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-md sm:max-w-lg md:max-w-xl mx-auto lg:mx-0">
              Shop confidently and pay in 4 interest-free installments, in 30 days, or over time — no hidden fees, no jargon. Just smarter payments.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started →
              </button>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 pr-5">
            <div className="relative w-44 sm:w-52 md:w-64 lg:w-80 xl:w-96">
              
              {/* Phone Image */}
              <div className="relative z-10">
                <img 
                  src={Home}
                  alt="CredPal app on phone"
                  className="w-36 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto drop-shadow-2xl"
                />
              </div>

              {/* Card Image */}
              <div className="absolute -left-12 sm:-left-14 md:-left-16 lg:-left-20 xl:-left-24 top-16 sm:top-18 md:top-20 lg:top-24 xl:top-28 z-20">
                <img 
                  src={HomeCard}
                  alt="CredPal credit card"
                  className="w-36 sm:w-40 md:w-44 lg:w-52 xl:w-60 h-auto drop-shadow-xl"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 bg-purple-200 rounded-full blur-xl opacity-60 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200 rounded-full blur-xl opacity-60 z-0"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
