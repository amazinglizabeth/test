import Phone from "../assets/images/phone.png";

export default function SavingSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-10 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      {/* Image */}
      <div className="md:flex-1">
        <img
          src={Phone}
          alt="Hand holding phone showing savings app"
          className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="md:flex-1 max-w-xl text-center md:text-left">
        <p className="text-blue-600 uppercase text-xs sm:text-sm font-semibold mb-2">
          CredPal Savings
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-black mb-4 leading-snug">
          Save smarter, <br />
          not harder
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
          With CredPal, saving isn't complicated. Set your goals, create
          budgets, and watch your savings grow automatically.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition text-sm sm:text-base cursor-pointer">
            Learn More &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
