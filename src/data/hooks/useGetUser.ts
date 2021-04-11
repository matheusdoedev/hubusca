import { useState, FormEvent } from "react";

import { githubApi } from "../../services/githubApi";

import { IUser } from "../interfaces/User";

import { storeUserHistory } from "../../utils/storeUserHistory";
import { smoothScroll } from "../../utils/smoothScroll";

export function useGetUser(
  userLogin: string,
  setUser: React.Dispatch<React.SetStateAction<IUser>>
) {
  const [status, setStatus] = useState<"INACTIVE" | "LOADING">("INACTIVE");
  const [error, setError] = useState<string>();

  async function handleGetUser(e: FormEvent) {
    e.preventDefault();

    smoothScroll("resultado");

    setUser(null);
    setError("");
    setStatus("LOADING");

    const repos = await githubApi
      .get(`users/${userLogin}/repos`)
      .then((r) => r.data)
      .catch(() => {
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
