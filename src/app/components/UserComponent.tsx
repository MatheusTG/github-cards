"use client";

import React from "react";
import Image from "next/image";
import Repositorio from "./Repositorio";
import useFetch from "@/hooks/useFetch";

interface UserType {
  name: string;
  login: string;
  avatar_url: string;
  repos_url: string;
}

export default function UserComponent({ username }: { username: string }) {
  const { data } = useFetch<UserType>(
    `https://api.github.com/users/${username}`
  );

  return (
    <>
      {data && (
        <div className="rounded-md overflow-hidden shadow-card-shadow">
          <header className="bg-[url('https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg')] h-[8rem] mb-[7.5rem]">
            <div className="grid justify-center justify-items-center translate-y-[5rem]">
              <div className="w-[6.75rem] rounded-full overflow-hidden border-[0.375rem] border-gray100">
                <Image
                  src={data.avatar_url}
                  alt="paisagem"
                  width={635}
                  height={424}
                  sizes="100vw"
                />
              </div>
              <span className="text-[1.125rem]">{data.name}</span>
              <span className="text-sm text-gray300">@{data.login}</span>
            </div>
          </header>
          <div className="p-[1.5rem]">
            <h2 className="uppercase font-semibold text-sm mb-[1rem]">Repositórios</h2>
            <Repositorio reposUrl={data.repos_url} />
          </div>
        </div>
      )}
    </>
  );
}
