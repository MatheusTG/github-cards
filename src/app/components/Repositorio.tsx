"use client";

import React from "react";

interface ReposType {
  id: number;
  name: string;
  description: string;
  topics: string[];
}

export default function Repositorio({ reposUrl }: { reposUrl: string }) {
  const [repos, setRepos] = React.useState<ReposType[]>([]);

  React.useEffect(() => {
    async function fetchRepos() {
      const reposResponse = await fetch(reposUrl);
      const reposJson = await reposResponse.json();
      console.log(reposJson);
      setRepos(reposJson);
    }
    fetchRepos();
  }, [reposUrl]);

  return (
    <>
      {repos.length && (
        <ul className="grid gap-4 h-[16rem] overflow-y-auto">
          {repos.map((item) => (
            <li key={item.id} className="bg-gray200 p-[1rem] rounded-md mr-2">
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-sm mb-[1rem]">{item.description}</p>
              <ul className="flex flex-wrap gap-2">
                {item.topics.map((topic) => (
                  <li key={topic} className="bg-gray500 p-[0.25rem] font-bold rounded-sm">
                    #{topic}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
