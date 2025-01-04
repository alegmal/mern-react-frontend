import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";


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

const UserPlaces = () => {
  const userID = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => (place.creator === userID))
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
