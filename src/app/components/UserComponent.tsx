"use client";

import React from "react";
import Image from "next/image";

interface UserType {
  name: string;
  login: string;
  avatar_url: string;
  repos_url: string;
}

export default function UserComponent({ username }: { username: string }) {
  const [user, setUser] = React.useState<UserType | null>(null);

  React.useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setUser(json);
    }
    fetchUsers();
  }, [username]);

  return (
    <>
      {user && (
        <div className="w-[26rem] rounded-md overflow-hidden shadow-card-shadow">
          <header className="bg-[url('https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg')] h-[8rem] mb-[8rem]">
            <div className="grid justify-center justify-items-center translate-y-[5rem]">
              <div className="w-[6.75rem] rounded-full overflow-hidden border-[0.375rem] border-gray100">
                <Image
                  src={user.avatar_url}
                  alt="paisagem"
                  width={635}
                  height={424}
                  sizes="100vw"
                />
              </div>
              <span className="text-[1.125rem]">{user.name}</span>
              <span className="text-sm text-gray300">@{user.login}</span>
            </div>
          </header>
          <div className="p-[1.5rem]">
            <p className="uppercase">Repositórios</p>
          </div>
        </div>
      )}
    </>
  );
}
