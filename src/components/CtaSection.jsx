import Man from "../assets/images/man.png";

export default function CtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      
      {/* Text Content */}
      <div className="md:flex-1 max-w-xl text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-4 leading-snug">
          Grow faster with <br className="hidden sm:block"/> CredPal
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
          With CredPal, you turn interest into action. Offer flexible credit at checkout, increase sales and attract customers who spend more, all without taking on risk.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition text-sm sm:text-base">
            CredPal for Business &rarr;
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="md:flex-1">
        <img
          src={Man}
          alt="Man holding device with shoe store background"
          className="rounded-2xl w-full object-cover max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        />
      </div>
      
    </section>
  );
}
