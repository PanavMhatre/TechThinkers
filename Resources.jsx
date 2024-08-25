import JavaIcon from "../assets/javaIcon.png";
import CardTemplate from "./CardTemplate";
import PythonIcon from "../assets/pythonIcon.png";
import logoText from "../assets/logoText.png";

function Resources() {
  return (
    <div className="w-full bg-gray-50">
      <nav className="bg-gray-50 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logoText} className="h-12" alt="TechThinkers Logo" />
          </a>
          <div
            className="bg-gray-50 items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="bg-gray-50 flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="font-semibold text-gray-800 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold text-gray-800 bg-gray-50 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="text-center mt-15 pr-20 pl-20 ml-10 pb-10 bg-gray-50">
        {/* <button className="btn btn-wide">
          Java
          <img src={JavaIcon} alt="Java Icon" className="h-6" />
        </button> */}
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-20 mb-9">
          Java
        </h2>
        <div className="grid grid-cols-3 gap-[-1]">
          <CardTemplate
            title="Intro to Java Programming"
            description="Learn the basics of Java programming language!"
            buttonText="Learn More"
            buttonIcon={JavaIcon}
            linkRef="https://drive.google.com/file/d/1uE9f9dPagUoBshvBTRcBqTx0u1gKGefm/view?usp=sharing"
          />
          <CardTemplate
            title="Conditional Statements"
            description="Learn about conditional statements in Java to create logic in your programs!"
            buttonText="Learn More"
            buttonIcon={JavaIcon}
            linkRef="https://drive.google.com/file/d/1FX899aTmn1U9Lao8GfRRqcyyMdyiJnJo/view?usp=drive_link"
          />
          <CardTemplate
            title="Loops"
            description="Learn about loops in Java to create repetitive in your programs!"
            buttonText="Learn More"
            buttonIcon={JavaIcon}
            linkRef="https://drive.google.com/file/d/1rFYfDQeKR9AmqTDoYn6dezN5P2ZFUZoj/view?usp=drive_link"
          />
          <CardTemplate
            title="Variables"
            description="Learn about variables in Java to store data in your programs!"
            buttonText="Learn More"
            buttonIcon={JavaIcon}
            linkRef="https://drive.google.com/file/d/1-kFztqJJpZ9rQ-UShfYIYIzXrclxpVfq/view?usp=drive_link"
          />
          <CardTemplate
            title="Methods"
            description="Learn about methods in Java to create reusable code in your programs!"
            buttonText="Learn More"
            buttonIcon={JavaIcon}
            linkRef="https://drive.google.com/file/d/1JHhTgKdA0jXf14RwNEFC7z73qjdTJT4P/view?usp=drive_link"
          />
          <CardTemplate
            title="Math and String Methods"
            description="Learn Math and String methods in Java to perform operations on data in your programs!"
            buttonText="Learn More"
            buttonIcon={JavaIcon}
            linkRef="https://drive.google.com/file/d/1MHxbSQy9ReBOY-ES-IbLZ89uDXk_cdG2/view?usp=drive_link"
          />
          <CardTemplate
            title="Array"
            description="Learn about arrays in Java to store multiple data in your programs!"
            buttonText="Learn More"
            buttonIcon={JavaIcon}
            linkRef="https://drive.google.com/file/d/1qPBzX-iWdCtFSlHZs334Vpw-PG0ppCjD/view?usp=drive_link"
          />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-20 mb-9">
          Python
        </h2>
        <div className="grid grid-cols-3 gap-[-1]">
          <CardTemplate
            title="Intro to Python Programming"
            description="Learn the basics of Python programming language!"
            buttonText="Learn More"
            buttonIcon={PythonIcon}
            linkRef="https://drive.google.com/file/d/1-K0yWIiXEuh2RdGBgjlYAkKhMYAd2BxX/view?usp=sharing"
          />
          <CardTemplate
            title="Conditional Statements"
            description="Learn about conditional statements in Python to create logic in your programs!"
            buttonText="Learn More"
            buttonIcon={PythonIcon}
            linkRef="https://drive.google.com/file/d/1Kx7Mx2TLnBkj_ZpO9OJB0jmSBXaSJDUt/view?usp=drive_link"
          />
          <CardTemplate
            title="Loops"
            description="Learn about loops in Python to create repetitive in your programs!"
            buttonText="Learn More"
            buttonIcon={PythonIcon}
            linkRef="https://drive.google.com/file/d/1TIP3zsMuOBtM7FbIjNLoKvxRnU1MCsT7/view?usp=drive_link"
          />
          <CardTemplate
            title="Variables"
            description="Learn about variables in Python to store data in your programs!"
            buttonText="Learn More"
            buttonIcon={PythonIcon}
            linkRef="https://drive.google.com/file/d/1UlmmGJhIsoiYCIjA5c6LtJvXDyC_F6SY/view?usp=drive_link"
          />
          <CardTemplate
            title="Functions"
            description="Learn about functions in Python to create reusable code in your programs!"
            buttonText="Learn More"
            buttonIcon={PythonIcon}
            linkRef="https://drive.google.com/file/d/1apdmAzUocm77C2INvb_vpgbNR4GtGcmK/view?usp=drive_link"
          />
          <CardTemplate
            title="Data Structures"
            description="Learn about data structures in Python to store multiple data in your programs!"
            buttonText="Learn More"
            buttonIcon={PythonIcon}
            linkRef="https://drive.google.com/file/d/1RdQ6YfU3InfJ1zwkL8FpGM1OdugPiV81/view?usp=drive_link"
          />
        </div>
      </div>
    </div>
  );
}

export default Resources;
