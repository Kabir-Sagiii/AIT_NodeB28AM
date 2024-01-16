import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5050/users/getusers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.results);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }, []);
  return (
    <div>
      <h2>Users Component</h2>
      {users.length > 0 ? (
        <div></div>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center", color: "red" }}>No User Data</h2>
        </div>
      )}
    </div>
  );
}

export default Users;
