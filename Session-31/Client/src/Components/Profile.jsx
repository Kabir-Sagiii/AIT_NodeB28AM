import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((store) => {
    console.log(store);
    return store.users;
  });

  console.log(user);
  return (
    <div className="container p-5">
      <h2>Profile Component</h2>
      <dl>
        <dt>
          <b>Email Id</b>
        </dt>
        <dd>{user.email}</dd>
        <dt>
          <b>User Name</b>
        </dt>
        <dd>{user.username}</dd>
      </dl>
    </div>
  );
}

export default Profile;
