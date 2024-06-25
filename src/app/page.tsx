import React from "react";
import SearchForm from "./components/SearchForm";
import UsersList from "./components/UsersList";

export default async function AppPage() {
  return (
    <main className="max-w-[90vw] w-[50rem] m-auto pt-[4rem]">
      <SearchForm />
      <UsersList />
    </main>
  );
}
