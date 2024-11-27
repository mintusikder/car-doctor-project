import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingDetails from "./BookingsDetails";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Img</th>
            <th>Name</th>
            <th>Date</th>
            <th>Price</th>
            <th>Email</th>
            <th>Confirm</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
                bookings.map(booking=> <BookingDetails key={booking._id} booking={booking}></BookingDetails>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
