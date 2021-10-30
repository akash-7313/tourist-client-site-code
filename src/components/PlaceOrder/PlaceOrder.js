import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
  const { destinationId } = useParams();
  const [singleDestination, setSingleDestination] = useState({});
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: singleDestination,
  });

  useEffect(() => {
    const url = `https://powerful-anchorage-66820.herokuapp.com/allDestination/${destinationId}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setSingleDestination(result));
  }, [destinationId]);

  //   console.log(singleDestination);

  const onSubmit = (data) => {
    console.log(data);

    fetch("https://powerful-anchorage-66820.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);

        if (result.insertedId) {
          alert("Order processed Successfully");
          reset();
        }
      });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-secondary">Place your Order here</h2>
      <Row xs={1} md={2} className="g-4 container mx-auto mt-3">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              className="img-fluid"
              src={singleDestination?.img}
            />
            <Card.Body>
              <Card.Title>
                {singleDestination?.destination}, {singleDestination?.location}
              </Card.Title>
              <Card.Text className="text-success">
                Tour Cost: ${singleDestination?.cost}k
              </Card.Text>
              <Card.Text className="text-muted">
                {singleDestination?.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <h5 className="text-center">Order Info</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center">
              <input
                className="p-2 m-2"
                defaultValue={user.displayName}
                type="text"
                {...register("name", { required: true })}
                required
                placeholder="Name"
              />
              <br />
              <input
                className="p-2 m-2"
                defaultValue={user.email}
                type="email"
                {...register("email", { required: true })}
                required
                placeholder="Email"
              />
              <br />
              <input
                className="p-2 m-2"
                defaultValue={singleDestination?.destination}
                type="text"
                {...register("destination", { required: true })}
                required
                placeholder="Destination Name"
              />
              <br />
              <input
                className="p-2 m-2"
                defaultValue={singleDestination?.location}
                type="text"
                {...register("location", { required: true })}
                required
                placeholder="Location Name"
              />
              <br />
              <input
                className="p-2 m-2"
                defaultValue={singleDestination?.cost}
                type="number"
                {...register("cost", { required: true })}
                required
                placeholder="Cost"
              />
              <br />
              <input
                className="p-2 m-2"
                type="text"
                {...register("address")}
                required
                placeholder="Address"
              />
              <br />
              <input
                className="p-2 m-2"
                type="text"
                {...register("city")}
                required
                placeholder="City"
              />
              <br />
              <input
                className="p-2 m-2"
                type="text"
                {...register("phone")}
                required
                placeholder="Phone Number"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <input
                className="px-5 mt-3 btn btn-sm btn-warning"
                type="submit"
              />
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrder;

/*
<form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user.displayName} {...register("name")} />
              <br />
              <br />
              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              <br />
              <br />
              <input
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <br />
              <br />
              <input placeholder="City" defaultValue="" {...register("city")} />
              <br />
              <br />
              <input
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />
              <br />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" />
            </form>
*/
