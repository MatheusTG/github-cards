import { getCookie } from "@/actions/getCookie";
import React from "react";
import UserComponent from "./UserComponent";

export default async function UsersList() {
  const users = await getCookie("users");
  console.log(users)

  let usersList: string[] = [];
  if (users) {
    usersList = JSON.parse(users.value);
  }

  return (
    <ul className="grid grid-cols-[1fr_1fr] gap-[1.5rem] mb-[4rem]">
      {usersList &&
        usersList.map((username) => (
          <UserComponent key={username} username={username} />
        ))}
    </ul>
  );
}
