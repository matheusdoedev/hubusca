import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

import { githubApi } from "../../services/githubApi";

import { IUser } from "../interfaces/User";

import { storeUserHistory } from "../../utils/storeUserHistory";

export function useGetUser(
  userLogin: string,
  setUser: React.Dispatch<React.SetStateAction<IUser>>
) {
  const [status, setStatus] = useState<"INACTIVE" | "LOADING">("INACTIVE");
  const [error, setError] = useState<string>();
  const history = useRouter();

  async function handleGetUser(e: FormEvent) {
    e.preventDefault();
    history.push("/#resultado");
    setUser(null);
    setError("");
    setStatus("LOADING");

    const repos = await githubApi
      .get(`users/${userLogin}/repos`)
      .then((r) => r.data)
      .catch((err) => {
        setError("Usuário não encontrado");
        setStatus("INACTIVE");
      });

    if (repos) {
      await githubApi.get(`users/${userLogin}`).then((r) => {
        setUser(r.data);
        storeUserHistory(r.data, repos);
        setStatus("INACTIVE");
      });
    }
  }

  return { handleGetUser, error, status };
}
