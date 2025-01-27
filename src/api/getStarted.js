// define apis for events page
import axios from "./axios";
import { API_ROUTES } from "../utils/api_routes";

const GET_STARTED_URL = API_ROUTES.GET_STARTED;

export const getContents = async () => {
  console.log("getting_started/contents api called");
  const responsePage1 = await axios.get(`${GET_STARTED_URL}/contents/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responsePage2 = await axios.get(`${GET_STARTED_URL}/contents/?page=2`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return [
    ...(await responsePage1.data.results),
    ...(await responsePage2.data.results),
  ];
};
