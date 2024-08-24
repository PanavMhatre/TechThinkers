import PropTypes from "prop-types";

function CardTemplate({ title, description, buttonIcon, linkRef }) {
  return (
    <a
      className="bg-gray-50 relative flex flex-col mt-10 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 text-left"
      href={linkRef}
    >
      <div className="p-6">
        <img src={buttonIcon} className="w-12 h-12 mb-4 text-gray-900"></img>
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <a className="inline-block">
          <button
            className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none"
            type="button"
          >
            {/* {buttonText} */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </a>
  );
}

CardTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string.isRequired,
  linkRef: PropTypes.string.isRequired,
};

export default CardTemplate;
