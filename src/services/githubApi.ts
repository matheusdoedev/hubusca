import axios from "axios";

export const githubApi = axios.create({
  baseURL: `https://api.github.com/`,
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});
