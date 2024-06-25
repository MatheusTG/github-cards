import { setUsers } from "@/actions/setUsers";
import React from "react";

export default async function SearchForm() {
  return (
    <form action={setUsers} className="mb-[4rem]">
      <label htmlFor="username">Usuário GitHub</label>
      <input
        type="text"
        id="username"
        name="username"
        className="bg-gray200 p-[0.5rem_0.75rem] mx-[0.5rem] rounded-md"
      />
      <button type="submit" className="bg-primary text-gray100 p-[0.5rem_1rem] rounded-md">
        Adicionar
      </button>
    </form>
  );
}
