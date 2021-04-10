import { IRepositorie } from "../data/interfaces/Repositorie";
import { IUser } from "../data/interfaces/User";

export function storeUserHistory(data: IUser, repos: IRepositorie[]) {
  console.log(repos);

  if (sessionStorage.getItem("usersHistory")) {
    const old_data = JSON.parse(sessionStorage.getItem("usersHistory"));

    if (!old_data.find((user) => user.id === data.id)) {
      old_data.push({ ...data, repos });

      sessionStorage.setItem("usersHistory", JSON.stringify(old_data));
    }
  } else {
    const new_data = [{ ...data, repos }];

    sessionStorage.setItem("usersHistory", JSON.stringify(new_data));
  }
}
