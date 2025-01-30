import parentsbg from "/src/assets/images/bg6.jpg";
import { motion } from "framer-motion";

export default function OurStory() {
  const content = [
    {
      "heading": "Understanding Parents' Hopes and Concerns",
      "content": "As a parent, you want the best for your child—an environment that challenges, nurtures, and inspires them. We acknowledge the concerns that come with entrusting your child’s education to others. At Wisdom World Academy, we prioritize transparency, communication, and a personalized approach to education. We work closely with you to create an open dialogue, ensuring your child’s needs are met both academically and emotionally. Together, we can address any worries and build a strong foundation for your child's success."
    },
    {
      "heading": "Why Wisdom World Academy is a Top Choice for Early Education",
      "content": "The trust and goodwill we have built over the years stem from our passion for education and our evolving learning systems. We believe that every child deserves an atmosphere of creativity, compassion, and confidence. At Wisdom World Academy, we ensure a safe, nurturing, and bias-free environment where children can explore, learn, and thrive."
    },
    {
      "heading": "Preschool Education / Curriculum / Early Learning",
      "content": "Our unique curriculum is designed to spark curiosity and make children excited about learning! With a methodology rooted in the latest educational research and best practices, we ensure that learning is thought-provoking and empowering. Our goal is to lay the foundation for a lifelong love of knowledge, critical thinking, and self-discovery."
    },
    {
      "heading": "Why Wisdom World Academy Was Founded",
      "content": "Wisdom World Academy was born out of a deep passion for providing a transformative educational experience that blends tradition with innovation. Our founders envisioned a school where children would not just memorize facts but actively engage with their learning, develop critical thinking skills, and grow as individuals. From the very beginning, we have focused on offering a nurturing and challenging environment that supports each child's unique abilities and talents. Our mission is to cultivate well-rounded, compassionate, and responsible global citizens."
    },
    {
      "heading": "Driven by Passion and Innovation",
      "content": "At Wisdom World Academy, we are committed to creating a dynamic learning environment where curiosity is sparked, and the joy of learning is never lost. We continuously evolve, integrating innovative teaching methods and advanced learning technologies to keep education engaging and relevant. Our dedication to innovation goes hand-in-hand with our emphasis on character development, ensuring students have the tools they need to succeed in a constantly changing world."
    },
    {
      "heading": "Discover Why You’ll Love Student Development at Wisdom World Academy",
      "content": "Our unique approach to student development ensures that every child receives the support they need to flourish. We take pride in fostering an environment where students feel confident and capable of tackling challenges, both inside and outside the classroom. By encouraging a growth mindset, we help children embrace challenges, develop resilience, and grow from setbacks. At Wisdom World Academy, student development goes beyond academic achievement—it’s about nurturing the skills, values, and confidence that will serve them for a lifetime."
    },
    {
      "heading": "Join Our Story",
      "content": "Wisdom World Academy is not just a school—it’s a community of dedicated educators, parents, and students, all working together toward a common goal. Our story is one of commitment to excellence, where every child is valued, and every success is celebrated. We invite you to be part of our story, to join a journey that is focused on shaping future leaders, thinkers, and changemakers. Together, we’ll continue to nurture the potential of every child and build a better tomorrow. Join us and be part of the Wisdom World Academy family—where every story begins with opportunity, passion, and growth."
    }    
  ];

  return (
    <>
      {/* <img className="hide-img" src={parentsbg} alt="" style={{position: "absolute", width: "100vw", zIndex: "-1000", opacity: "0.5", marginTop: "-10vh"}} /> */}

      <div className="mentor-review max-w-6xl px-4">
        <motion.h1 
          className="text-6xl mb-6 text-[#0f335a] text-center lg:text-5xl my-12 medium-text font-extrabold dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Story
        </motion.h1>
        <motion.h2 
          className="text-xl mb-4 lg:text-3xl font-extrabold dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hello, Dear Parent!
        </motion.h2>
        <motion.p 
          className="mb-4 mt-4 text-sm font-normal lg:text-xl dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Welcome to the World of Growth and Possibility at Wisdom World Academy!
        </motion.p>
        <motion.p 
          className="mb-4 mt-4 text-sm font-normal lg:text-xl dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          At Wisdom World Academy, we recognize the importance of the role you play in your child’s education. Our partnership with parents is integral to the success of our students. We take the time to understand your aspirations for your child and actively involve you in their educational journey. Our doors are always open to listen, support, and share in the celebration of your child's achievements.
        </motion.p>
        {content.map((data, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (index + 2) * 0.5, duration: 1 }}
          >
            <h3 className="text-xl mb-4 lg:text-3xl font-extrabold dark:text-white">{data.heading}</h3>
            <p className="mb-4 mt-4 text-sm font-normal lg:text-xl dark:text-gray-400">{data.content}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
