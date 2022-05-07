import { fetchAPI } from "./fetchAPI";
import { ShowOffers } from "./ShowOffers";

const fetchApi = new fetchAPI()
const displayoffers = new ShowOffers()
fetchApi.fetchapi();
displayoffers.showoffers()