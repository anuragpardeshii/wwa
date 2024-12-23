import "./BaglessSchool.css";

export default function BaglessSchool() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome to Wisdom World Academy's Bagless School Initiative!
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        At Wisdom World Academy, we believe in nurturing the intellectual and
        emotional growth of every child through innovative and progressive
        educational practices. Our Bagless School initiative is designed to
        bring joy and simplicity to learning by eliminating the need for heavy
        school bags and promoting a more holistic, stress-free learning
        environment. 
      </p>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Our Bagless School program aims to reduce the
        physical and mental burden of carrying heavy backpacks filled with
        books, stationery, and other materials. By transitioning to a lighter,
        more efficient model of learning, we encourage students to embrace a
        more interactive and focused educational experience. This initiative
        supports the well-being of our students while fostering a deeper
        connection with their studies.
      </p>
      
      <div className="text-center">
        <button className="text-center inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{margin: "auto", width: "auto"}}>Learn more <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg></button>
        </div>
      
    </>
  );
}
