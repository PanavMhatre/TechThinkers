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
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="relative lg:col-span-5 flex items-center justify-center h-96 bg-gray-50 pb-36">
    <img src={pinkBlob} alt="Pink Blob" className="absolute top-[-9] transform -translate-x-1/2 z-0 max-w-xl" />
    <img src={blueBlob} alt="Blue Blob" className="absolute top-[-5] left-1/2 transform -translate-x-1/2 z-0 opacity-90 max-w-xl" />
    <img src={yellowBlob} alt="Yellow Blob" className="absolute top-[-5] transform translate-x-1/2 z-0 opacity-85 max-w-xl" />
    <div className="flex flex-col items-center justify-center lg:col-span-7 p-6 z-10">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Coding for everyone
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        TechThinkers help people around the world learn to code and build amazing projects to help their communities around the world regardless of socioeconomics status.
      </p>
      <a href="/resources" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg">
        Get started
        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </a>
    </div>
  </div>
</section>


    </div>
  );
}

export default Home;
