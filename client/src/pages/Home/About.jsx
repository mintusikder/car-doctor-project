import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen p-4 mt-[130px]">
      <div className="hero-content flex-col lg:flex-row items-center gap-28 relative">
        <div className="relative w-60 lg:w-1/2">
          <img
            src={person}
            className="md:max-w-sm rounded-lg shadow-2xl relative "
            alt="Person"
          />
          <img
            src={parts}
            className="max-w-full w-1/2 border-4 border-white rounded-lg shadow-2xl absolute md:w-1/2 md:left-1/2 top-3/4 left-3/4 "
            alt="Parts"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="font-bold text-orange-500 mb-2">About Us</p>
          <h1 className="text-5xl font-bold mb-6">
            We are qualified & experienced in this field
          </h1>
          <p className="py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="pb-6">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-outline btn-warning">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
