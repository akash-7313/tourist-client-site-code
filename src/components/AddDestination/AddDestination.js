import React from "react";
import { useForm } from "react-hook-form";
import "./AddDestination.css";

const AddDestination = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("https://powerful-anchorage-66820.herokuapp.com/addDestination", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.insertedId) {
          alert("Destination added successfully");
        }
      });
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-center addestination-background">
      <div className="p-5 my-5">
        <h2 className="mb-3 destinationText-color">Add a Destination</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2"
            type="text"
            {...register("destination")}
            required
            placeholder="Destination Name"
          />
          <br />
          <input
            className="p-2 m-2"
            type="text"
            {...register("location")}
            required
            placeholder="Location Name"
          />
          <br />
          <input
            className="p-2 m-2"
            type="number"
            {...register("cost", { required: true })}
            required
            placeholder="Tour Cost"
          />
          <br />
          <input
            className="p-2 m-2"
            type="text"
            {...register("img", { required: true })}
            required
            placeholder="Img URL"
          />
          <br />
          <textarea
            rows="3"
            cols="23"
            className="p-2 m-2"
            type="text"
            {...register("description", { required: true })}
            required
            placeholder="Description"
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            className="px-3 mt-3 ms-2 btn btn-sm btn-warning"
            type="submit"
          />
          <input
            className="px-3 mt-3 ms-5 btn btn-sm btn-outline-warning"
            type="reset"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDestination;
