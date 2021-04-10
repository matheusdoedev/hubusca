import { IRepositorie } from "./Repositorie";

export interface IUser {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  url: string;
  blog: string;
  bio: string;
  followers: number;
  public_repos: number;
  repos: IRepositorie[];
}
