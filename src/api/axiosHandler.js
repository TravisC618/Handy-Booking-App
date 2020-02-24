import { get, post, update } from "axios";

export default function axiosHandler(url, type = "GET") {
  // TODO DB_HOST and TOKEN save in another files
  const DB_HOST = "http://localhost:4000";
  switch (type) {
    case "GET":
      return get(DB_HOST + url);
    default:
      return;
  }
}
