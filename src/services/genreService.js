import http from "./httpService";
import { apiUrl } from "../config.json";

export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
];
export function getGenres() {
  return http.get(apiUrl + "/genres");
}
