import { useEffect, useState } from "react";
import ServicesDetails from "./ServicesDetails";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-[130px] mb-[130px]">
      <div className="text-center space-y-3">
        <p className="text-orange-600 font-bold">Service</p>
        <h5 className="text-4xl font-bold">Our Service Area</h5>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesDetails
            service={service}
            key={service._id}
          ></ServicesDetails>
        ))}
      </div>
    </div>
  );
};

export default Service;
