import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const bookings = useLoaderData();

  const { title, service_id, price, img } = bookings;
  const handelBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    console.log(name, email, date, price);
    const booking = {
      customerName: name,
      email,
      date,
      service: title,
      price: price,
      img: img,
      service_id: service_id,
    };
    console.log(booking);
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-8">
        Booking Name : {title}
      </h2>
      <form onSubmit={handelBooking} className="card-body">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6 ">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
