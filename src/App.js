import React from "react";
import UserList from "./userList";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const userElements = userData.map((val) => (
    <UserList key={val.id} item={val} />
  ));
  return (
    <div>
      <div className="App">
        <h1>Address Book App</h1>
        <br />
        <div className="address-card">{userElements}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
