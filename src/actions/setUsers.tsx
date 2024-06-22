"use server";

import { cookies } from "next/headers";
import { getCookie } from "./getCookie";

export async function setUsers(formData: FormData) {
  const username = formData.get("username") as string;

  const users = await getCookie("users");

  let usersList: string[] = [];
  if (users) {
    usersList = JSON.parse(users.value);
    usersList.push(username);
  }

  if (username) cookies().set("users", JSON.stringify(usersList));
}
