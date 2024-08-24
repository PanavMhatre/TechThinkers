import blueBlob from "../assets/blueBlob.png";
import pinkBlob from "../assets/pinkBlob.png";
import yellowBlob from "../assets/yellowBlob.png";
import logoText from "../assets/logoText.png";

function Home() {
  return (
    <div>
      <nav className="bg-gray-50 pb-48 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logoText} className="h-12" alt="TechThinkers Logo" />
    </a>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/resources" className="font-semibold text-gray-800 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Resources
          </a>
        </li>
        <li>
          <a href="#" className="font-semibold text-gray-800 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  );
}

export default Home;
