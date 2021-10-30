import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import './MyOrders.css';


const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const email = user.email;
  // console.log(user.email);
  // console.log(email);

  const deleteStyle = {
    cursor: "pointer",
  };

  useEffect(() => {
    fetch(`https://powerful-anchorage-66820.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, [email]);
  //   console.log(orders);

  // delete order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete order?");
    if (proceed) {
      const url = `https://powerful-anchorage-66820.herokuapp.com/myOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("order deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    };
  };

  return (
    <div className="order-background py-5">
      <div className="container py-5">
        <div className="py-5">
          <h3 className="text-center text-primary">My orders</h3>
          <Table responsive variant="dark" className="my-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Destination</th>
                <th>Location</th>
                <th>Cost</th>
                <th>Tourist</th>
                <th>Address</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            {orders?.map((order, index) => (
              <tbody key={order?._id}>
                <tr>
                  <td>{index + 1} </td>
                  <td> {order?.destination}</td>
                  <td> {order?.location}</td>
                  <td> ${order?.cost}k</td>
                  <td> {order?.name}</td>
                  <td> {order?.address}</td>
                  <td> {order?.phone}</td>

                  <td onClick={() => handleDeleteOrder(order._id)}>
                    <i className="far fa-trash-alt" style={deleteStyle}></i>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
