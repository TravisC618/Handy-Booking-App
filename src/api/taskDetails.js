import { get, post, update } from "axios";
import axiosHandler from "./axiosHandler";
const API_TASK_URL = "/api/tasks";

export const fetchTaskDetails = () => {
    return get(API_TASK_URL).then(res => res.data.data);
}