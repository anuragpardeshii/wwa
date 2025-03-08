import React from 'react';
import { Sparkles, Brain, Heart, Globe, Users, Star } from 'lucide-react';
import Awards from "../Home/Awards";
import Mentors from "./Mentors";
// import Preschool from "./Preschool";
// import bg4 from "/src/assets/images/bg6.jpg";
import differenceImage from "/src/assets/images/army/DSC_0484.JPG";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Research-Based Curriculum",
    description: "Our curriculum is designed by educational experts, combining play-based learning with structured activities that promote cognitive development and creativity."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Nurturing Environment",
    description: "Small class sizes ensure each child receives individual attention, fostering emotional intelligence and social skills in a warm, supportive atmosphere."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Perspective",
    description: "Children are exposed to different cultures, languages, and traditions, preparing them to be confident global citizens of tomorrow."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Teachers",
    description: "Our educators hold advanced degrees in early childhood education and receive ongoing professional development to stay current with best practices."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Innovative Learning Spaces",
    description: "Purpose-built classrooms and outdoor areas are designed to inspire curiosity, encourage exploration, and support different learning styles."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Character Development",
    description: "We emphasize values like kindness, respect, and responsibility through daily activities and special programs that build strong character foundations."
  }
];

export default function Difference() {
  return (
    <div>
      <div className="difference-section">
        <div className="max-w-6xl mx-auto">
          <h1 
            className="my-6 pt-4 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What makes Wisdom World Academy unique?
          </h1>

          <div className="p-4 max-w-6xl mx-auto">
            {/* <img
              className="text-center m-2 shadow-lg hover:shadow-xl mx-auto rounded-2xl"
              style={{ width: "60rem" }}
              src={differenceImage}
              alt="Difference"
            /> */}

            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-[#0f335a] mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mx-auto m-4 p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h4 className="text-lg text-center lg:text-xl">
                At Wisdom World Academy, we prioritize the holistic development
                of each child. Our approach goes beyond academics, fostering
                intellectual, emotional, social, and creative growth in a
                nurturing and dynamic environment. We blend innovative teaching
                methods with traditional values to create engaging learning
                experiences tailored to each child’s unique needs. Our passionate educators provide personalized attention, helping
                every child reach their full potential in a safe, supportive
                atmosphere.
              </h4>
            </div>
          </div>
        </div>

        <Awards />
        {/* <Preschool /> */}
        <Mentors />
      </div>
    </div>
  );
}
