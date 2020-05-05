import React from "react";
import UserListElement from "./UserListElement";

var UserList = props => {
  return (
    <div className="user-list">
      {props.users.map(user => {
        return (
          <div>
            <UserListElement user={user} id={user.id} />
          </div>
        );
      })}
    </div>
  );
};
export default UserList;