import { FaCalendarAlt } from "react-icons/fa";
import { IoCall, IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-black h-64 rounded-xl flex mt-[130px] mb-[130px] items-center justify-center p-4">
      <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl text-center">
        <div className="flex items-center">
          <FaCalendarAlt className="text-4xl mr-2" />
          <div>
            <p>We are open monday-friday</p>
            <h4 className="text-2xl font-bold">7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="flex items-center">
          <IoCall className="text-4xl mr-2" />
          <div>
            <p>Have a question?</p>
            <h4 className="text-2xl font-bold">+2546 251 2658</h4>
          </div>
        </div>
        <div className="flex items-center">
        <IoLocationSharp className="text-4xl mr-2" />
          <div>
            <p>Need a repair? our address</p>
            <h4 className="text-2xl font-bold">Liza Street, New York</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
