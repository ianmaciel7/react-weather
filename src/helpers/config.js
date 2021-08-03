require("dotenv").config();
const API_URL = `http://api.openweathermap.org/data/2.5`;
const API_KEY = process.env.REACT_APP_API_KEY;
export { API_URL, API_KEY };
