import { useEffect, useState } from "react";

import { IUser } from "../interfaces/User";

export function useGetSearchHistory() {
  const [users, setUsers] = useState<IUser[]>([]);

  // getting/parsing my users search history that is stored on sessionStorage and storing in users state
  useEffect(() => {
    const history = JSON.parse(sessionStorage.getItem("usersHistory"));

    setUsers(history);
  }, []);

  return { users };
}
