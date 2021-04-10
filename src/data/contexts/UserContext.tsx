import React from "react";

import { useGetUser } from "../hooks/useGetUser";

import { IUser } from "../interfaces/User";

interface IUserContextInterface {
  user: IUser;
  userLogin: string;
  setUserLogin: React.Dispatch<React.SetStateAction<string>>;
  handleGetUser: (e: React.FormEvent) => Promise<void>;
  error: string;
  status: "INACTIVE" | "LOADING";
}

export const UserContext = React.createContext<IUserContextInterface | null>(
  null
);

export const UserContextComponent: React.FC<any> = ({ children }) => {
  const [userLogin, setUserLogin] = React.useState<string>("");
  const [user, setUser] = React.useState<IUser>();

  return (
    <UserContext.Provider
      value={{
        ...useGetUser(userLogin, setUser),
        userLogin,
        setUserLogin,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
