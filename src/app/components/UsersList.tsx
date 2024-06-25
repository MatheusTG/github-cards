import { getCookie } from "@/actions/getCookie";
import React from "react";
import UserComponent from "./UserComponent";

export default async function UsersList() {
  const users = await getCookie("users");

  let usersList: string[] = [];
  if (users) {
    usersList = JSON.parse(users.value);
  }

  return (
    <ul className="flex gap-[1.5rem]">
      {usersList &&
        usersList.map((username) => (
          <UserComponent key={username} username={username} />
        ))}
    </ul>
  );
}
