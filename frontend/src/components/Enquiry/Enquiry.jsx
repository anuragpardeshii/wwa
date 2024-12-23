import "./Enquiry.css";
import { useState } from "react";
import bg from "/src/assets/svgs/stationary-bg2.png"
export default function Enquiry() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Add the API access key
    formData.append("access_key", "422abc9b-bde7-443b-ac1c-79e2b489d827");

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
    <>
      <img
      className="hide-img"
        src={bg}
        alt=""
        style={{
          position: "absolute",
          width: "100vw",
          zIndex: "-1000",
          opacity: "0.5",
        }}
      />
      <div style={{ padding: "3rem 5%" }}>
        <div
          className="marginn flex gh flex-wrap gap-6 items-center"
          style={{ justifyContent: "space-between"  }}
        >
          <div
            className="hide-div"
            style={{ maxWidth: "55%", padding: "2% 3%", top: "50%" }}
          >
            <p className="mb-2 text-lg font-normal  lg:text-lg dark:text-gray-400">
              Welcome to Wisdom World Academy, where we are committed to shaping
              young minds with excellence and care. If you're considering
              admission for your child or need more details about our programs,
              our dedicated admissions team is here to assist you every step of
              the way.
            </p>
            <p className="mb-2 text-lg font-normal  lg:text-lg dark:text-gray-400">
              You can contact us through the following options:
            </p>
            <ul className="mb-2 text-lg font-normal  lg:text-lg dark:text-gray-400">
              <li style={{ marginLeft: "2rem" }}>
                <b>Phone Number:</b> +91-9589304050
              </li>
              <li style={{ marginLeft: "2rem" }}>
                <b>Email:</b> wisdomworldacademy@gmail.com
              </li>
              <li style={{ marginLeft: "2rem" }}>
                <b>Office Hours:</b>Monday to Friday, 9:00 AM to 5:00 PM
              </li>
            </ul>
            <p className="mb-2 text-lg font-normal  lg:text-lg dark:text-gray-400">
              Alternatively, you can fill out the enquiry form below, providing
              your contact information and specific questions. Our admissions
              team will respond promptly to guide you.
            </p>
            <p className="mb-2 text-lg font-normal  lg:text-lg dark:text-gray-400">
              At Wisdom World Academy, we believe in nurturing a lifelong love
              for learning and empowering students to achieve their potential.
              Join our vibrant community and give your child the gift of
              exceptional education.
            </p>
            <p className="mb-2 text-lg font-normal  lg:text-lg dark:text-gray-400">
              Let’s embark on this journey together!
            </p>
          </div>
          <div
            className="border rounded-xl form-width"
            style={{
              margin: "auto",
              background: "rgba(255, 255, 255, 0.7)",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
          >
            <h1 className="mb-4 text-2xl font-normal lg:text-3xl">
              {" "}
              Enquiry Form
            </h1>
            <form onSubmit={onSubmit}>
              {/* Full Name */}
              <div className="mb-5">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  aria-describedby="helper-text-explanation"
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Prateek Batham"
                />
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
                  aria-describedby="helper-text-explanation"
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  type="text" id="phone" inputMode="numeric"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  By clicking Submit, I allow all communication from Wisdom
                  World Academy.
                </label>
              </div>

              {/* Submit Button */}
              <div className="w-full text-center">
                <button
                  type="submit"
                  className="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg p-2.5"
                  style={{ width: "10rem" }}
                >
                  Submit
                </button>
              </div>
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
    </>
  );
}
