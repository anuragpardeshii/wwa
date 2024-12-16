export default function Enquiry() {
  return (
    <div style={{marginTop: "15vh"}}>
      <div className="flex" style={{ justifyContent: "space-evenly" }}>
        <div style={{ maxWidth: "60%"}}>
        <h1 className="mb-10 text-4xl font-normal  lg:text-3xl"> Admission Enquiry</h1>
          <p class="mb-2 text-lg font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            Welcome to Wisdom World Academy, where we are committed to shaping
            young minds with excellence and care. If you're considering
            admission for your child or need more details about our programs,
            our dedicated admissions team is here to assist you every step of
            the way.
          </p>
          <p class="mb-2 text-lg font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            We understand that choosing the right educational institution is a
            significant decision, and we aim to make this process as smooth as
            possible for you. Whether you have questions about our curriculum,
            extracurricular activities, fee structure, or facilities, feel free
            to reach out to us.
          </p>
          <p class="mb-2 text-lg font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            You can contact us through the following options:
          </p>
          <ul class="mb-2 text-lg font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            <li>Phone Number: +91-9589304050</li>
            <li>Email: wisdomworldacademy@gmail.com</li>
            <li>Office Hours: Monday to Friday, 9:00 AM to 5:00 PM</li>
          </ul>
          <p class="mb-2 text-lg font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            Alternatively, you can fill out the enquiry form below, providing
            your contact information and specific questions. Our admissions team
            will respond promptly to guide you.
          </p>
          <p class="mb-2 text-lg font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            At Wisdom World Academy, we believe in nurturing a lifelong love for
            learning and empowering students to achieve their potential. Join
            our vibrant community and give your child the gift of exceptional
            education.
          </p>
          <p class="mb-2 text-lg font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            Let’s embark on this journey together!
          </p>
        </div>
        <div style={{ maxWidth: "40%" }}>
          <h1 className="mb-6 text-4xl font-normal  lg:text-3xl"> Enquiry Form</h1>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie Green"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                for="phone-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number:
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 19 18"
                  >
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="phone-input"
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required
                />
              </div>
              <p
                id="helper-text-explanation"
                class="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                Select a phone number that matches the format.
              </p>
            </div>
            <div className="mb-5">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Class
              </label>
              <select
                id="Class"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Nursery</option>
                <option>LKG</option>
                <option>UKG</option>
                <option>Class I</option>
                <option>Class II</option>
                <option>Class III</option>
                <option>Class IV</option>
                <option>Class V</option>
                <option>Class VI</option>
                <option>Class VII</option>
                <option>Class VIII</option>
                <option>Class IX</option>
                <option>Class X</option>
              </select>
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                By clicking on Submit, I allow all communication from Wisdom
                World Academy
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
