import React from "react";
import SearchForm from "./components/SearchForm";
import { getCookie } from "@/actions/getCookie";

export default async function AppPage() {
  const cookie = await getCookie("users");
  console.log(cookie);

  // const response = await fetch(`https://api.github.com/users/${user}`);

  return (
    <main>
      <SearchForm />
    </main>
  );
}
