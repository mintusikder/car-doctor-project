import { useEffect, useState } from "react";
import BookingDetails from "./BookingsDetails";
import Swal from "sweetalert2";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  // const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    // axios.get(url,{withCredentials: true}).then((res) => {
    //   setBookings(res.data);
    // });

    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });

    // fetch(url)
    // .then((res) => res.json())
    // .then((data) => {
    //   setBookings(data);
    // });
  }, [url,axiosSecure]);
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with deletion only if confirmed
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
              // Remove deleted booking from state
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            } else {
              Swal.fire("Error!", "Failed to delete the booking.", "error");
            }
          })
          .catch((error) => {
            Swal.fire("Error!", "Something went wrong!", "error");
            console.error("Error deleting booking:", error);
          });
      }
    });
  };

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
          {bookings.map((booking) => (
            <BookingDetails
              key={booking._id}
              booking={booking}
              handelDelete={handelDelete}
            ></BookingDetails>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
