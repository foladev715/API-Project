import React from "react";

function UserList(props) {
  return (
    <div>
      <div class="card ">
        <div class="card-body">
          <h5 class="card-title">{props.item.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item ">Username: {props.item.username}</li>
          <li class="list-group-item">Email: {props.item.email}</li>
          <li class="list-group-item">Phone: {props.item.phone}</li>
          <li class="list-group-item">Website: {props.item.website}</li>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default UserList;
