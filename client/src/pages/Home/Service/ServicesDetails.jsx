import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesDetails = ({ service }) => {
  const { service_id, title, img, price, _id } = service;
  return (
    <div className="card mt-[50px] card-compact bg-base-100 w-96 shadow-xl p-6 mx-auto">
      <figure>
        <img className="h-60 rounded-xl  w-full p-6" src={img} alt="Shoes" />
      </figure>
      <div className=" p-6">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="card-actions justify-between">
          <p className="text-orange-600 font-bold">Price: {price}</p>
          <Link to={`/booking/${_id}`}>
            <FaLongArrowAltRight className="text-3xl text-orange-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
