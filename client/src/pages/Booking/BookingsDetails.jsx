const BookingDetails = ({ booking ,handelDelete}) => {
  const { email, date, price, img, customerName ,_id} = booking;
  
  return (
    <tr>
      <th>
        <label>
          <button onClick={()=>handelDelete(_id)} className="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{date}</td>
      <td>{price}</td>
      <td>{email}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Confirm</button>
      </th>
    </tr>
  );
};

export default BookingDetails;
