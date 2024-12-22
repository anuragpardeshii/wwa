import "./About.css";
import parentsbg from "/src/assets/images/bg6.jpg"

export default function OurStory() {
  const content = [
    {
      heading: "Understanding Parents' Hopes and Concerns",
      content:
        "As a parent, you want the best for your child—an environment that challenges, nurtures, and inspires them. We acknowledge the concerns that come with entrusting your child’s education to others. At Wisdom World Academy, we prioritize transparency, communication, and a personalized approach to education. We work closely with you to create an open dialogue, ensuring your child’s needs are met both academically and emotionally. Together, we can address any worries and build a strong foundation for your child's success.",
    },
    {
      heading: "Why Kangaroo Kids is one of the top Kindergarten Schools",
      content:
        "The trust and goodwill that we have built over the years is based on the passion we have invested in education and evolved learning systems. We believe that every child deserves an atmosphere of creativity, compassion and confidence. At all Kangaroo Kids play schools, nursery schools and kindergartens across India and abroad, we ensure a safe, bias-free environment for children to learn and blossom in.",
    },
    {
      heading:
        "Preschool Education / Preschool Curriculum / Kindergarten Learning",
      content:
        "Our unique curriculum is designed with the objective to make children addicted to learning! The methodology ensures that learning is thought provoking and empowering since it is based on the latest theories, brain research and best practices in education.",
    },
    {
      heading: "Why Wisdom World Academy Started",
      content:
        "Wisdom World Academy was founded out of a deep passion for providing a transformative educational experience that blends tradition with innovation. Our founders envisioned a school where children would not just memorize facts, but actively engage with their learning, develop critical thinking skills, and grow as individuals. From the very beginning, we’ve been focused on offering a nurturing and challenging environment that supports each child's unique abilities and talents. Our school started with a mission to create more than just future scholars—but well-rounded, compassionate, and responsible global citizens.",
    },
    {
      heading: "Driven by Passion and Innovation",
      content:
        "At Wisdom World Academy, we are passionate about creating a dynamic learning environment where curiosity is sparked and the joy of learning is never lost. We believe in constantly evolving and integrating innovative methods to stay ahead in education. From advanced learning technologies to cutting-edge teaching methods, we ensure that your child is always engaged and motivated. Our commitment to innovation goes hand-in-hand with our emphasis on character development, giving students the tools to thrive in a world that is constantly changing.",
    },
    {
      heading:
        "Discover Why You’ll Fall in Love with Student Development at Wisdom World Academy!",
      content:
        "Our unique approach to student development ensures that every child receives the support they need to flourish. We take pride in fostering an environment where students feel confident and capable of tackling challenges, both inside and outside the classroom. By encouraging a growth mindset, we help children learn to embrace challenges, develop resilience, and grow from setbacks. At Wisdom World Academy, student development goes beyond academic achievement—it’s about nurturing the skills, values, and confidence that will serve them for a lifetime.",
    },
    {
      heading: "Join Our Story",
      content:
        "Wisdom World Academy is not just a school—it’s a community of dedicated educators, parents, and students, all working together towards a common goal. Our story is one of commitment to excellence, where every child is valued, and every success is celebrated. We invite you to be part of our story, to join a journey that is focused on shaping future leaders, thinkers, and changemakers. Together, we’ll continue to nurture the potential of every child and build a better tomorrow. Join us and be part of the Wisdom World Academy family—where every story begins with opportunity, passion, and growth.",
    },
  ];
  return (
    <>
      <img className="hide-img" src={parentsbg} alt="" style={{position: "absolute", width: "100vw", zIndex: "-1000", opacity: "0.5", marginTop: "-10vh"}} />

      <div style={{ margin: "4% 12%" }}>
        <h2 class="text-4xl mb-6 text-center lg:text-3xl medium-text font-extrabold dark:text-white">
          Our Story
        </h2>
        <h2 class="text-xl mb-4 lg:text-3xl font-extrabold dark:text-white">
          Hello, Dear Parent!
        </h2>
        <p class="mb-4 mt-4 text-sm font-normal  lg:text-xl dark:text-gray-400">
          Welcome to the World of Growth and Possibility at Wisdom World
          Academy!
        </p>
        <p class="mb-4 mt-4 text-sm font-normal  lg:text-xl dark:text-gray-400">
          At Wisdom World Academy, we recognize the importance of the role you
          play in your child’s education. Our partnership with parents is
          integral to the success of our students. We take the time to
          understand your aspirations for your child and actively involve you in
          their educational journey. Our doors are always open to listen,
          support, and share in the celebration of your child's achievements.
        </p>
        {content.map((data, index) => (
          <div className="" key={index}>
            <h3 className="text-xl mb-4 lg:text-3xl font-extrabold dark:text-white">{data.heading}</h3>
            <p class="mb-4 mt-4 text-sm font-normal  lg:text-xl dark:text-gray-400">
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
