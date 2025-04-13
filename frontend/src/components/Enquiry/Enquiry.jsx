import "./Enquiry.css";
import { useState, useEffect } from "react";
import bg from "/src/assets/svgs/stationary-bg2.png";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  School,
  Users,
  Palette,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
export default function Enquiry() {
  const [formState, setFormState] = useState({
    result: "",
    isSuccess: false,
    isLoading: false,
  });

  // Reset form status after 5 seconds of success/error message
  useEffect(() => {
    let timer;
    if (formState.result && !formState.isLoading) {
      timer = setTimeout(() => {
        setFormState(prev => ({ ...prev, result: "" }));
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [formState.result, formState.isLoading]);

  const onSubmit = async (event) => {
    event.preventDefault();
    
    setFormState({
      result: "Sending...",
      isSuccess: false,
      isLoading: true,
    });
    
    const formData = new FormData(event.target);

    // Add the API access key
    formData.append("access_key", "422abc9b-bde7-443b-ac1c-79e2b489d827");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setFormState({
          result: "Form Submitted Successfully!",
          isSuccess: true,
          isLoading: false,
        });
        event.target.reset();
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormState({
        result: error.message || "An error occurred. Please try again.",
        isSuccess: false,
        isLoading: false,
      });
    }
  };

  return (
    <>
      {/* <img
      className="hide-img"
        src={bg}
        alt=""
        style={{
          position: "absolute",
          width: "100vw",
          zIndex: "-1000",
          opacity: "0.5",
        }}
      /> */}
      <div className="max-w-7xl mx-auto">
        <div
          className="max-w-7xl my-4 mx-4 mx-auto bg-white rounded-3xl newshadow overflow-hidden"
          style={{ margin: "1rem", marginBottom: "3rem", marginTop: "1.5rem" }}
        >
          <div className="md:grid md:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div className="newbg p-12 text-white" style={{}}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <School className="h-8 w-8" />
                  Visit Our School
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl">
                    <Users className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Ages</h3>
                      <p>2-16 years old</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl">
                    <Clock className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">School Hours</h3>
                      <p>Monday - Saturday: 8:30 AM - 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl">
                    <Phone className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p>+91-9589304050</p>
                    </div>
                  </div>

                  {/* <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl">
                    <Mail className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p>wisdomworldacademy1@gmail.com</p>
                    </div>
                  </div> */}

                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl">
                    <MapPin className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Find Us</h3>
                      <p>695, Sector-A, Shiv City, Rau, Silicon City, Indore, Madhya Pradesh 452017</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <div
          className="marginn flex gh flex-wrap gap-6 items-center"
          style={{ justifyContent: "space-around"  }}
        >
          <div
            className="hide-div p-4 max-w-3xl mx-auto"
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
          </div> */}
            <div
              className="rounded-xl p-8"
              style={{ margin: "auto", background: "rgba(255, 255, 255, 0.7)" }}
            >
              <h1 className="mb-4 text-2xl font-bold lg:text-3xl">
                Send us a message
              </h1>
              
              {/* Form status message */}
              {formState.result && (
                <div 
                  className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                    formState.isSuccess 
                      ? "bg-green-100 text-green-700" 
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {formState.isSuccess ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  <span>{formState.result}</span>
                </div>
              )}
              
              <form
                onSubmit={onSubmit}
                className="space-y-6"
              >
                {/* No need for action and method attributes since we're handling submission with JavaScript */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Parent's Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Prateek Batham"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="childName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Child's Name
                    </label>
                    <input
                      type="text"
                      name="childName"
                      id="childName"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                {/* <div>
                  <label
                    htmlFor="childAge"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Child's Age
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    id="childAge"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div> */}
                <div>
                  <label
                    htmlFor="class"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Class
                  </label>
                  <select
                    name="class"
                    id="class"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={2}
                    required
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
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
                <div className="w-full text-center">
                  <button
                    type="submit"
                    disabled={formState.isLoading}
                    className={`text-center ${
                      formState.isLoading 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-[#FFC701] hover:bg-[#e6b400] transition-colors"
                    } text-extrabold text-white font-medium rounded-lg p-2.5`}
                    style={{ width: "10rem" }}
                  >
                    {formState.isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}