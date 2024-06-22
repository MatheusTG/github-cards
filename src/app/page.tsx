import React from "react";
import SearchForm from "./components/SearchForm";
import UsersList from "./components/UsersList";
import { getCookie } from "@/actions/getCookie";

export default async function AppPage() {
  return (
    <main>
      <SearchForm />
      <UsersList />
    </main>
  );
}
