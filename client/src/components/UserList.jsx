import React from "react";
import DataCardFields from "./UserListElement";

var UserList = props => {
  return (
    <div className="user-list">
      {props.users.map(user => {
        return (
          <div>
            <DataCardFields user={user} id={user.id} />
          </div>
        );
      })}
    </div>
  );
};
export default UserList;