"use client";

import React from "react";

export default function SearchForm() {
  const [value, setValue] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const usersLocal = window.localStorage.getItem("users");

    let usersList = [];
    if (usersLocal) {
      usersList = JSON.parse(usersLocal);
    }
    usersList.push(value);
    window.localStorage.setItem("users", JSON.stringify(usersList));
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">Usuário GitHub</label>
      <input
        type="text"
        id="user"
        name="user"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
