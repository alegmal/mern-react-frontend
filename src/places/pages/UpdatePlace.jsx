import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

const PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_Cropped.jpg/320px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_Cropped.jpg",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    address: "20 W 34th St, New York, NY 10118, United States",
    creator: "u1",
    location: { lat: 40.748817, lng: -73.985428 },
  },
  {
    id: "p2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_Cropped.jpg/320px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_Cropped.jpg",
    title: "Boomba",
    description: "Bbbbooobooboboboboboboob",
    address: "20 W 34th St, New York, NY 10118, United States",
    creator: "u2",
    location: { lat: 10.748817, lng: -23.985428 },
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const identifiedPlace = PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find the place!</h2>
      </div>
    );
  }

  const placeSubmithandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmithandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        placeholder="Title here"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandle}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        placeholder="Description goes here, minimum length is 5."
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        onInput={inputHandle}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
