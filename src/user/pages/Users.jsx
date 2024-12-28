import React from "react";

import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Aleg Ma",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGkj-yHn2RToA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669668073060?e=1740614400&v=beta&t=YV5yNrQFw2r2wsj21IdK0HDMO_8LttSdh37bX5grRIU",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
