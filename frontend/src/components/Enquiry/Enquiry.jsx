import { useState } from "react";
export default function Enquiry() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Add the API access key
    formData.append("access_key", "cd00d7b8-70d5-4754-b37d-4d5cac555875");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ marginTop: "15vh" }}>
      <div className="flex" style={{ justifyContent: "space-evenly" }}>
        <div style={{ maxWidth: "60%" }}>
          <h1 className="mb-10 text-4xl font-normal  lg:text-3xl">
            {" "}
            Admission Enquiry
          </h1>
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
          <h1 className="mb-6 text-4xl font-normal  lg:text-3xl">
            {" "}
            Enquiry Form
          </h1>
          <form onSubmit={onSubmit}>
            {/* Full Name */}
            <div className="mb-5">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Full Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 rounded-l-md">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="name"
                  id="fullName"
                  className="rounded-r-md border border-gray-300 w-full p-2.5 text-gray-900"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2.5 border rounded-lg text-gray-900"
                placeholder="example@domain.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                name="phone"
                id="phone"
                className="w-full p-2.5 border rounded-lg text-gray-900"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Select Class */}
            <div className="mb-5">
              <label
                htmlFor="class"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select Class
              </label>
              <select
                name="class"
                id="class"
                className="w-full p-2.5 border rounded-lg text-gray-900"
                required
              >
                <option value="">Choose a class</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Class I">Class I</option>
                <option value="Class II">Class II</option>
                <option value="Class III">Class III</option>
                <option value="Class IV">Class IV</option>
                <option value="Class V">Class V</option>
                <option value="Class VI">Class VI</option>
                <option value="Class VII">Class VII</option>
                <option value="Class VIII">Class VIII</option>
              </select>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mb-5">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                By clicking Submit, I allow all communication from Wisdom World
                Academy.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg p-2.5"
            >
              Submit
            </button>
          </form>

          {/* Result */}
          {result && (
            <p className="mt-4 text-center text-sm font-medium text-gray-700">
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
