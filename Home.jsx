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
      <div className="bg-gray-50 py-16 pt-32 pb-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Impact
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                We have worked with many title one schools and schools around
                the world to help students learn to code and build amazing
                projects.
              </p>
            </div>
          </div>
          <div className="mt-10 pb-1 bg-gray-50">
            <div className="relative">
              <div className="absolute inset-0 h-1/2"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg sm:grid sm:grid-cols-3 bg-gray-50">
                    <div className="flex flex-col p-6 text-center">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Schools
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-gray-700">
                        100+
                      </dd>
                    </div>
                    <div className="flex flex-col border-gray-100 p-6 text-center">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Countries
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-gray-700">
                        3
                      </dd>
                    </div>
                    <div className="flex flex-col border-gray-100 p-6 text-center">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Students
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-gray-700">
                        1000+
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Steps */}
<div className="w-full bg-gray-50">
  <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
    <div className="mt-2 md:mt-0 py-12 bg-gray-50 sm:py-16 lg:pb-24 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold leading-tight text-dark-grey-900 md:text-4xl text-center">
          How it works!
        </h2>
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="875"
              height="48"
              viewBox="0 0 875 48"
              fill="none"
            >
              <path
                d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                stroke="#D4D4D8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="1 12"
              />
            </svg>
          </div>
          <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="bg-white flex items-center justify-center w-16 h-16 mx-auto dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  1
                </span>
              </div>
              <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                Learn
              </h3>
              <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                Choose what you want to learn about and follow our tutorials to be able to gain the skills you need.
              </p>
            </div>
            <div className="">
              <div className="bg-white flex items-center justify-center w-16 h-16 mx-auto dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  2
                </span>
              </div>
              <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                Projects
              </h3>
              <p className="mt-3 sm:mt-4 text-base text-gray-900 dark:text-gray-400">
                Follow along with our projects to gain real-world experience and build your portfolio.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  3
                </span>
              </div>
              <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                Impact
              </h3>
              <p className="mt-3 sm:mt-4 text-base text-gray-900 dark:text-gray-400">
                Use the skills you have learned to make an impact in your community and the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

      <div className="bg-gray-50 pb-4">
  <div className="bg-white-50 ml-32 mr-32">
    <footer className="bg-white-50 rounded-lg shadow p-4 dark:bg-gray-800">
      <div className="bg-white w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 bg-white-50 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            TechThinkers
          </a>
          . All Rights Reserved.
        </span>
        <a className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mg-end">
          Created by Panav Mhatre
        </a>
      </div>
    </footer>
  </div>
</div>



    </div>
  );
}

export default Home;
