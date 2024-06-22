import { getCookie } from "@/actions/getCookie";
import { setUsers } from "@/actions/setUsers";
import React from "react";

export default async function SearchForm() {
  return (
    <form action={setUsers}>
      <label htmlFor="username">Usuário GitHub</label>
      <input type="text" id="username" name="username" />
      <button type="submit">Adicionar</button>
    </form>
  );
}
