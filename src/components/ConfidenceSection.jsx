import Bag from "../assets/icons/Bag.png";
import Arrow from "../assets/icons/arrow.png";
import Card from "../assets/icons/CreditCard.png";

export default function ConfidenceSection() {
  return (
    <section className="w-full bg-[#F7F8FA]">
      <div className="max-w-6xl mx-auto ppx-8 md:px-10 lg:px-3 py-12 md:py-15">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center md:text-left">
          Shop with confidence
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Card 1 */}
          <div className="flex flex-col items-start">
            <img src={Bag} alt="bag icon" className="w-8 h-8 mb-3" />
            <h4 className="text-lg font-bold text-gray-900 mb-1">Pay Later</h4>
            <p className="text-sm text-gray-500">
              Shop now and split your purchases into 4 interest-free payments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start">
            <img src={Arrow} alt="arrow icon" className="w-8 h-8 mb-3" />
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              0% Interest
            </h4>
            <p className="text-sm text-gray-500 ">
              Shop now and split your purchases into 4 interest-free payments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start">
            <img src={Card} alt="card icon" className="w-8 h-8 mb-3" />
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              Build Credit
            </h4>
            <p className="text-sm text-gray-500">
              Seamless financial empowerment for your everyday lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
