import { FaLongArrowAltRight } from "react-icons/fa";

const ServicesDetails = ({ service }) => {
  const { service_id, title, img, price } = service;
  return (
    <div className="card mt-[50px] card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img className="h-60 rounded-xl  w-full p-6" src={img} alt="Shoes" />
      </figure>
      <div className=" p-6">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="card-actions justify-between">
          <p className="text-orange-600 font-bold">Price: {price}</p>
          <FaLongArrowAltRight className="text-3xl text-orange-600" />
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
