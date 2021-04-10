import { useState, useEffect } from "react";

import { IUser } from "../interfaces/User";

export function useGetUserDetails(login: string) {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const usersHistory: IUser[] = JSON.parse(
      sessionStorage.getItem("usersHistory")
    );
    const checkUser: IUser = usersHistory.filter((u) => u.login === login)[0];

    if (checkUser) {
      setUser(checkUser);
    }
  }, []);

  return { user };
}
