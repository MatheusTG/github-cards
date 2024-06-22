import { getCookie } from "@/actions/getCookie";
import React from "react";
import UserComponent from "./UserComponent";

export default async function UsersList() {
  const users = await getCookie("users");

  let usersList: string[] = [];
  if (users) {
    usersList = JSON.parse(users.value);
  }

  console.log(users)

  return (
    <ul>
      {usersList &&
        usersList.map((username) => (
          <UserComponent key={username} username={username} />
        ))}
    </ul>
  );
}
