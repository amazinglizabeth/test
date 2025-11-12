import FooterLogo from "../assets/icons/Vector.png";

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-gray-400 px-10 md:px-15 py-15 md:py-20">
      {/* Top part with logo and social icons */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8">
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <img src={FooterLogo} alt="logo" />
        </div>
        <div className="flex space-x-6 text-gray-400">
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.34 6 7.68V24h-5v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24h-5V8z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.973.247 2.43.416a4.9 4.9 0 011.71 1.01 4.9 4.9 0 011.01 1.708c.168.46.36 1.264.416 2.435.058 1.266.07 1.65.07 4.85s-.012 3.585-.07 4.85c-.056 1.17-.247 1.973-.416 2.43a4.9 4.9 0 01-1.01 1.71 4.9 4.9 0 01-1.708 1.01c-.46.168-1.264.36-2.435.416-1.266.058-1.65.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.056-1.973-.247-2.43-.416a4.9 4.9 0 01-1.71-1.01 4.9 4.9 0 01-1.01-1.708c-.168-.46-.36-1.264-.416-2.435C2.21 15.585 2.2 15.2 2.2 12s.012-3.585.07-4.85c.056-1.17.247-1.973.416-2.43a4.9 4.9 0 011.01-1.71 4.9 4.9 0 011.708-1.01c.46-.168 1.264-.36 2.435-.416C8.415 2.21 8.8 2.2 12 2.2zM12 0C8.74 0 8.332.013 7.052.07 5.776.127 4.675.343 3.733.73c-1.01.404-1.867.943-2.72 1.797a6.9 6.9 0 00-1.796 2.72c-.388.942-.606 2.043-.663 3.32C-.013 8.332 0 8.74 0 12s-.013 3.668.07 4.948c.056 1.276.274 2.377.663 3.32a6.9 6.9 0 001.796 2.72c.853.853 1.71 1.393 2.72 1.797.943.388 2.044.606 3.32.663 1.28.057 1.688.07 4.948.07s3.668-.013 4.948-.07c1.276-.056 2.377-.274 3.32-.663a6.9 6.9 0 002.72-1.796c.853-.854 1.393-1.71 1.797-2.72.388-.943.606-2.044.663-3.32.057-1.28.07-1.688.07-4.948s-.013-3.668-.07-4.948c-.056-1.276-.274-2.377-.663-3.32a6.9 6.9 0 00-1.796-2.72c-.854-.854-1.71-1.393-2.72-1.797-.942-.388-2.043-.606-3.32-.663C15.668.013 15.26 0 12 0z" />
              <circle cx="12" cy="12" r="3.6" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 mb-12 text-sm">
        {/* Column 1 */}
        <div>
          <h4 className="text-white mb-3 font-semibold">Products</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Credit Builder
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Investment
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white mb-3 font-semibold">Products</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Credit Builder
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Investment
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white mb-3 font-semibold">Legal</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Customer Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Merchant Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Notice
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-white mb-3 font-semibold">Support</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="text-white mb-3 font-semibold">Contact us</h4>
          <ul className="space-y-1">
            <li>
              <a href="mailto:hello@credpal.com" className="hover:text-white">
                hello@credpal.com
              </a>
            </li>
            <li>
              <span>+234 708 740 9746</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom part */}
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-600 text-xs">
        <div>© CredPal 2024</div>
        <a
          href="#top"
          className="text-white font-semibold hover:underline cursor-pointer"
        >
          Go back to top ↑
        </a>
      </div>
    </footer>
  );
}
