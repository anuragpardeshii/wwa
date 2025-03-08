import formbg1 from '/src/assets/images/formbg1.png';

export default function Purpose() {
  
  return (
    <>
    <img className="hide-img" src={formbg1} alt="" loading="lazy" style={{position: "absolute", width: "100vw", zIndex: "-1000", opacity: "0.5", marginTop: "-10vh"}} />
    <div className="">
      <h1 className="my-8 color-blue text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
  Our Purpose
</h1>
      <p className="mb-6 text-lg text-center max-w-6xl mx-auto text-gray-600 ">
      Our purpose is to create a nurturing environment where every student
          can thrive intellectually, emotionally, and socially. We are dedicated
          to fostering a learning community that celebrates curiosity, promotes
          innovation, and encourages each individual to realize their fullest
          potential. At Wisdom World Academy, we aim to cultivate not only academic
          excellence but also lifelong values, resilience, and critical thinking
          skills. By focusing on personal growth and responsibility, we seek to
          prepare students to make meaningful contributions to society and
          confidently navigate the evolving challenges of our world.
      </p>

    </div>
    </>
  );
}
